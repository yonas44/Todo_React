import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';
import SinglePage from './SinglePage';
import TodoApp from './TodoApp';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ todos: data }));
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (index) => {
    let { todos } = this.state;
    todos[index].completed = !todos[index].completed;
    this.setState(({ todos }) => todos);
  };

  delTodo = (index) => {
    let { todos } = this.state;
    todos.splice(index, 1);
    this.setState(({ todos }) => todos);
  };

  handleNewTodo = (input) => {
    let { todos } = this.state;
    let todo = {
      id: uuidv4(),
      title: input,
      completed: false,
    };
    todos.push(todo);
    this.setState(({ todos }) => todos);
  };

  setUpdate = (event, index) => {
    let { todos } = this.state;
    todos[index].title = event;
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            element={
              <TodoApp
                setUpdate={this.setUpdate}
                delTodo={this.delTodo}
                handleNewTodo={this.handleNewTodo}
                todos={this.state.todos}
                handleChange={this.handleChange}
              />
            }
            exact
            path="/"
          />
          <Route element={<About />} path="/about">
            <Route element={<SinglePage />} path=":id" />
          </Route>
          <Route element={<NotMatch />} path="*" />
        </Routes>
      </>
    );
  }
}
export default TodoContainer;
