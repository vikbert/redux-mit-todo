import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoFilterLink from '../components/TodoFilterLink';
import {removeCompleted, updateVisibility} from "../redux/actions/todoActions";
import * as CounterSelector from '../cache/selectors/counterSelector'

const TodoControl = ({visibility, filterCounter, updateVisibility, removeCompletedTodos}) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div>
      <span className="todo-count">
        <strong>{filterCounter[visibility]}</strong> items left
      </span>
      <ul className="filters">
        {filters.map(filter =>
          <li key={filter}>
            <TodoFilterLink
              filterValue={filter}
              filterCounter={filterCounter}
              visibility={visibility}
              updateVisibility={updateVisibility}/>
          </li>,
        )}
      </ul>
      <button className="clear-completed" onClick={removeCompletedTodos}>Clear completed</button>
    </div>
  );
};

TodoControl.propTypes = {
  visibility: PropTypes.string.isRequired,
  filterCounter: PropTypes.object.isRequired,
  updateVisibility: PropTypes.func.isRequired,
  removeCompletedTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  visibility: state.todoApp.visibility,
  filterCounter: CounterSelector.countByFilterValue(state),
});

const mapDispatchToProps = {
  updateVisibility,
  removeCompletedTodos: removeCompleted,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoControl);
