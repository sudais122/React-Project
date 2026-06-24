import React from 'react'
import './Achievements.css'

const AchievementsData = [
  {
    title: "FYP Management System – Department of Computer Science",
    organization: "Department of Computer Science",
    year: "2026",
    description:
      "Developed a full-stack Final Year Project management system — student registration, supervisor allocation, project submissions, and progress tracking for the CS department."
  },
  {
    title: "1st Position – AI & Tech TFV Prototype Competition",
    organization: "AI & Tech Competition",
    year: "2025",
    description:
      "Awarded for creating and presenting an innovative functional prototype with strong technical implementation.",
  },
  {
    title: "2nd Position – Bits & Bytes Hackathon",
    organization: "Bits & Bytes Society",
    year: "2026",
    description:
      "Recognized for developing a real-world solution using modern web technologies under time constraints.",
  },
  {
    title: "Front-End Development Internship Certificate",
    organization: "DevelopersHub Corporation",
    year: "2026",
    description:
      "Completed a 6-week Front-End Development internship with outstanding performance and project contributions.",
  }
]

const Achievements = () => {
  return (
    <section className='AchievementsSection' id='achievements'>

      <div className='ACHText'>
        <h2>Achievements</h2>
        <p>Milestones, certifications, and wins along the way.</p>
      </div>

      <div className='AchGrid'>
        {AchievementsData.map((item, index) => (
          <article className='AchCard' key={index}>

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
              <h3>{item.title}</h3>
              <span className='AchMeta'>{item.organization} · {item.year}</span>
              <p>{item.description}</p>
            </div>

          </article>
        ))}
      </div>

    </section>
  )
}

export default Achievements