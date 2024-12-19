import React from 'react'
import TaskCard from './TaskCard'
import Tag from './Tag'
const TaskColumn = ({title}) => {
  return (
    <section className="task_column">
      <h2>{title}</h2>
    <TaskCard/>
   
    </section>
  )
}

export default TaskColumn
