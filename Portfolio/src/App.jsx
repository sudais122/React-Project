import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import { Hero } from './Pages/Hero/Hero';
import About from './Pages/Hero/About/About';
import Skills from './Pages/Hero/Tools/Skills';
import Projects from './Pages/Hero/Projects/Projects';
import Achievements from './Components/Navbar/ui/Achivmennts/Achievements';

const App = () => {
  return (
    <>
    <div className='Mian'>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements/>
    </div>
    </>
  )
}

export default App