import "./App.css"
import Todo from "./Components/Todo"
import { useState } from "react"
import Todolist from "./Components/TodoList"
import Alert from "./Components/Alert"

function App() {
  const [list,setList] = useState([])
  const [alert,setAlert] = useState(false);
  const addList  = (inputText) =>{
    if(inputText !== ''){
      setList([...list,inputText])
    }
    else{
      setAlert(true);
        
      }
    
  }
  const deleteItem = (key) =>{
    let newList = [...list];
    newList.splice(key,1)
    setList([...newList])


  }
  
  
  
  return (
    <>
      <div className = "main-container">
      
        <div className = "center-container">
        {alert ? <Alert/> : false}
          <Todo addList={addList} />
          <h1 className="app-heading">TODO</h1>
          <hr/>
          {list.map((item,index)=>{
            return (
              <Todolist key={index} item={list[index]} index={index} deleteItem={deleteItem}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
