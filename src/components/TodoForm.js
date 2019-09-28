import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../redux/actions/todoActions';
import uuid from 'uuid';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [todoTitle, setTodoTitle] = useState('');

    const handleChange = e => {
        setTodoTitle(e.target.value.trimLeft());
    };

    const handleOnKeyPress = e => {
        if (todoTitle.length === 0) {
            return;
        }

        if (e.key === 'Enter') {
            addTodoOnKeyEnter();
        }
    };

    const addTodoOnKeyEnter = () => {
        const newTodo = {
            id: uuid.v4(),
            title: todoTitle,
            starred: 0,
            completed: false,
        };

        dispatch(add(newTodo));
        setTodoTitle('');
    };

    return (
        <>
            <h1>{"M I T Todo"}</h1>
            <input className="new-todo"
                   type="text"
                   placeholder="What needs to be done?"
                   value={todoTitle}
                   onChange={handleChange}
                   onKeyPress={handleOnKeyPress}
                   autoFocus={true}/>
        </>
    );
};

export default TodoForm;
