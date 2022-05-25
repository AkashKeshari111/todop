import React from 'react'
import TodoList from './TodoList'
import styles from "./Todo.module.css"


function Todo({value,setValue,todos,setTodos}) {
const Delete=(del_value)=>{
  let newTodos=todos.filter(el=>del_value!==el)
  setTodos(newTodos)
} 

  const addTodos=(newTodos)=>{
          setTodos([...todos,newTodos])
  }
  return (
    <div className={styles.div_box}>
      <div className={styles.inner_div}>

  
        <input className={styles.in} type="text" value={value} onChange={(e)=>setValue(e.target.value)
        }/>
          
        <button onClick={()=>
        {setValue("")
        addTodos(value)
        value={value}
    console.log(value)}}>Add</button>
    <div className={styles.div5}>
<div className={styles.div4}>
  {todos.map((todo,index)=>(
    <TodoList key={index} todo={todo} Delete={Delete}/>
  ))}
  </div>
  </div>
  </div>
    </div>
  )
}

export default Todo