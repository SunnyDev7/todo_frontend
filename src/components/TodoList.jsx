import React from 'react'

import TodoItem from './TodoItems'

export default function TodoList({todos, setTodos}){
    return(
        <ul>
            {
                todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
                 })
            }
        </ul>
    )
}