import React,{ useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import Todohead from './Components/Todohead';


function App() {

  const [value,setValue]=useState("");
  const [todos,setTodos]=useState([]);

  return (
    <div className="App">
      <Todohead/>
      <Todo value={value} setValue={setValue}  todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
