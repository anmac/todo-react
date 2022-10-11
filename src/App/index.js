import React from 'react';
import { TodoProvider } from '../components/TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso de intro de React', completed: false },
//   { text: 'Llorar cuando no compila', completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
