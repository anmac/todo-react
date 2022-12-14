import React from 'react';
import '../stylesheets/TodoCounter.css';
import { TodoContext } from './TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Your have completed {completedTodos} of {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
