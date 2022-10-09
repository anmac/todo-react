import React from 'react';
import '../stylesheets/TodoList.css';

function TodoList(props) {
  console.log(props.searchValue);
  return <section className="TodoList">{props.children}</section>;
}

export { TodoList };
