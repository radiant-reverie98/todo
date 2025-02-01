import React from 'react'
import { useState } from 'react'

function Todo(props) {
    const [text,setText] = useState('')

    const handleOnChange = (e) =>{
        setText(e.target.value)
    }
  return (
    <div>
      <div className="input-container">
        <input className="input-box-todo" type="text" value={text} onChange={handleOnChange} placeholder="Enter task name"/>
        <button className="add-btn" onClick={()=>{
            props.addList(text)
            setText('')
        }}>+</button>
        
      </div>
    </div>
  )
}

export default Todo
