import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';
import SinglePage from './SinglePage';
import TodoApp from './TodoApp';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (index) => {
    const { todos } = this.state;
    todos[index].completed = !todos[index].completed;
    this.setState(({ todos }) => todos);
  };

  delTodo = (index) => {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState(({ todos }) => todos);
  };

  handleNewTodo = (input) => {
    const { todos } = this.state;
    const todo = {
      id: uuidv4(),
      title: input,
      completed: false,
    };
    todos.push(todo);
    this.setState(({ todos }) => todos);
  };

  setUpdate = (event, index) => {
    const { todos } = this.state;
    todos[index].title = event;
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            element={
              (
                <TodoApp
                  setUpdate={this.setUpdate}
                  delTodo={this.delTodo}
                  handleNewTodo={this.handleNewTodo}
                  todos={todos}
                  handleChange={this.handleChange}
                />
              )
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
