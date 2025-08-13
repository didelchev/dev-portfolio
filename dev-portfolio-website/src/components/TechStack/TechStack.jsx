import React from 'react'
import "./TechStack.css"

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const TechStack = () => {

  const techStack = [
   { name: 'HTML', icon: <FaHtml5 size={60} color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={60} color="#1572B6" /> },
    { name: 'JavaScript', icon: <IoLogoJavascript size={60} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={60} color="#61DAFB" /> },
    { name: 'Express.js', icon: <SiExpress size={60}  /> },
    { name: 'MongoDB', icon: <DiMongodb size={60} color="#47A248" /> },

  ]




  return (
    <div className="tech-stack">
      <h3>Technologies</h3>
        <div className="tech-stack-container">
         {techStack.map((tech) => (
          <div className='tech-item' key={tech.name}> {tech.icon} </div>
         ))}
        </div>
        
    </div>
  )
}

export default TechStack