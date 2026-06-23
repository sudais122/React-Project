import React from 'react'
import './Project.css'

const Projects = ({Name,image,Description,tag1,tag2,LiveDemo}) => {
  return (
    <section className='ProjectsSection'>

      <div className='ProjectGrid'>
        <article className='ProjectCard'>
          <div className='ProjectThumb'>
            <span className='thumbFallback'>
              <img src={image} alt="" />
            </span>
          </div>
          <div className='ProjectBody'>
            <h3>{Name}</h3>
            <p>{Description}</p>
            <ul className='ProjectTags'>
              <li>{tag1}</li>
              <li>{tag2}</li>
            </ul>
            <div className='ProjectLinks'>
              <a className='liveBtn' href={LiveDemo} target='_blank' rel='noreferrer'>Live Demo ↗</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects