import React, { useState } from "react";

const Todo = ({ todo, index, completeTodo, deleteTodo, editTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.description}
      <div>
        <input type="checkbox" onClick={() => completeTodo(index)} />
        <button onClick={() => deleteTodo(index)}>Delete</button>
        <button onClick={() => editTodo(index)}>Edit</button>
      </div>
    </div>
  );
};

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Description..."
        className="Description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="number" placeholder="Deadline..." />
      <button onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "Get out of bed",
      isCompleted: false,
    },
    {
      id: 2,
      description: "Brush teeth",
      isCompleted: false,
    },
    {
      id: 3,
      description: "Eat breakfast",
      isCompleted: false,
    },
  ]);

  const addTodo = (description) => {
    const newTodos = [...todos, { description }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const editTodo = (todo, index) => {
    console.log(todo);
    setTodos(
      todos.map((todo) => {
        if (todo.index === todo) {
          return { ...todos, todo};
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <div className="Todo_List">
        <TodoInput addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};
