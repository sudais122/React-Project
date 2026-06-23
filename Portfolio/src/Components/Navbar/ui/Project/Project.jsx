import React from 'react'
import './Project.css'

const Projects = () => {
  return (
    <section className='ProjectsSection'>

      <div className='ProjectGrid'>

        {/* CARD 1 */}
        <article className='ProjectCard'>
          <div className='ProjectThumb'>
            <span className='thumbFallback'>S</span>
          </div>
          <div className='ProjectBody'>
            <h3>Sudais.dev Portfolio</h3>
            <p>My personal portfolio — React, component-driven, glassmorphism UI with smooth scroll reveals.</p>
            <ul className='ProjectTags'>
              <li>React</li>
              <li>CSS</li>
              <li>Vite</li>
            </ul>
            <div className='ProjectLinks'>
              <a className='liveBtn' href='#' target='_blank' rel='noreferrer'>Live Demo ↗</a>
              <a className='codeBtn' href='#' target='_blank' rel='noreferrer'>Code</a>
            </div>
          </div>
        </article>

        {/* CARD 2 */}
        <article className='ProjectCard'>
          <div className='ProjectThumb'>
            <span className='thumbFallback'>W</span>
          </div>
          <div className='ProjectBody'>
            <h3>Weather App</h3>
            <p>Real-time forecasts with search, geolocation, and a clean responsive dashboard.</p>
            <ul className='ProjectTags'>
              <li>React</li>
              <li>API</li>
              <li>Tailwind</li>
            </ul>
            <div className='ProjectLinks'>
              <a className='liveBtn' href='#' target='_blank' rel='noreferrer'>Live Demo ↗</a>
              <a className='codeBtn' href='#' target='_blank' rel='noreferrer'>Code</a>
            </div>
          </div>
        </article>

        {/* CARD 3 */}
        <article className='ProjectCard'>
          <div className='ProjectThumb'>
            <span className='thumbFallback'>T</span>
          </div>
          <div className='ProjectBody'>
            <h3>Task Manager</h3>
            <p>A kanban-style task board with drag-and-drop and persistent local state.</p>
            <ul className='ProjectTags'>
              <li>React</li>
              <li>JavaScript</li>
            </ul>
            <div className='ProjectLinks'>
              <a className='liveBtn' href='#' target='_blank' rel='noreferrer'>Live Demo ↗</a>
              <a className='codeBtn' href='#' target='_blank' rel='noreferrer'>Code</a>
            </div>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Projects