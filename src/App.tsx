import { useState } from "react"
import Form from "./components/Form"
import ToDoItem from "./components/ToDoItem"
import style from "./styles/app.module.css"

interface ToDo {
  id: string
  value: string
}

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([])

  const handleSubmit = (text : string) => {
    console.log(text)
    const newToDo = {
      id: crypto.randomUUID(),
      value: text,
    }
    setToDos((oldToDo)=>{
      return [
        ...oldToDo,
        newToDo
      ]
    })
  }

  return (
    <div className={style.container}>
      <Form onSubmit={handleSubmit}/>
      <ul>
        {toDos.map(({id,value}) => (
          <ToDoItem 
            key={id}
            item={value}/>
        ))}
      </ul>
    </div>
  )
}

export default App