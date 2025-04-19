import style from "../styles/to-do-item.module.css"

interface Props {
  item: string
}
function ToDoItem({item}: Props) {

  const deleteItem = () => {

  }

  return (
    <li className={style.listItem}>
        <input type="checkbox"/>
        <div className={style.listContent}>
          <span className={style.item}>{item}</span>
          <button 
            className={style.dltBtn}
            onClick={deleteItem}>
            Delete
          </button>
        </div>
    </li>
  )
}

export default ToDoItem