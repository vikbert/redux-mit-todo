import React from "react";
import GitHub from './components/Github';
import './view/css/index.css';
import "./view/css/App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoControl from "./components/TodoControl";

const App = () => {
  return (
    <div>
      <GitHub gitUrl={'https://github.com/vikbert/redux-MIT-todo'}/>
      <section className="todoapp">
        <header className="header">
          <TodoForm/>
        </header>
        <section className="main">
          <TodoList/>
        </section>
        <footer className="footer">
          <TodoControl/>
        </footer>
      </section>
      <span>{"CSS template powered by todomvc.com®"}</span>
    </div>
  );
};

export default App;
