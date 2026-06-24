import React from 'react'
import './Hero.css'

import Opportunty from '../../Components/Navbar/ui/Opportunty'
import { Intro } from '../../Components/Navbar/ui/Intro/intro'
import Button from '../../Components/Navbar/ui/Buttons/Button'
import Details from '../../Components/Navbar/ui/Details/Details'
import { Profile } from '../../Components/Navbar/ui/Profile/Profile'

export const Hero = () => {
  return (
    <section className='MainHero' id='home'>

      <div className='Left'>
        <div className='Content'>
          <Opportunty />
          <Intro />
          <Button />
          <Details />
        </div>
      </div>

      <div className='Right'>
        <Profile />
      </div>

    </section>
  )
}