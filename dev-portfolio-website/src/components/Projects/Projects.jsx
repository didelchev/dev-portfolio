import React from 'react'
import shelfieImg from '../../assets/shelfie-thumbnail.png'
import caringPawsImg from '../../assets/home-page.png'
import shelfieReact from '../../assets/shelfie-react.png'
import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h3>Projects</h3>

      <a href='https://shelfie-v2.netlify.app/' target='_blank' rel='noreferrer' className="project">
        <div className="image-container">
          <img src={shelfieReact} alt="Shelfie Book App React version screenshot" />
        </div>
        <div className="project-info">
          <h5>
            Shelfie Book App <span className="version-badge">React</span>
            <span className="arrow-icon">↗</span>
          </h5>
          <p>A React-based version of my original Shelfie app. Browse, track, and organize your books with a clean, responsive design.</p>
          <div className="tech-used">
            <span>React</span>
            <span>MongoDB (Atlas)</span>
            <span>Node.js (Express)</span>
            <span>Netlify</span>
            <span>Render</span>
          </div>
        </div>
      </a>

      <a href='https://shelfie-book-app.netlify.app/' target='_blank' rel='noreferrer' className="project">
        <div className="image-container">
          <img src={shelfieImg} alt="Shelfie Book App screenshot" />
        </div>
        <div className="project-info">
          <h5>
            Shelfie Book App
            <span className="arrow-icon">↗</span>
          </h5>
          <p>A single page application designed to help users organize their personal book collections, discover new reads, and track their reading progress.</p>
          <div className="tech-used">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>Lit</span>
            <span>CSS</span>
            <span>MongoDB (Atlas)</span>
            <span>Node.js (Express)</span>
            <span>Netlify</span>
            <span>Render</span>
          </div>
        </div>
      </a>

      <a href='https://caring-paws.netlify.app/' target='_blank' rel='noreferrer' className="project">
        <div className="image-container">
          <img src={caringPawsImg} alt="Caring Paws app screenshot" />
        </div>
        <div className="project-info">
          <h5>
            Caring Paws
            <span className="arrow-icon">↗</span>
          </h5>
          <p>A full-stack web application designed to connect adoptable dogs with loving homes, streamline the application process, and provide resources to support a lifetime of happy companionship.</p>
          <div className="tech-used">
            <span>React</span>
            <span>CSS</span>
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>Netlify</span>
            <span>Render</span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Projects