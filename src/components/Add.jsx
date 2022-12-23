import React from 'react'

export const Add = () => {

    const handleKeyUp = (e) => {
        (e.key === 'Enter' || e.keyCode === 13) && alert(1)
    }

    return (
        <div className='Add'>
            <input type="text" placeholder='Type Your Task' onKeyUp={handleKeyUp}/>
            <button>Add</button>
        </div>
    )
}
