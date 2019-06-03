import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {add} from '../redux/actions/todoActions';

const TodoForm = (props) => {
  const [inputText, setInputText] = useState('');

  const handleChange = e => {
    setInputText(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      const text = inputText.trim();
      if (!text) {
        return;
      }

      const newTodo = {
        id: window.todoStorage.uid++,
        title: inputText,
        starred: 0,
        completed: false,
      };

      props.createTodo(newTodo);
      setInputText('');
    }
  };

  return (
    <div>
      <h1>{"M I T Todo"}</h1>
      <input className="new-todo" type="text" placeholder="What needs to be done?"
             value={inputText}
             onChange={handleChange}
             onKeyPress={handleKeyPress}
             autoFocus={true}/>
    </div>
  );
};

TodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default connect(null, {createTodo: add})(TodoForm);
