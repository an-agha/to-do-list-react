import { MouseEventHandler } from "react"
import style from "../styles/to-do-item.module.css"

interface Props {
  item: string
  isCompleted: boolean
  onToggle: Function
  onDelete: MouseEventHandler
}
function ToDoItem({item,isCompleted,onToggle,onDelete}: Props) {
  console.log(isCompleted)


  return (
    <li className={`${style.listItem} ${isCompleted ? style.done : ""}`}>
        <input 
          type="checkbox" 
          checked={isCompleted} 
          onChange={({target}) =>onToggle(target.checked)} />
        <div className={style.listContent}>
          <span className={style.item}>{item}</span>
          <button 
            className={style.dltBtn}
            onClick={onDelete}>
            Delete
          </button>
        </div>
    </li>
  )
}

export default ToDoItem