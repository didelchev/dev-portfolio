
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
        <li className={activeLink === 'Tech Stack' ? 'nav-links active' : 'nav-links'}>
          <ScrollLink
            to="tech-stack"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => handleActiveLink('Tech Stack')}
          >
            Technologies
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
      <a href="/resume-daniel-delchev.pdf" download className="resume-btn">
      <a href="/resume-daniel-delchev.pdf" download className="resume-btn">
        CV
      </a>
    </div>
  );
};

export default Navbar;
