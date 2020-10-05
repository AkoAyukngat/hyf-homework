import React, { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

const TodoList = (props) => {
  const data = props.todos.map((todo) => {
    return { ...todo, isCompleted: false };
  });

  const [todos, setTodos] = useState(data);

  const addTodo = (description, deadline) => {
    const strDate =
      deadline.getFullYear() +
      "-" +
      (deadline.getMonth() + 1) +
      "-" +
      deadline.getDate();

    const newTodos = [...todos, { description, deadline: strDate }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !todos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const updateTodo = (id, value) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, description: value };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <div className="todos">
      <div className="Todo_List">
        <TodoInput addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
        {todos.length === 0 && <span className="No_Todos">No more Todos Left :(</span>}
      </div>
    </div>
  );
};

export default TodoList;
