import React, { useState } from "react";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      className="todo-form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event.target.value);
      }}
    >
      <input
        value={inputValue}
        type="text"
        placeholder="Add a todo"
        name="text"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add todo
      </button>
    </form>
  );
}
export default TodoForm;
