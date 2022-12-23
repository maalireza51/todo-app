import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem, toggleColor, toggleStatus } from '../redux/actionTypes'

export const TodoItem = ({ id, title, status, style }) => {

    const dispatch = useDispatch()

    const handleStatusClick = () => {
        dispatch(toggleStatus(id))
    }

    const handleColorClick = (e) => {
        const color = e.target.className;
        dispatch(toggleColor(id,color))
    }

    const handleDelete = (e) => {
        dispatch(deleteItem(id))
    }

    return (
        <div className={`TodoItem ${style?style:"primary"}`}>
            <p>{title}</p>
            <div className='actions'>
                <div className={status?'active':''} onClick={handleStatusClick}>Completed</div>
                <div className={!status?'active':''} onClick={handleStatusClick}>Pending</div>
            </div>
            <div className='colors'>
                <span className='red' onClick={handleColorClick}></span>
                <span className='blue' onClick={handleColorClick}></span>
                <span className='purple' onClick={handleColorClick}></span>
                <span className='yellow' onClick={handleColorClick}></span>
                <span className='green' onClick={handleColorClick}></span>
                <span className='primary' onClick={handleColorClick}></span>
            </div>
            <div className='delete' onClick={handleDelete}>
                DELETE
            </div>
        </div>
    )
}
