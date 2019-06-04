import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as ListSelector from '../cache/selectors/listSelector';
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
  // hooks: componentDidMount and componentDidUpdate
  useEffect(() => {
    const starredTodos = todos.filter((todo) => {
        return todo.starred && !todo.completed;
    });

    if (starredTodos.length === 3) {
      document.title = `3x MIT Todos starred! `;
    }
  });

  return (
    <ul className="todo-list">
      {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

// visibility: getFilteredTodos is a re-selector function based on visibility.
const mapStateToProps = (state) => ({
  todos: ListSelector.getFilteredTodos(state),
});

export default connect(mapStateToProps, null)(TodoList);
