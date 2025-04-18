import Form from "./components/Form"
import ToDoItem from "./components/ToDoItem"
import style from "./styles/app.module.css"
function App() {
  return (
    <div className={style.container}>
      <Form/>
      <ul>
        <ToDoItem/>
      </ul>
    </div>
  )
}

export default App