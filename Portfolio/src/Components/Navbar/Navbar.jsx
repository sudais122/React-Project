import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [active, setActive] = useState("home")


  useEffect(() => {

    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })

      },
      {
        threshold: 0.5
      }
    )


    sections.forEach((section) => {
      observer.observe(section)
    })


    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }

  }, [])



  const navItems = [
    {name:"Home", id:"home"},
    {name:"About", id:"about"},
    {name:"Skills", id:"skills"},
    {name:"Projects", id:"projects"},
    {name:"Achievements", id:"achievements"},
    {name:"Contact", id:"contact"},
  ]


  return (
    <nav>

      <div className='logo'>
        <h3>
          Sudais<span>.dev</span>
        </h3>
      </div>


      <div className='navlinks'>

        {navItems.map((item)=>(
          <a 
            key={item.id}
            href={`#${item.id}`}
            className={
              active === item.id ? "active" : ""
            }
          >
            {item.name}
          </a>
        ))}

      </div>

    </nav>
  )
}

export default Navbar