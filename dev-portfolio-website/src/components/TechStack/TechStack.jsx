import React from 'react'
import "./TechStack.css"

import { FaReact, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiTypescript, SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const TechStack = () => {

  const techStack = [
    { name: 'HTML',        icon: <FaHtml5         size={48} color="#E34F26" /> },
    { name: 'CSS',         icon: <FaCss3Alt        size={48} color="#1572B6" /> },
    { name: 'JavaScript',  icon: <IoLogoJavascript size={48} color="#F7DF1E" /> },
    { name: 'TypeScript',  icon: <SiTypescript     size={48} color="#3178C6" /> },
    { name: 'React',       icon: <FaReact          size={48} color="#61DAFB" /> },
    { name: 'Express.js',  icon: <SiExpress        size={48} color="#8693AF" /> },
    { name: 'MongoDB',     icon: <DiMongodb        size={48} color="#47A248" /> },
    { name: 'PostgreSQL',  icon: <SiPostgresql     size={48} color="#4169E1" /> },
    { name: 'Docker',      icon: <FaDocker         size={48} color="#2496ED" /> },
  ]

  return (
    <div className="tech-stack" id='tech-stack'>
      <h3>Technologies</h3>
      <div className="tech-stack-container">
        {techStack.map((tech) => (
          <div className='tech-item' key={tech.name}>
            <div className="tech-icon" aria-hidden="true">{tech.icon}</div>
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack