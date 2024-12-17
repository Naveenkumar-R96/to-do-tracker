import React from 'react'
import "./App.css"
import TaskForm from './Components/TaskForm'
import TaskColumn from './Components/TaskColumn'

const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <main className="app_main">
        <TaskColumn title="section1"/>
        <TaskColumn title="section2"/>
        <TaskColumn title="section3"/>
        
      </main>
    </div>
  )
}

export default App
