import React from 'react';
import '../stylesheets/TodoSearch.css';

function TodoSearch({ input, setInput }) {
  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
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
