import React from "react";

export default function TodoItem({todo, setTodos}){
    const toggleComplete = () => {
        fetch(`http://localhost:3001/todos/${todo.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ completed: !todo.completed})
        })
        .then(res => res.json())
        .then(updated => {
            setTodos(prev => prev.map(t => t.id === updated.id ? updated : t))
        })
    }

    const deleteTodo = () => {
        fetch(`http://localhost:3001/todos/${todo.id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(deleted => {
            setTodos(prev => prev.filter(t => t.id !== deleted.id))
        })
    };

    return(
        <li className="flex justify-between items-center border-b py-2">
            <span
                className={`flex text-black ${todo.completed ? 'line-through text-gray-400' : ''}`}
                onClick={toggleComplete}
            > 
                {todo.text}
            </span>
            <button
                className="text-red-500 hover:text-red-700 ml-2"
                onCLick={deleteTodo}
            >
                Delete
            </button>
        </li>
    )
}