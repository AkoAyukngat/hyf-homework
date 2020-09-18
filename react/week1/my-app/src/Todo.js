import React, { Component } from "react";
import "./Todo.css";

function DeadLine(props) {
  const styleListdate = {
    color: "green",
    width: "390px",
    margin: "20px",
    fontFamily: "Arial",
    listStyleType: "none",
  };

  return <span style={styleListdate}>{props.children}</span>;
}

export class Todo extends Component {
  render() {
    
    const allListStyles = {
      borderStyle: "solid",
      width: "490px",
      margin: "20px",
      listStyleType: "none",
      color: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };

    const todoList = [
      {
        description: "Book seat at Royal Opera",
        deadline: "Tuesday, August 4 2020",
      },
      {
        description: "Register for moms",
        deadline: "Friday the 16th 06, 2020",
      },
      {
        description: "Build baby crip,wagon and wash basin",
        deadline: "Monday September 31 2020",
      },
    ];

    return (
    
      <div>
        {todoList.map((todo) => (
          <li style={allListStyles}>
            {todo.description}, <DeadLine>{todo.deadline}</DeadLine>
          </li>
        ))}
      </div>
    );
  }
}


