import React from "react";
import "../App.css";
import TodoForm from "./TodoForm.js";
import Adding from "./Adding";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <h2>Todos:</h2>
      <Adding />
    </div>
  );
}

export default App;
