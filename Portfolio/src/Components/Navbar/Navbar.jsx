import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h3>Sudais<span>.dev</span></h3>
      </div>

      <div className='navlinks'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar