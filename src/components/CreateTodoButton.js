import React from 'react';
import '../stylesheets/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button
      className={`CreateTodoButton ${props.openModal && 'closeIcon'}`}
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
