import React, { Component } from "react";
import "./Todo.css";

export class Todo extends Component {
  render() {
    const styleListOne = {
      borderStyle: "solid",
      width: "390px",
      color: "red",
      margin: "20px",
      textColor: "blue",
      padding: "10px",
      fontFamily: "Arial",
      listStyleType: "none",
    };
    const styleListTwo = {
      borderStyle: "solid",
      width: "390px",
      color: "violet",
      listStyleType: "none",
      textColor: "blue",
      margin: "20px",
      padding: "10px",
      fontFamily: "Arial",
    };
    const styleListThree = {
      borderStyle: "solid",
      width: "490px",
      margin: "20px",
      listStyleType: "none",
      color: "DodgerBlue",
      textColor: "blue",
      padding: "10px",
      fontFamily: "Arial",
    };

    return (
      <ul>
        <li style={styleListOne}>
          Book a seat at Royal Opera, Tuesday, August 4 2020
        </li>
        <li style={styleListTwo}>Register for moms, Monday August 17 2020 </li>
        <li style={styleListThree}>
          Build baby crip,wagon and wash basin,Monday September 31 2020
        </li>
      </ul>
    );
  }
}

// class desc {
//   constructor(color) {
//     this.color = color;
//   }
// }
// new desc("orange");
