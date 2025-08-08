import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul >
        <li className="nav-links">
          <a href="#">About</a>
        </li>
        <li className="nav-links">
          <a href="#">Experience</a>
        </li>
        <li className="nav-links">
          <a href="#">Projects</a>
        </li>
        
        
      </ul>
    </div>
  )
}

export default Navbar