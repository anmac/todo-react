import React from 'react';
import { FiCloudOff } from 'react-icons/fi';
import '../stylesheets/TodosError.css';

function TodosError(error) {
  return (
    <div className="TodosError">
      <FiCloudOff className="TodosError__icon" />
      <h2 className="TodosError__title">Ops!</h2>
      <p className="TodosError__message">
        Something went wrong. Please Try Again
      </p>
      <p className="TodosError__message">{`Error msg: ${error}`}</p>
    </div>
  );
}

export { TodosError };
