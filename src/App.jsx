import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
