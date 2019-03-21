import React from 'react';
import PropTypes from 'prop-types';

const TodoFilterLink = ({visibility, filterValue, updateVisibility}) => {
  const className = visibility === filterValue ? 'selected' : '';

  return (
    <a href={'#/' + filterValue} className={className} onClick={() => updateVisibility(filterValue)}>
      {filterValue}
    </a>
  );
};

TodoFilterLink.prototype = {
  visibility: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  updateVisibility: PropTypes.func.isRequired,
};

export default TodoFilterLink;
