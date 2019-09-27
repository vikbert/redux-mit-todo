import {createStore} from 'redux';
import configureEnhancer from './configureEnhancer';
import rootReducer from '../reducers/index';
import * as Filters from '../../constants/Filter';
import {loadTodos, saveTodos} from "../../http/todosClient";

export default function configureStore() {
    const enhancer = configureEnhancer();
    
    const todos = loadTodos();
    console.log(todos);
    const initialState = {
        todoApp: {
            todos: todos || [],
            todosChanged: false,
            visibility: Filters.VISIBILITY_ALL,
        },
    };

    const store = createStore(rootReducer, initialState, enhancer);

    store.subscribe(() => {
        let todoApp = store.getState().todoApp;
        if (todoApp.todosChanged) {
            saveTodos(todoApp.todos);
        }
    });

    return store;
}
