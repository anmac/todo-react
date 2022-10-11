import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoContext } from '../components/TodoContext';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { NoResults } from '../components/NoResults';
import { ToggleTheme } from '../components/ToggleTheme';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    resultFound,
    toggleItemComplete,
    deleteItem,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <ToggleTheme />
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && resultFound === undefined && (
          <EmptyTodos />
        )}
        {resultFound === false && <NoResults />}

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

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}

export { AppUI };
