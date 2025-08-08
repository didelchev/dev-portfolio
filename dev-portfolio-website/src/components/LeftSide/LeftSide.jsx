import React from 'react'
import Navbar from '../Navbar/Navbar'
import './LeftSide.css'
import SocialMedia from '../SocialMedia/SocialMedia'


const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="personal-info">
        <h1>Daniel Delchev</h1>
        <h4>Junior Full Stack Developer</h4>
        <p>I build accessible, pixel-perfect digital experiences for the web.</p>
      </div>
      <Navbar />
      <SocialMedia />
    </div>
  )
}

export default LeftSide