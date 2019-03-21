import React from "react";
import PropTypes from 'prop-types';
import TodoFilterLink from '../redux/containers/TodoFilterLink';

const TodoControl = ({visibility, counterActive, updateVisibility, removeCompletedTodos}) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div>
      <span className="todo-count">
        <strong>{counterActive}</strong> items left
      </span>
      <ul className="filters">
        {filters.map(filter =>
          <li key={filter}>
            <TodoFilterLink filterValue={filter}/>
          </li>,
        )}
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
