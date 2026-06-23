import React from 'react'
import './Tools.css'
import HTML from '../../../../assets/Css.png'

const Tools = (props) => {
  return (
    <>
    <div className='ToolsWrapper'>
        <img src={props.image} alt="" />
        <div className='SkillText'>
          <h5>{props.Name}</h5>
          <p>{props.Description}</p>
        </div>
    </div>
    </>
  )
}

export default Tools