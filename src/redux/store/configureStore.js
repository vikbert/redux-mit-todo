import {createStore} from 'redux';
import configureEnhancer from './configureEnhancer';
import rootReducer from '../reducers/index';
import * as Filters from '../../constants/Filter'

export default function configureStore() {
  const enhancer = configureEnhancer();
  const initialState = {
    todoApp: {
      todos: window.todoStorage.fetch() || [],
      todosChanged: false,
      visibility: Filters.VISIBILITY_ALL,
    },
  };

  const store = createStore(rootReducer, initialState, enhancer);
  store.subscribe(() => {
    let todoApp = store.getState().todoApp;
    if (todoApp.todosChanged) {
      window.todoStorage.save(todoApp.todos);
    }
  });

  return store;
}
