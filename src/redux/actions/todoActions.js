import * as types from './types';

export const fetchTodos = () => ({
  type: types.FETCH_TODOS,
});

export const createTodo = (todo) => ({
  type: types.CREATE_TODO,
  todo,
});

export const updateTodo = (newTodo, oldTodo) => ({
  type: types.UPDATE_TODO,
  newTodo,
  oldTodo,
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  id,
});
export const removeCompletedTodos = () => ({
  type: types.REMOVE_COMPLETED_TODOS,
});

export const updateVisibility = (visibility) => ({
  type: types.UPDATE_VISIBILITY,
  visibility,
});
