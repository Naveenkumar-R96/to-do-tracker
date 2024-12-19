import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from './Tag'
const TaskForm = () => {
  const [task,setTask]=useState('')

  const [status,setStatus]=useState('Doing')

  const handleTaskChange = e =>{
    setTask(e.target.value)
    
  }
  const handleStatusChange = e =>{
    setStatus(e.target.value)
  }
  console.log(task,status)
  
  return (
    
       <header className='app_header'>
            <form action="">
                <input type="text" 
                className='task_input'
                 placeholder='Enter Your task'
                 
                 onChange={handleTaskChange}
                 
                  />
               
                <div className="task_form_bottom_line">
                   <div className='tagg'>
                
                    <Tag title="Html"/>
                    <Tag title="css"/>
                    <Tag title="Javascript"/>
                    <Tag title="REact"/>
                    </div>
                    <div>
                    <select name="" id="" className="task_status" onChange={handleStatusChange}>
                        <option value="todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                    </div>
                    <button type='submit' className='task_sumbit'>+Add Tasks</button>
                    </div>
            </form>
      </header>
  
  )
}

export default TaskForm
