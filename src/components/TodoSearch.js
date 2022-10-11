import React from 'react';
import '../stylesheets/TodoSearch.css';
import { TodoContext } from './TodoContext';

function TodoSearch() {
  const { searchValue: input, setSearchValue: setInput } =
    React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <input
      placeholder="Search"
      className="TodoSearch"
      value={input}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
