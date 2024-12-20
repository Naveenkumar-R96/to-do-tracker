import React from 'react'
import "./Tag.css"
const Tag = ({title,selectTag,slected}) => {
  const tagStyle={
    Html:{backgroundColor:"blue"},
    css:{backgroundColor:"red"},
    Javascript:{backgroundColor:"yellow"},
    
    React:{backgroundColor:"orange"},
    default:{backgroundColor:"tomato"}, 
  }
  return (
    <div>
      <button className="tag"type="button" style={slected ? tagStyle[title] : tagStyle.default}  onClick={()=>selectTag(title) }>{title}</button>
    </div>
  )
}

export default Tag
