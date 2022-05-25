import React, { useState } from 'react'
import styles from "./TodoList.module.css"
function TodoList({todo,Delete}) {
 
const [completed,setCompleted]=useState(false)

  return (
    
 
      <div className={styles.wrapper}>
   <div className={styles.box}>
    <input className={styles.in1} type="checkbox" checked={completed} onChange={(e)=>{
      setCompleted(e.target.checked)
    }} /> 


 <h3  className={completed?styles.strike:""} >{todo}</h3>



   <button className={styles.del} onClick={()=> Delete(todo) }>Del</button>
  </div>
        </div>

  
   
   )
   
}

export default TodoList