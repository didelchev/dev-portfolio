import React from 'react'
import './RightSide.css'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

const RightSide = () => {
  return (
    <div className="right-side">
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default RightSide