import React from 'react'
import './Profile.css'
import profileImg from '../../../../assets/IMG.png'

export const Profile = () => {
  return (
    <div className='profileWrapper'>

      {/* floating icons */}
      <div className='icon icon1'>⚛️</div>
      <div className='icon icon2'>💻</div>
      <div className='icon icon3'>⚡</div>

      {/* image container */}
      <div className='Image'>
        <img 
          src={profileImg}
          alt="profile"
        />

        {/* gradient overlay */}
        <div className='overlay'></div>
      </div>

    </div>
  )
}