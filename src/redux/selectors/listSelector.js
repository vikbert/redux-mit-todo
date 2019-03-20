import {createSelector} from 'reselect';
import * as Filter from '../../constants/Filter';

const getTodos = state => state.todoApp.todos;
const getVisibility = state => state.todoApp.visibility;

export const getFilteredTodos = createSelector(
  [getTodos, getVisibility],
  (todos, visibility) => {
    switch (visibility) {
      case Filter.VISIBILITY_ACTIVE:
        return todos.filter(t => !t.completed);
      case Filter.VISIBILITY_COMPLETED:
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  },
);
