import { useState } from "react";
import { nanoid } from "nanoid";

export default function Adding() {
  const [inputValue, setInputValue] = useState();
  const [todos, setTodos] = useState([
    { name: "morning meditation ", id: nanoid() },
    { name: "morning yoga", id: nanoid() },
  ]);
  return (
    <div>
      {todos.map((todo) => {
        return <p>{todo.name}</p>;
      })}
    </div>
  );
}
