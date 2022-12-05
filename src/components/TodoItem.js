import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';

function TodoItem(props) {
  const [editing, setEdit] = useState(false);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEdit(() => true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEdit(() => false);
    }
  };

  const { index, todo, onChange, onDelete, setUpdate } = props;
  const { completed, title } = todo;
  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => {
            onChange(index);
          }}
        />
        <button
          onClick={() => {
            onDelete(index);
          }}
        >
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => setUpdate(e.target.value, index)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
