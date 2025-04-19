import { MouseEventHandler } from "react"
import style from "../styles/to-do-item.module.css"

interface Props {
  item: string
  onDelete: MouseEventHandler
}
function ToDoItem({item, onDelete}: Props) {


  return (
    <li className={style.listItem}>
        <input type="checkbox"/>
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