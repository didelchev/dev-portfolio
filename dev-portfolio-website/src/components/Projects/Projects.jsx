import React from 'react'
import shelfieImg from '../../assets/shelfie-thumbnail.png'
import caringPawsImg from '../../assets/home-page.png'
import shelfieReact from '../../assets/shelfie-react.png'
import "./Projects.css"
import { FaHtml5 } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="projects-container" id="projects">
        <h3>Projects</h3>
        <div className="project">
            <div className="image-container">
                <img src={ shelfieReact }  />
            </div>
            <a href='https://shelfie-v2.netlify.app/'target='_blank' className="project-info">
                <h5>Shelfie Book App (React Version)</h5>
                <p>A React-based version of my original Shelfie app. Browse, track, and organize your books with a clean, responsive design. </p>
                <div className="tech-used">
                    <span >React</span>
                    <span>Mongo DB (Atlas)</span>
                    <span>Node.js (Express)</span>
                    <span>Netlify</span>
                    <span>Render</span>
                </div>
                
            </a>
        </div>
        <div className="project">
            <div className="image-container">
                <img src={ shelfieImg } alt="" srcset="" />
            </div>
            <a href='https://shelfie-book-app.netlify.app/'target='_blank' className="project-info">
                <h5>Shelfie Book App</h5>
                <p>Shelfie is a singe page application designed to help users organize their personal book collections, discover new reads, and track their reading progress.</p>
                <div className="tech-used">
                    <span>JavaScript</span>
                    <span>HTML</span>
                    <span>Lit</span>
                    <span>CSS</span>
                    <span>Mongo DB(Atlass)</span>
                    <span>Node.js(Express)</span>
                    <span>Netlify</span>
                    <span>Render</span>
                </div>
                
            </a>
        </div>
        <div className="project">
            <div className="image-container">
                <img src={ caringPawsImg } alt="" srcset="" />
            </div>
            <a href='https://caring-paws.netlify.app/'target='_blank' className="project-info">
                <h5>Caring Paws</h5>
                <p>Caring Paws is a full-stack web application designed to connect adoptable dogs with loving homes, streamline the application process, and provide resources to support a lifetime of happy companionship.</p>
                <div className="tech-used">
                    <span>React</span>
                    <span>CSS</span>
                    <span>Mongo DB</span>
                    <span>Express.js</span>
                    <span>Netlify</span>
                    <span>Render</span>
                </div>
                
            </a>
        </div>
    </div>
  )
}

export default Projects