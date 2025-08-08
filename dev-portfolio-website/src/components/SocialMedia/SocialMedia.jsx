import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div className="social-links">
      <ul>
        <li className="list-item">
          <a href="https://github.com/didelchev" target="_blank" title="GitHub">
            <FaGithub size={26} />
          </a>
        </li>
        <li className="list-item">
          <a
            href="https://www.linkedin.com/in/daniel-delchev-7b547a279/"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedin size={26} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
