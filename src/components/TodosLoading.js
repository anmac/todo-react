import React from 'react';
import '../stylesheets/TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <p className="LoadingTodo-text">
        <span className="LoadingTodo-btn">C</span>Loading
      </p>
      <p className="LoadingTodo-text">
        <span className="LoadingTodo-btn">C</span>Loading
      </p>
      <p className="LoadingTodo-text">
        <span className="LoadingTodo-btn">C</span>Loading
      </p>
    </div>
  );
}

export { TodosLoading };
