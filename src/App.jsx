import React, {  useState } from 'react'
import "./App.css"
import TaskForm from './Components/TaskForm'
import TaskColumn from './Components/TaskColumn'

const App = () => {
  const [task,setTask]=useState([])
  console.log('task',task)
  return (
    <div className='app'>
      <TaskForm setTask={setTask}/>
      <main className="app_main">
        <TaskColumn title="todo" task={task} status="todo"/>
        <TaskColumn title="doing"task={task}status="doing"/>
        <TaskColumn title="done"task={task}status="done"/>
        
      </main>
    </div>
  )
}

export default App
