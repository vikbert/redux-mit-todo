import React from 'react';
import PropTypes from 'prop-types';

const TodoFilterLink = ({visibility, filterValue, updateVisibility}) => {
  const handleClick = e => updateVisibility(e.target.getAttribute('data-visibility'));

  return (
    <a href={'#/' + visibility}
       data-visibility={filterValue}
       className={visibility === filterValue ? 'selected' : ''}
       onClick={e => handleClick(e)}>
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
