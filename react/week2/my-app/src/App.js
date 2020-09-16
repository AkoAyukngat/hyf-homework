import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import Timer from "./Timer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer startCount="1000" />
        <TodoList />
      </div>
    );
  }
}
export default App;
