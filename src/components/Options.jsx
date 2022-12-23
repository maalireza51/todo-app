import React from 'react'

export const Options = () => {
    return (
        <div className='Options'>
            <h3>Options</h3>
            <div className='OptionItems'>
                <div className='actionOption'>
                    <h5>Actions</h5>
                    <div>Mark All Completed</div>
                    <div>Delete All</div>
                </div>
                <div className='remainingOption'>
                    <h5>Remaining Todos</h5>
                    <div><span>1</span> Item Completed</div>
                </div>
                <div className='statusOption'>
                    <h5>Filter By Status</h5>
                    <div>All</div>
                    <div>Pending</div>
                    <div className='active'>Completed</div>
                </div>
                <div className='colorOption'>
                    <h5>Filter By Color</h5>
                    <div className='colors'>
                        <span className='red active'></span>
                        <span className='blue'></span>
                        <span className='purple'></span>
                        <span className='yellow active'></span>
                        <span className='green'></span>
                        <span className='primary active'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
