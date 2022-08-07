import React from "react";
import "../App.css";
import TodoForm from "./TodoForm.js";
import CheckBox from "./CheckBox.js";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm />
      <CheckBox />
    </div>
  );
}

export default App;
