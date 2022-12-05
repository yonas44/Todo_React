import PropTypes from 'prop-types';
import React from 'react';
import InputTodo from './InputTodo';
import Header from './Header';
import TodosList from './TodoList';

const TodoApp = (props) => {
  const {
    handleNewTodo,
    todos, handleChange,
    delTodo,
    setUpdate,
  } = props;
  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodo={handleNewTodo} />
          <TodosList
            todos={todos}
            onChange={handleChange}
            onDelete={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </>
  );
};

TodoApp.defaultProps = {
  handleNewTodo: null,
  handleChange: null,
  todos: null,
  delTodo: null,
  setUpdate: null,
};

TodoApp.propTypes = {
  handleNewTodo: PropTypes.func,
  handleChange: PropTypes.func,
  todos: PropTypes.string,
  delTodo: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodoApp;
