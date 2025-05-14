import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos/")
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  return (
    <div className="min-w-screen bg-gray-100 p-4">
      Hello
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4">My Todo List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border rounded-1 p-2"
            onChange={(e) => setText(e.target.value)}
            placeholder="New Todo... "
          />
          <button className="bg-blue-500 text-white px-4 rounder-r hover:bg-blue-600">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
