import React from 'react'

export const TodoList = ({ children }) => {
    return (
        <div className='TodoList'>
            <h3>TodoList</h3>
            <div className='TodoItems'>
                {children}
            </div>
        </div>
    )
}
