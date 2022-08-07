import React, { useState } from "react";
import { nanoid } from "nanoid";

function CheckBox() {
  const [todos, setTodos] = useState([
    { name: "morning yoga", checked: false, id: "nanoid" },
    { name: "morning meditation", checked: false, id: "nanoid" },
    { name: "read ", checked: false, id: "nanoid" },
    { name: "code ", checked: false, id: "nanoid" },
    { name: "eat ", checked: false, id: "nanoid" },
  ]);

  return (
    <>
      <h2>Todos Checkbox</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <ul key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => {
                  setTodos(
                    todos.map((todo_) => {
                      return todo_.id === todo.id
                        ? { ...todo_, checked: !todo_.checked }
                        : todo_;
                    })
                  );
                }}
              />
              <span style={{ textDecoration: todo.checked && "line-through" }}>
                {todo.name}
              </span>
            </ul>
          );
        })}
      </ul>
    </>
  );
}

export default CheckBox;
