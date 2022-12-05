import React from 'react';
import InputTodo from './InputTodo';
import Header from './Header';
import TodosList from './TodoList';

class TodoApp extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodo={this.props.handleNewTodo} />
            <TodosList
              todos={this.props.todos}
              onChange={this.props.handleChange}
              onDelete={this.props.delTodo}
              setUpdate={this.props.setUpdate}
            />
          </div>
        </div>
      </>
    );
  }
}

export default TodoApp;
