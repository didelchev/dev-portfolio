import React from 'react'
import './RightSide.css'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import TechStack from '../TechStack/TechStack'

const RightSide = () => {
  return (
    <div className="right-side" id='right-side'>
      <About />
      <Projects />
      <TechStack />
      <Experience />
    </div>
  )
}

export default RightSide