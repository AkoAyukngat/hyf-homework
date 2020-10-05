import React from "react";
import TodoList from "./TodoList";

const FetchedData = (props) => {
  return (
    <section>
      <TodoList todos={props.todos} />
    </section>
  );
};
export default FetchedData;
