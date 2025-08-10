import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [activeLink, setActiveLink ] = useState('About')

  const handleActiveLink = (linkName)=> {
    setActiveLink(linkName)
  }


  return (
    <div className="navbar">
      <ul >
        <li className={activeLink === 'About' ? 'nav-links active' : 'nav-links'}>
          <a href="#about" onClick={ () => handleActiveLink('About')}>About</a>
        </li>
        <li className={activeLink === 'Experience' ? 'nav-links active' : 'nav-links'}>
          <a href="#experience" onClick={ () => handleActiveLink('Experience')}>Experience</a>
        </li>
        <li className={activeLink === 'Projects' ? 'nav-links active' : 'nav-links'}>
          <a href="#projects" onClick={ () => handleActiveLink('Projects')}>Projects</a>
        </li>
      </ul>
      <a href="/Daniel-Delchev-CV.pdf" download className='resume-btn'>Resume</a>
    </div>
  )
}

export default Navbar