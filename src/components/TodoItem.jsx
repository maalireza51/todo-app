import { useDispatch, useSelector } from 'react-redux'
import { colors, deleteItem, selectTodo, toggleColor, toggleStatus } from '../redux/actionTypes'

export const TodoItem = ({ id }) => {

    const todoItem = useSelector(selectTodo(id))
    const dispatch = useDispatch()
    
    const title = todoItem.title
    const status = todoItem.completed
    const style = todoItem.color

    const handleStatusClick = () => {
        dispatch(toggleStatus(id))
    }
    
    const handleColorClick = (color) => {
        dispatch(toggleColor(id,color))
    }
    
    const handleDelete = (e) => {
        dispatch(deleteItem(id))
    }
    
    const colorItems = colors.map((item,index)=><span key={index} className={item} onClick={()=>handleColorClick(item)}></span>)
    
    return (
        <div className={`TodoItem ${style}`}>
            <p>{title}</p>
            <div className='actions'>
                <div className={status?'active':''} onClick={handleStatusClick}>Completed</div>
                <div className={!status?'active':''} onClick={handleStatusClick}>Pending</div>
            </div>
            <div className='colors'>
                {colorItems}
            </div>
            <div className='delete' onClick={handleDelete}>
                DELETE
            </div>
        </div>
    )
}
