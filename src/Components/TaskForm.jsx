import React from 'react'
import "./TaskForm.css"
import Tag from './Tag'
const TaskForm = () => {
  return (
    
       <header className='app_header'>
            <form action="">
                <input type="text" className='task_input' placeholder='Enter Your task' />
               
                <div className="task_form_bottom_line">
                   <div className='tagg'>
                
                    <Tag title="Html"/>
                    <Tag title="css"/>
                    <Tag title="Javascript"/>
                    <Tag title="REact"/>
                    </div>
                    <div>
                    <select name="" id="" className="task_status">
                        <option value="todo">Todo</option>
                        <option value="todo">Doing</option>
                        <option value="todo">Done</option>
                    </select>
                    </div>
                    <button type='submit' className='task_sumbit'>+Add Tasks</button>
                    </div>
            </form>
      </header>
  
  )
}

export default TaskForm
