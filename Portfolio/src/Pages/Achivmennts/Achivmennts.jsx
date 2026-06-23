import React from 'react'
import './Achievements.css'
import AchievementCard from '../../Components/Navbar/ui/Achivmennts/Achievements'
import AchievementsData from '../../data/Achievements'

const Achievements = () => {
  return (
    <section className='AchievementsSection'>

      <div className='ACHText'>
        <h2>Achievements</h2>
        <p>
          Milestones, certifications, and wins along the way.
        </p>
      </div>


      <div className='AchGrid'>

        {AchievementsData.map((item,index)=>(
          <AchievementCard
            key={index}
            {...item}
          />
        ))}

      </div>

    </section>
  )
}

export default Achievements