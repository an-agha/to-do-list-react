import { useState } from "react"
import Form from "./components/Form"
import ToDoItem from "./components/ToDoItem"
import style from "./styles/app.module.css"

interface ToDo {
  id: string
  value: string
  isDone: boolean
}

function App() {
  const [toDos, setToDos] = useState<ToDo[]>([])

  const handleSubmit = (text : string) => {
    console.log(text)
    const newToDo: ToDo = {
      id: crypto.randomUUID(),
      value: text,
      isDone: false,
    }
    setToDos((oldToDo)=>{
      return [
        ...oldToDo, 
        newToDo
      ]
    })
  }

  const handleDelete = (id: ToDo["id"]) => {
    setToDos(oldToDos => {
      return oldToDos.filter(i=> i.id !== id )
    })
  } 

  const handleToggle = (id: ToDo["id"], value : boolean) => {
    setToDos(oldToDos => {
      return oldToDos.map(toDo =>{
        if(toDo.id === id){
          return {
            ...toDo,
            isDone: value
          }
        }
        return toDo
      })
    })
  }

  return (
    <div className={style.container}>
      <span className={style.heading}>
        Just The Essentials
      </span>
      <Form onSubmit={handleSubmit}/>
      <ul className={style.listContainer}>
        {toDos.map(({id,value,isDone}) => (
          <ToDoItem
            key={id}
            item={value}
            isCompleted={isDone}
            onToggle={(value: boolean) => handleToggle(id, value)}
            onDelete={()=> handleDelete(id)} />
        ))}
      </ul>
    </div>
  )
}

export default App