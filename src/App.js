import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro de React', completed: false },
  { text: 'Llorar cuando no compila', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((n) => n.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length == 0) searchedTodos = todos;
  else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const inputText = searchValue.toLowerCase().trim();
      return todoText.includes(inputText);
    });
  }

  const toggleItemComplete = (text) => {
    const index = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    if (newTodos[index].completed) newTodos[index].completed = false;
    else newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const deleteItem = (text) => {
    const index = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch input={searchValue} setInput={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCheck={() => toggleItemComplete(todo.text)}
            onDelete={() => deleteItem(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
