import React from 'react';
import '../stylesheets/NoResults.css';
import { FiHelpCircle } from 'react-icons/fi';

function NoResults() {
  return (
    <div className="NoResults">
      <FiHelpCircle className="NoResults__icon" />
      <h2 className="NoResults__title">Results Not Found</h2>
    </div>
  );
}

export { NoResults };
