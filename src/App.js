import React from "react";

import GitHub from './components/Github';
import TodoForm from "./redux/containers/TodoForm";
import TodoList from "./redux/containers/TodoList";
import TodoControl from "./redux/containers/TodoControl";
import "./view/css/App.css";

const App = () => {
  return (
    <div>
      <GitHub/>
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
