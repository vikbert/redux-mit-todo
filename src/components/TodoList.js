import React from 'react';
import {connect} from 'react-redux';
import * as ListSelector from '../redux/selectors/listSelector';
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul className="todo-list">
      {props.todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: ListSelector.getFilteredTodos(state),
});

export default connect(mapStateToProps, null)(TodoList);
