import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as Filter from "./constants/Filter";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoControl from "./components/TodoControl";
import {fetchTodos} from "./redux/actions/todoActions";
import {getFilteredTodos} from './redux/selectors/listSelector';
import {countActive, countActiveStarred, countCompleted} from './redux/selectors/counterSelector';

import GitHub from './components/Github';
import "./view/css/App.css";

class App extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <GitHub/>
        <section className="todoapp">
          <header className="header">
            <h1>{"M I T Todo"}</h1>
            {this.props.visibility !== Filter.VISIBILITY_COMPLETED && (
              <TodoForm/>
            )}
          </header>

          <section className="main">
            <ul className="todo-list">
              {this.props.todos.map((todo, index) => {
                return (
                  <TodoItem
                    key={todo.id}
                    index={index}
                    todo={todo}
                    counterActiveStarred={this.props.counterActiveStarred}
                  />
                );
              })}
            </ul>
          </section>
          <footer className="footer">
            <TodoControl
              counterCompleted={this.props.counterCompleted}
              counterActive={this.props.counterActive}
            />
          </footer>
        </section>
        <span>{"CSS template powered by todomvc.com®"}</span>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  visibility: PropTypes.string.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  counterActive: PropTypes.number,
  counterActiveStarred: PropTypes.number,
  counterCompleted: PropTypes.number,
};

const mapStateToProps = state => ({
  todos: getFilteredTodos(state),
  visibility: state.todoApp.visibility,
  counterActive: countActive(state),
  counterCompleted: countCompleted(state),
  counterActiveStarred: countActiveStarred(state),
});

export default connect(mapStateToProps, {fetchTodos})(App);
