import React, {Component} from "react";
import classnames from 'classnames';
import TodoStarIcon from './TodoStarIcon';
import TodoTextInput from './TodoTextInput';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  state = {
    completed: this.props.todo.completed,
    editing: false,
  };

  handleCheckboxChange = event => {
    const isCompleted = event.target.checked;
    this.setState({
      completed: isCompleted,
    });

    const newTodo = {...this.props.todo, completed: isCompleted};

    this.props.updateTodo(newTodo, this.props.todo);
  };

  handleDoubleClick = () => {
    this.setState({
      editing: true,
    });
  };

  handleInputFieldUpdate = (text) => {
    if (text.length === 0) {
      this.props.deleteTodo(this.props.todo.id);
    } else if (text !== this.props.todo.title) {
      const newTodo = {...this.props.todo, title: text};
      this.props.updateTodo(newTodo, this.props.todo);
    }

    this.setState({editing: false});
  };

  render() {
    let itemView;
    if (this.state.editing) {
      itemView = (
        <TodoTextInput editing={this.state.editing}
                       text={this.props.todo.title}
                       handleInputFieldUpdate={this.handleInputFieldUpdate}/>
      );
    } else {
      itemView = (
        <div className="view">
          <input className="toggle" type="checkbox"
                 onChange={this.handleCheckboxChange}
                 defaultChecked={this.state.completed}
          />
          <label onDoubleClick={this.handleDoubleClick}>{this.props.todo.title}</label>
          <TodoStarIcon todo={this.props.todo}/>
        </div>
      );
    }
    return (
      <li className={classnames('todo', {'completed': this.state.completed}, {'editing': this.state.editing})}>
        {itemView}
      </li>
    );
  }
}

TodoItem.propTypes = {
  editing: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
