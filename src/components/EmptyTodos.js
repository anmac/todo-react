import React from 'react';
import { FiClipboard } from 'react-icons/fi';
import '../stylesheets/EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className="EmptyTodos">
      <FiClipboard className="EmptyTodos__icon" />
      <h2 className="EmptyTodos__title">You don't have any Task</h2>
      <p className="EmptyTodos__message">
        Use <span className="EmptyTodos__message-btn">+</span> button to add new
        TODOs
      </p>
    </div>
  );
}

export { EmptyTodos };
