import React from 'react'
import "./Tag.css"
const Tag = ({title}) => {
  return (
    <div>
      <button className="tag">{title}</button>
    </div>
  )
}

export default Tag
