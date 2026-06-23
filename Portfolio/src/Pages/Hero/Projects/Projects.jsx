import React from 'react'
import './Projects.css'
import Project from '../../../Components/Navbar/ui/Project/Project'
import FYP from '../../../assets/fyp.png'
import SehatDost from '../../../assets/sehatdost.png'

const ProjectDetails = [
    {
        Name: 'FYP-Mangagement-System',
        image: FYP,
        Description: 'The FYP Management System is a web-based application designed to streamline and manage Final Year Projects (FYP) within the Department of Computer Science at Abdul Wali Khan University Mardan (AWKUM).',
        tag1: 'HTML,CSS,JS',
        tag2: 'Node.js,MongoDB,AWS',
        LiveDemo: 'https://charming-gelato-49a86c.netlify.app/'
    },
    {
        Name:'SehatDost',
        image: SehatDost,
        Description: 'Built a comprehensive healthcare platform for doctor discovery, appointment booking, lab test scheduling, and community health features including blood donation and medical Q&A',
        tag1: 'React.js',
        tag2: 'Vite',
        LiveDemo: 'https://sehatdost.netlify.app/'
    },
    {
        Name: 'TrustScan',
        image:'',
        Description: 'Detect scams instantly from messages and links using smart analysis.',
        tag1: 'HTML,CSS',
        tag2: 'JavaScript',
        LiveDemo: 'https://sehatdost.netlify.app/'
    },
    {
        Name:'Complain-Managment-System ',
        image: '',
        Description:'A Complaint Managment System Build for teh student of Department of Computer Science',
        tag1: 'HTML,CSS,JS',
        tag2: 'Node.js',
        LiveDemo: 'https://sehatdost.netlify.app/'
    }
]
const Projects = () => {
  return (
    <>
    <div className='ProjectWrapper'>
        <div className='ProjHeading'>
        <h4>Projects</h4>
        <p>A few projects I've built while sharpening skills.</p>
        </div>
        <div className='ProjectDet'>
        {ProjectDetails.map((item,index)=>(
            <Project
            key={index}{...item}
            />
        ))}
        </div>
    </div>
    </>
  )
}

export default Projects