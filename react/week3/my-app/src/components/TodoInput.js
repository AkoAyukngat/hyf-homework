import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState();
  // const [showDescriptionError, setShowDescriptionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(deadline);
    if (!value) {
      return alert("Please enter a description");
      //   setShowDescriptionError(true);
      //   return
      // } else {
      //   setShowDescriptionError(false)
    }
    if (!deadline) {
      return alert("Please enter a deadline");
    }
    addTodo(value, deadline);
    setValue("");
    setDeadline();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Description..."
        className="description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <DatePicker
        className="deadline"
        selected={deadline}
        onChange={(date) => setDeadline(date)}
        placeholderText="Deadline..."
        dateFormat="Y-MM-dd"
        minDate={new Date()}
        isClearable="true"
      />
      {/* 
      {showDescriptionError ? <span> Please enter a description </span> : null} */}

      <button className="addTodo_Button" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
