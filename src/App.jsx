import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos/")
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  const addTodo = () => {
    if(!text.trim()) return;
    fetch(`http://localhost:3001/todos`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({text})
    })
    .then(res => res.json())
    .then(newTodo => setTodos(prev => [...prev, newTodo]));
    setText('');
  }

  return (
    <div className=" bg-gray-100 p-4">
      Hello
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4">My Todo List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border rounded-1 p-2 text-black"
            onChange={(e) => setText(e.target.value)}
            placeholder="New Todo... "
          />
          <button className="bg-blue-500 text-white px-4 rounder-r hover:bg-blue-600"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
