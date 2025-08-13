import React from 'react'
import shelfieImg from '../../assets/shelfie-thumbnail.png'
import "./Projects.css"
import { FaHtml5 } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="projects-container" id="projects">
        <h3>Projects</h3>
        <div className="project">
            <div className="image-container">
                <img src={ shelfieImg } alt="" srcset="" />
            </div>
            <a href='https://shelfie-book-app.netlify.app/'target='_blank' className="project-info">
                <h5>Shelfie App</h5>
                <p>Shelfie is a singe page application designed to help users organize their personal book collections, discover new reads, and track their reading progress.</p>
                <div className="tech-used">
                    <span >JavaScript</span>
                    <span>Lit</span>
                    <span>CSS</span>
                    <span>Mongo DB</span>
                    <span>Express.js</span>
                    <span>Netlify</span>
                    <span>Vercel</span>
                </div>
                
            </a>
        </div>
    </div>
  )
}

export default Projects