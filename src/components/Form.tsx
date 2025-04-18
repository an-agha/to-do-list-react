import { useState } from "react"
import "../styles/form.css"

interface Props {
  onSubmit : Function
}

function Form({onSubmit}: Props) {
    const [item, setItem] = useState("")
    const submit = () => {
      onSubmit(item)
      setItem("")
    }
  return (
    <div className="container">
        <input 
          type="text" 
          value={item} 
          onChange={({target}) => setItem(target.value)} />
        <button onClick={submit}>Add Item</button>
    </div>
  )
}

export default Form