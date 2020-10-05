import React, { useState } from "react";

const Todo = ({ todo, index, completeTodo, deleteTodo, updateTodo }) => {
  const [editing, setEdit] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const editTodo = (id) => {
    if (editing) {
      if (!description) {
        return alert("Can't edit an empty form");
      }
      updateTodo(id, description);
    }

    setEdit(!editing);
  };
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      className="todo"
    >
      {editing ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <span>
          {" "}
          {todo.description} | {todo.deadline}
          {""}
        </span>
      )}

      <div>
        <input type="checkbox" onClick={() => completeTodo(index)} />
        <button className="delete_button" onClick={() => deleteTodo(index)}>
          Delete
        </button>
        <button className="edit_button" onClick={() => editTodo(todo.id)}>
          {!editing ? <b>Edit</b> : <b>Update</b>}
        </button>
      </div>
    </div>
  );
};

export default Todo;
