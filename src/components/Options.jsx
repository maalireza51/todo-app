import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterColor, filterStatus } from '../redux/actionTypes'

export const Options = () => {
    const colors = useSelector(state => state.filter.filterColors)
    const status = useSelector(state => state.filter.status)

    const dispatch = useDispatch()


    const handleColorFilter = (e) => {
        dispatch(filterColor(e.target.getAttribute("color")))
    }
    const handleStatusFilter = (e) => {
        dispatch(filterStatus(e.target.getAttribute("status")))
    }

    const showColors = colors.map((item, index) => {
        const active = item.status;
        return <span
            key={index}
            color={item.color}
            className={`${item.color} ${active ? "active" : ""}`}
            onClick={handleColorFilter}>
        </span>
    })

    const showStatus = () => {
        return (
            <>
                <div
                    status="all"
                    className={status === 'all' ? 'active' : null}
                    onClick={handleStatusFilter}>
                    All
                </div>

                <div
                    status="pending"
                    className={status === 'pending' ? 'active' : null}
                    onClick={handleStatusFilter}>
                    Pending
                </div>

                <div
                    status="completed"
                    className={status === 'completed' ? 'active' : null}
                    onClick={handleStatusFilter}>
                    Completed
                </div>
            </>
        )
    }

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
                    {showStatus()}
                </div>
                <div className='colorOption'>
                    <h5>Filter By Color</h5>
                    <div className='colors'>
                        {showColors}
                    </div>
                </div>
            </div>
        </div>
    )
}
