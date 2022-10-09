import React from 'react';
import '../stylesheets/TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert('Completaste el todo ' + props.text);
  };

  const onDelete = () => {
    alert('Borraste el todo ' + props.text);
  };

  return (
    <div className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onCheck}
      >
        C
      </span>
      <p
        className={`TodoItem-description ${
          props.completed && 'TodoItem-description--active'
        }`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </div>
  );
}

export { TodoItem };
