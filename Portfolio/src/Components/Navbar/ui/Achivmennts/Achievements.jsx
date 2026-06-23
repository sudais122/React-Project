import React from 'react'
import './Achievements.css'

const AchievementCard = ({
  title,
  organization,
  year,
  description
}) => {
  return (
    <article className='AchCard'>

      <div className='AchBadge'>
        <svg 
          viewBox='0 0 24 24' 
          fill='none' 
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='8' r='6' />
          <path d='M8.21 13.89 7 22l5-3 5 3-1.21-8.11' />
        </svg>
      </div>


      <div className='AchBody'>

        <h3>{title}</h3>

        <span className='AchMeta'>
          {organization} · {year}
        </span>

        <p>{description}</p>

        <a 
          className='certBtn'
          href='#'
          target='_blank'
          rel='noreferrer'
        >
          View Certificate ↗
        </a>

      </div>

    </article>
  )
}

export default AchievementCard