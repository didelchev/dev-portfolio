// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import './Navbar.css'

// const Navbar = () => {

//   const [activeLink, setActiveLink ] = useState('About')

//   const handleActiveLink = (linkName)=> {
//     setActiveLink(linkName)
//   }


//   return (
//     <div className="navbar">
//       <ul >
//         <li className={activeLink === 'About' ? 'nav-links active' : 'nav-links'}>
//           <Link to="#about" onClick={ () => handleActiveLink('About')}>About</Link>
//         </li>
//         <li className={activeLink === 'Experience' ? 'nav-links active' : 'nav-links'}>
//           <a href="#experience" onClick={ () => handleActiveLink('Experience')}>Experience</a>
//         </li>
//         <li className={activeLink === 'Projects' ? 'nav-links active' : 'nav-links'}>
//           <a href="#projects" onClick={ () => handleActiveLink('Projects')}>Projects</a>
//         </li>
//       </ul>
//       <a href="/Daniel-Delchev-CV.pdf" download className='resume-btn'>Resume</a>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className="navbar">
      <ul>
        <li className={activeLink === 'About' ? 'nav-links active' : 'nav-links'}>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => handleActiveLink('About')}
          >
            About
          </ScrollLink>
        </li>
        <li className={activeLink === 'Projects' ? 'nav-links active' : 'nav-links'}>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => handleActiveLink('Projects')}
          >
            Projects
          </ScrollLink>
        </li>
        <li className={activeLink === 'Experience' ? 'nav-links active' : 'nav-links'}>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => handleActiveLink('Experience')}
          >
            Experience
          </ScrollLink>
        </li>
      </ul>
      <a href="/Daniel-Delchev-CV.pdf" download className="resume-btn">
        Resume
      </a>
    </div>
  );
};

export default Navbar;
