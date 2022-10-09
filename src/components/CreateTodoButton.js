import React from 'react';
import '../stylesheets/CreateTodoButton.css';

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('Aqui va el modal')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
