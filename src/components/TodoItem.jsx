import React from 'react'

export const TodoItem = ({ title, status, style }) => {
    return (
        <div className={`TodoItem ${style?style:"primary"}`}>
            <p>{title}</p>
            <div className='actions'>
                <div className={status&&'active'}>Completed</div>
                <div className={!status&&'active'}>Pending</div>
            </div>
            <div className='colors'>
                <span className='red'></span>
                <span className='blue'></span>
                <span className='purple'></span>
                <span className='yellow'></span>
                <span className='green'></span>
                <span className='primary'></span>
            </div>
            <div className='delete'>
                DELETE
            </div>
        </div>
    )
}
