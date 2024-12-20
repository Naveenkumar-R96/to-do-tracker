import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from './Tag'
const TaskForm = ({setTask}) => {
 

  const [taskData,setTaskData]=useState({
    task:"",
    status:"todo"
    ,tag:[]
  })
  const checkTag=(tag)=>{
    return taskData.tag.some(item=>item===tag)
  }

      const selectTag=(tag)=>{
      if (taskData.tag.some(item=> item==tag)){
      const filterTags= taskData.tag.filter(item=>item !==tag)
      setTaskData(prev=>{
      return {...prev,tag:filterTags}
      })
      }
      else{
      setTaskData(prev=>{
      return {...prev,tag:[...prev.tag,tag]}
      })
 }
 
  }
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setTaskData(prev=>{
      return{...prev,[name]:value};
    });

   
  }
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(taskData)
  setTask(prev=>{
    return [...prev,taskData]
  })
}  
  return (
    
       <header className='app_header'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" 
                className='task_input'
                 placeholder='Enter Your task'
                 name='task'
                 onChange={handleChange}
                 
                  />
               
                <div className="task_form_bottom_line">
                   <div className='tagg'>
                
                    <Tag title="Html"selectTag={selectTag} slected={checkTag('Html')}/>
                    <Tag title="css"selectTag={selectTag} slected={checkTag('css')}/>
                    <Tag title="Javascript"selectTag={selectTag} slected={checkTag('Javascript')}/>
                    <Tag title="React"selectTag={selectTag} slected={checkTag('React')}/>
                    </div>
                    <div>
                    <select name="status" id="" className="task_status" onChange={handleChange}>
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
