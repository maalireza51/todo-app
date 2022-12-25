import { useDispatch } from "react-redux"
import { completeAll, pendingAll, removeCompleted } from "../redux/actionTypes"

export const ActionOption = () => {

    const dispatch = useDispatch()

    const handleAllCompleted = () => {
        dispatch(completeAll())
    }
    const handleAllPending = () => {
        dispatch(pendingAll())
    }
    const handleRemoveCompleted = () => {
        confirm("Are you serious?") && dispatch(removeCompleted())
    }
    return (
        <div className='actionOption'>
            <h5>Actions</h5>
            <div onClick={handleAllCompleted}>All Completed</div>
            <div onClick={handleAllPending}>All Pending</div>
            <div className="removeAll" onClick={handleRemoveCompleted}>Remove Completed</div>
        </div>
    )
}
