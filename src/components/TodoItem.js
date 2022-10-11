import React from 'react';
import '../stylesheets/TodoItem.css';
import { FiCheck, FiX } from 'react-icons/fi';

function TodoItem(props) {
  return (
    <div className="TodoItem">
      <FiCheck
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onCheck}
      />
      <p
        className={`TodoItem-description ${
          props.completed && 'TodoItem-description--active'
        }`}
      >
        {props.text}
      </p>
      <FiX className="Icon Icon-delete" onClick={props.onDelete} />
    </div>
  );
}

export { TodoItem };
