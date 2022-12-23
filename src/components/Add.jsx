import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/actionTypes'

export const Add = () => {
    const [todo, setTodo] = useState("")
    const dispatch = useDispatch()

    const handleKeyUp = (e) => {
        const trimmedTodo = todo.trim()
        if ((e.key === 'Enter' || e.keyCode === 13) && trimmedTodo !== "") {
            dispatch(addItem(todo));
            setTodo('')
        }
    }
    const handleClick = () => {
        const trimmedTodo = todo.trim()
        if (trimmedTodo !== "") {
            dispatch(addItem(todo));
        }
        setTodo('')
    }

    return (
        <div className='Add'>
            <input type="text" placeholder='Type Your Task' onKeyUp={handleKeyUp} value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
