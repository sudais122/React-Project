import React from 'react'
import './Aout.css'
import profileImg from '../../../assets/IMG.png'
import Aboutme from '../../../Components/Navbar/ui/Aboutme/Aboutme'

const About = () => {
  return (
    <section className='aboutSection' id='about'>

      {/* LEFT - IMAGE */}
      <div className='aboutLeft'>
            <div className='Heading'><h2>A bit about me</h2></div>
        <div className='imageBox'>
          <img src={profileImg}alt="profile" />
        </div>
      </div>

      {/* RIGHT - CONTENT */}
      <div className='aboutRight'>
        <Aboutme />
      </div>

    </section>
  )
}

export default About