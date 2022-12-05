import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    const { todos, onChange, onDelete, setUpdate } = this.props;
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
  }
}

export default TodosList;
