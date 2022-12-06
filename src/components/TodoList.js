import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos,
    onChange,
    onDelete,
    setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          onChange={onChange}
          onDelete={onDelete}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.defaultProps = {
  onChange: null,
  todos: null,
  onDelete: null,
  setUpdate: null,
};

TodosList.propTypes = {
  onChange: PropTypes.func,
  todos: PropTypes.string,
  onDelete: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
