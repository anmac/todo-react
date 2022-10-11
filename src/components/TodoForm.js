import React from 'react';
import { TodoContext } from './TodoContext';
import '../stylesheets/TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const { addItem, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const validateContent = (text) => {
    return text.trim();
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const showError = (element) => {
    const animation = [
      { transform: 'translate(0px, 0)' },
      { transform: 'translate(-10px, 0)' },
      { transform: 'translate(10px, 0)' },
      { transform: 'translate(0px, 0)' },
    ];
    const duration = {
      duration: 200,
      iterations: 1,
    };

    element.animate(animation, duration);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateContent(newTodoValue)) {
      addItem(newTodoValue);
      setOpenModal(false);
    } else {
      const textArea = document.querySelector('.Form__Body');
      showError(textArea);
      setNewTodoValue('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="Form">
      <label className="Form__Header">New TODO</label>
      <textarea
        onChange={onChange}
        value={newTodoValue}
        placeholder="Enter your text"
        className="Form__Body"
      />
      <div className="Form__Footer">
        <button type="submit" className="Form__Btn Form__Btn--Add">
          Add
        </button>
        <button
          onClick={onCancel}
          type="button"
          className="Form__Btn Form__Btn--Cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
