import {createSelector} from 'reselect';

const getTodos = state => state.todoApp.todos;

export const countActive = createSelector(getTodos, todos => {
  return todos.filter(todo => !todo.completed).length;
});

export const countActiveStarred = createSelector(getTodos, todos => {
  return todos.filter(todo => !todo.completed && todo.starred).length;
});

export const countCompleted = createSelector(getTodos, todos => {
  return todos.filter(todo => todo.completed).length;
});
