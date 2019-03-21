import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import GitHub from './components/Github';
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoControl from "./components/TodoControl";
import {fetchTodos} from "./redux/actions/todoActions";
import * as ListSelector from './redux/selectors/listSelector';
import * as CounterSelector from './redux/selectors/counterSelector';
import "./view/css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <GitHub/>
        <section className="todoapp">
          <header className="header">
            <TodoForm/>
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
  todos: ListSelector.getFilteredTodos(state),
  visibility: state.todoApp.visibility,
  counterActive: CounterSelector.countActive(state),
  counterCompleted: CounterSelector.countCompleted(state),
  counterActiveStarred: CounterSelector.countActiveStarred(state),
});

export default connect(mapStateToProps, {fetchTodos})(App);
