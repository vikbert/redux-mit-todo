import {createStore} from 'redux';
import configureEnhancer from './configureEnhancer';
import rootReducer from '../reducers/index';
import * as Filters from '../../constants/Filter';
import {saveTodos} from "../../http/todosClient";

export default function configureStore() {
    const enhancer = configureEnhancer();
    
    const initialState = {
        todoApp: {
            todos: [],
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
