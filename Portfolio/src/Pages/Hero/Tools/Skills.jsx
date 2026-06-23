import React from 'react'
import './Skills.css'
import ToolCard from '../../../Components/Navbar/ui/Tools/Tools'

import Reactjs from '../../../assets/React.png'
import HTML from '../../../assets/HTML.png'
import CSS from '../../../assets/Css.png'
import GIT from '../../../assets/Git.png'
import Github from '../../../assets/github.png'
import JS from '../../../assets/js.png'
import Tailwind from '../../../assets/tailwind.png'
import VSCode from '../../../assets/VS code.png'

const Frontend = [
  { Name: 'React.js', Image: Reactjs, Description: 'Component-driven UIs with hooks & state.' },
  { Name: 'JavaScript', Image: JS, Description: 'Modern ES syntax and async patterns.' },
  { Name: 'HTML5', Image: HTML, Description: 'Semantic, accessible markup.' },
  { Name: 'CSS3', Image: CSS, Description: 'Flexbox, grid, animations & responsive layouts.' },
  { Name: 'Tailwind CSS', Image: Tailwind, Description: 'Utility-first styling at speed.' }
]

const ToolsData = [
  { Name: 'Git', Image: GIT, Description: 'Version control & branching workflows.' },
  { Name: 'GitHub', Image: Github, Description: 'Collaboration, PRs & deployment.' },,
  { Name: 'VS Code', Image: VSCode, Description: 'My daily driver, tuned for React.' },

]
const Skills = () => {
  return (
    <>
    <div className='skillWrapper'>
        <div className='SKText'>
            <h2>Tools I work with</h2>
            <p className='Desc'>The technologies I reach for to design, build, and ship modern web <br /> interfaces.</p>
            <h5>Frontend</h5>
            <div className='maincard'>
            {Frontend.map((item,index)=>(
              <ToolCard
              key = {index}
              Name = {item.Name}
              image = {item.Image}
              Description = {item.Description}
               />
            ))}
        </div>
        <p className='ToolsHeading'>Tools</p>
            <div className='maincard'>
            {ToolsData.map((item,index)=>(
              <ToolCard
              key = {index}
              Name = {item.Name}
              image = {item.Image}
              Description = {item.Description}
               />
            ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default Skills