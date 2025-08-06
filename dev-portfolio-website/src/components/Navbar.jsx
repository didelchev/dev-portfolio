import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to={"/projects"}>
          <button>About Page</button>
      </Link>
    </div>
  )
}

export default Navbar