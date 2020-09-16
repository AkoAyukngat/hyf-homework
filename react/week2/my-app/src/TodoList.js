import React from "react";
import "./App.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Get out of bed",
        },
        {
          id: 2,
          description: "Brush teeth",
        },
        {
          id: 3,
          description: "Eat breakfast",
        },
      ],
      check: false,
    };
  }

  addTodo = () => {
    const newTodo = [{ id: 4, description: "sleep well" }];
    this.setState({ todos: this.state.todos.concat(newTodo) });
  };
  deleteTodo = (index) => {
    const todos = Object.assign([], this.state.todos);
    todos.splice(index, 1);
    this.setState({ todos: todos });

  };
 

  checked = () => {
    this.setState({ check: !this.state.check });
  };

  render() {
    const { check } = this.state;
    return (
      <div>
        <button onClick={this.addTodo}>Add Todo</button>

        <ul>
          <span
            style={
              check
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
           
            {this.state.todos.map((todo, key) => (
              <div key={key}>
                {todo.id} {todo.description}
                <input
                  onClick={this.checked}
                  id="todo-checkbox"
                  type="checkbox"
                  defaultChecked={false}
                />
                <button onClick={this.deleteTodo.bind(this.index)}>
                  Delete
                </button>
              </div>
            ))}
          </span>
        </ul>
      </div>
    );
  }
}

export default TodoList;
