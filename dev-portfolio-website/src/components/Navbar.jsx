import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/" className='site-logo'>Daniel Delchev</a>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
      </ul>
    </div>
  )
}

export default Navbar