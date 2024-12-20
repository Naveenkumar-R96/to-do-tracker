import React from 'react'
import "./TaskCard.css"
import Tag from "./Tag"
const TaskCard = ({title,tag}) => {
  return (
    <article className="task_card">
        <p className='task_text'>{title}</p>
        <div className="task_card_bottom_line">
            <div className="task_card_tags">
              {
                tag.map((tag,index)=>{
                  <Tag key={index} tagName={tag} selected={true}/>
                })
              }
            </div>
            <div className="task_delete">
                <button className="delete">D</button>
            </div>
        </div>
    </article>
  )
}

export default TaskCard
