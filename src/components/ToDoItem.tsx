import "../styles/to-do-item.css"

interface Props {
  item: string
}
function ToDoItem({item}: Props) {
  return (
    <li>
        <input type="checkbox"/>
        <span>{item}</span>
        <button>
            Delete
        </button>
    </li>
  )
}

export default ToDoItem