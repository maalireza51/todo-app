import { useSelector } from 'react-redux'
import { selectPendings } from '../redux/actionTypes'

export const PendingCount = () => {
    const count = useSelector(selectPendings).length
    return (
        <div className='remainingOption'>
            <h5>Remaining Todos</h5>
            <div><span>{count}</span> Item is Pending...</div>
        </div>
    )
}
