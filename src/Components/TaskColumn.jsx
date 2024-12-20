import React from 'react'
import TaskCard from './TaskCard'
import Tag from './Tag'
const TaskColumn = ({title,task,status}) => {
  return (
    <section className="task_column">
      <h2>{title}</h2>
    {
      task.map((task,index)=>task.status===status && <TaskCard key={index} title={task.task} tag={task.tag}/> )
    }
   
    </section>
  ) 
}

export default TaskColumn
