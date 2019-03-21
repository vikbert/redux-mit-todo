import React from "react";
import PropTypes from 'prop-types';
import * as Filter from '../constants/Filter';

const TodoControl = ({visibility, counterActive, updateVisibility, removeCompletedTodos}) => {
  const handleClick = e => updateVisibility(e.target.getAttribute('data-visibility'));

  return (
    <div>
        <span className="todo-count">
          <strong>{counterActive}</strong> items left
        </span>
      <ul className="filters">
        <li>
          <a href="#/all"
             data-visibility={Filter.VISIBILITY_ALL}
             className={visibility === Filter.VISIBILITY_ALL ? "selected" : ""}
             onClick={e => handleClick(e)}>All</a>
        </li>
        <li>
          <a href="#/all"
             data-visibility={Filter.VISIBILITY_ACTIVE}
             className={visibility === Filter.VISIBILITY_ACTIVE ? "selected" : ""}
             onClick={e => handleClick(e)}>Active</a>
        </li>
        <li>
          <a href="#/all"
             data-visibility={Filter.VISIBILITY_COMPLETED}
             className={visibility === Filter.VISIBILITY_COMPLETED ? "selected" : ""}
             onClick={e => handleClick(e)}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={removeCompletedTodos}>Clear completed</button>
    </div>
  );
};

TodoControl.propTypes = {
  visibility: PropTypes.string.isRequired,
  counterActive: PropTypes.number.isRequired,
  updateVisibility: PropTypes.func.isRequired,
  removeCompletedTodos: PropTypes.func.isRequired,
};

export default TodoControl;
