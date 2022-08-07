import React, { useState } from "react";
import { nanoid } from "nanoid";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([...todos, { name: inputValue, id: nanoid() }]);
          setInputValue("");
        }}
      >
        <input
          required
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </>
  );
}

export default TodoForm;
