import { useState } from "react"
import style from "../styles/form.module.css"

interface Props {
  onSubmit : Function
}

function Form({onSubmit}: Props) {
    const [item, setItem] = useState("")
    const submit = () => {
      if(!item) return alert("Please Enter To Do")
      onSubmit(item)
      setItem("")
    }
  return (
    <div className={style.container}>
        <input 
          type="text" 
           placeholder="Enter To Do"
          value={item} 
          onChange={({target}) => setItem(target.value)} 
          className={style.input} />
        <button 
          onClick={submit}
          className={style.submitBtn}>
          Add Item
        </button>
    </div>
  )
}

export default Form