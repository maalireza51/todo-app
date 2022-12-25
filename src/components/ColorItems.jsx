import { useDispatch, useSelector } from 'react-redux'
import { colors, filterColor, selectColors } from '../redux/actionTypes'

export const ColorItems = () => {
  const filteredColors = useSelector(selectColors)
  const dispatch = useDispatch()

  const handleColorFilter = (color, filter) => {
    dispatch(filterColor(color, filter === "" ? true : false))
  }

  const showColors = colors.map((item, index) => {
    const filtered = filteredColors.find(color => item === color) ? "active" : ""
    return <span
      key={index}
      className={`${item} ${filtered}`}
      onClick={() => handleColorFilter(item, filtered)}></span>
  })
  return (

    <div className='colorOption'>
      <h5>Filter By Color</h5>
      <div className='colors'>
        {showColors}
      </div>
    </div>
  )
}
