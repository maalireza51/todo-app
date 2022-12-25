import { useDispatch, useSelector } from 'react-redux'
import { status, filterStatus, selectStatus } from '../redux/actionTypes'

export const StatusItems = () => {
    const filteredStatus = useSelector(selectStatus)
    const dispatch = useDispatch()

    const handleStatusFilter = (item) => {
        dispatch(filterStatus(item))
    }

    const showStatus = status.map((item, index) => {
        const filtered = filteredStatus === item ? "active" : ""
        return <div
            key={index}
            className={filtered}
            onClick={() => handleStatusFilter(item)}>
            {item}
        </div>
    })

    return (
        <div className='statusOption'>
            <h5>Filter By Status</h5>
            {showStatus}
        </div>
    )
}
