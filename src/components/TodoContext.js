import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItemState: saveTodosState,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((n) => n.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  let resultFound;

  if (searchValue.length === 0) {
    searchedTodos = todos;
    resultFound = undefined;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const inputText = searchValue.toLowerCase().trim();
      return todoText.includes(inputText);
    });
    if (searchedTodos.length) resultFound = true;
    else resultFound = false;
  }

  const addItem = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodosState(newTodos);
  };

  const toggleItemComplete = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (newTodos[index].completed) newTodos[index].completed = false;
    else newTodos[index].completed = true;
    saveTodosState(newTodos);
  };

  const deleteItem = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodosState(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        resultFound,
        addItem,
        toggleItemComplete,
        deleteItem,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
