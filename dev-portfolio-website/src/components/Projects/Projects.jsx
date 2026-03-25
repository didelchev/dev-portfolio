// import React from 'react'
// import shelfieImg from '../../assets/shelfie-v1.png'
// import caringPawsImg from '../../assets/caring-paws.webp'
// import shelfieReact from '../../assets/shelfie-v2.webp'
// import aiPlanner from '../../assets/ai-meal-planner.webp'
// import "./Projects.css"

// const Projects = () => {
//   return (
//     <div className="projects-container" id="projects">
//       <h3>Projects</h3>

//     {/* Shelie v2 */}
//       <a href='https://shelfie-v2.netlify.app/' target='_blank' rel='noreferrer' className="project">
//         <div className="image-container">
//           <img src={shelfieReact} alt="Shelfie Book App React version screenshot" />
//         </div>
//         <div className="project-info">
//           <h5>
//             Shelfie App ( React )
//             <span className="arrow-icon">↗</span>
//           </h5>
//           <p>A React-based version of my original Shelfie app. Browse, track, and organize your books with a clean, responsive design.</p>
//           <div className="tech-used">
//             <span>React</span>
//             <span>MongoDB (Atlas)</span>
//             <span>Node.js (Express)</span>
//             <span>Netlify</span>
//             <span>Render</span>
//           </div>
//         </div>
//       </a>

//       {/* Caring Paws */}
//       <a href='https://caring-paws.netlify.app/' target='_blank' rel='noreferrer' className="project">
//         <div className="image-container">
//           <img src={caringPawsImg} alt="Caring Paws app screenshot" />
//         </div>
//         <div className="project-info">
//           <h5>
//             Caring Paws
//             <span className="arrow-icon">↗</span>
//           </h5>
//           <p>A full-stack web application designed to connect adoptable dogs with loving homes, streamline the application process, and provide resources to support a lifetime of happy companionship.</p>
//           <div className="tech-used">
//             <span>React</span>
//             <span>CSS</span>
//             <span>MongoDB</span>
//             <span>Express.js</span>
//             <span>Netlify</span>
//             <span>Render</span>
//           </div>
//         </div>
//       </a>

//       {/* Shelfie V1 */}
//       <a href='https://shelfie-book-app.netlify.app/' target='_blank' rel='noreferrer' className="project">
//         <div className="image-container">
//           <img src={shelfieImg} alt="Shelfie Book App screenshot" />
//         </div>
//         <div className="project-info">
//           <h5>
//             Shelfie Book App
//             <span className="arrow-icon">↗</span>
//           </h5>
//           <p>A single page application designed to help users organize their personal book collections, discover new reads, and track their reading progress.</p>
//           <div className="tech-used">
//             <span>JavaScript</span>
//             <span>HTML</span>
//             <span>Lit</span>
//             <span>CSS</span>
//             <span>MongoDB (Atlas)</span>
//             <span>Node.js (Express)</span>
//             <span>Netlify</span>
//             <span>Render</span>
//           </div>
//         </div>
//       </a>

//       <h3>Currently Working On</h3>
//       {/* AI Meal Planner */}
//       <a href='#' rel='noreferrer' className="project">
//         <div className="image-container">
//           <img src={aiPlanner} alt="Shelfie Book App screenshot" />
//         </div>
//         <div className="project-info">
//           <h5>
//             AI Meal Planner
//             <span className="arrow-icon">↗</span>
//           </h5>
//           <p>AI-powered meal planner that generates personalized weekly meal plans based on your goals and macro targets </p>
//           <div className="tech-used">
//             <span>TypeScript</span>
//             <span>HTML</span>
//             <span>CSS</span>
//             <span>PostgreSQL</span>
//             <span>Node.js (Express)</span>
//             <span>Neon</span>
//             <span>Netlify</span>
//             <span>Render</span>
//           </div>
//         </div>
//       </a>
//     </div>

//   )
// }

// export default Projects

import React from "react";
import shelfieImg from "../../assets/shelfie-v1.png";
import caringPawsImg from "../../assets/caring-paws.webp";
import shelfieReact from "../../assets/shelfie-v2.webp";
import aiPlanner from "../../assets/ai-meal-planner.webp";
import "./Projects.css";

import { FaReact, FaHtml5, FaCss3Alt, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiTypescript, SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Projects = () => {
  const techStack = {
    HTML: { name: "HTML", icon: <FaHtml5 size={26} color="#E34F26" /> },
    CSS: { name: "CSS", icon: <FaCss3Alt size={26} color="#1572B6" /> },
    JavaScript: {
      name: "JavaScript",
      icon: <IoLogoJavascript size={26} color="#F7DF1E" />,
    },
    TypeScript: {
      name: "TypeScript",
      icon: <SiTypescript size={26} color="#3178C6" />,
    },
    React: { name: "React", icon: <FaReact size={26} color="#61DAFB" /> },
    Express: {
      name: "Express.js",
      icon: <SiExpress size={26} color="#8693AF" />,
    },
    MongoDB: { name: "MongoDB", icon: <DiMongodb size={26} color="#47A248" /> },
    PostgreSQL: {
      name: "PostgreSQL",
      icon: <SiPostgresql size={26} color="#4169E1" />,
    },
    Docker: { name: "Docker", icon: <FaDocker size={26} color="#2496ED" /> },
  };

  return (
    <div className="projects-container" id="projects">
      <h3 className="section-gap">Projects</h3>

      <a
        href="https://shelfie-v2.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project"
      >
        <div className="image-container">
          <img
            src={shelfieReact}
            alt="Shelfie Book App React version screenshot"
          />
        </div>
        <div className="project-info">
          <h5>
            Shelfie Book App <span className="version-badge">React</span>
            <span className="arrow-icon">↗</span>
          </h5>
          <p>
            A React-based version of my original Shelfie app. Browse, track, and
            organize your books with a clean, responsive design.
          </p>
          <div className="tech-used">
            {techStack.React.icon}
            {techStack.JavaScript.icon}
            {techStack.HTML.icon}
            {techStack.CSS.icon}
            {techStack.Express.icon}
            {techStack.MongoDB.icon}
          </div>
        </div>
      </a>

      <a
        href="https://shelfie-book-app.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project"
      >
        <div className="image-container">
          <img src={shelfieImg} alt="Shelfie Book App screenshot" />
        </div>
        <div className="project-info">
          <h5>
            Shelfie Book App
            <span className="arrow-icon">↗</span>
          </h5>
          <p>
            A single page application designed to help users organize their
            personal book collections, discover new reads, and track their
            reading progress.
          </p>
          <div className="tech-used">
            {techStack.React.icon}
            {techStack.JavaScript.icon}
            {techStack.HTML.icon}
            {techStack.CSS.icon}
            {techStack.Express.icon}
            {techStack.MongoDB.icon}
          </div>
        </div>
      </a>

      <a
        href="https://caring-paws.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project"
      >
        <div className="image-container">
          <img src={caringPawsImg} alt="Caring Paws app screenshot" />
        </div>
        <div className="project-info">
          <h5>
            Caring Paws
            <span className="arrow-icon">↗</span>
          </h5>
          <p>
            A full-stack web application designed to connect adoptable dogs with
            loving homes, streamline the application process, and provide
            resources to support a lifetime of happy companionship.
          </p>
          <div className="tech-used">
            {techStack.React.icon}
            {techStack.JavaScript.icon}
            {techStack.HTML.icon}
            {techStack.CSS.icon}
            {techStack.Express.icon}
            {techStack.MongoDB.icon}
          </div>
        </div>
      </a>
      
      <h3>Currently Working On</h3>

      <div className="project in-development">
        <div className="image-container placeholder-thumb">
          <div className="thumb-placeholder">
            <span className="thumb-icon">⚙</span>
          </div>
        </div>
        <div className="project-info">
          <h5>AI Meal Planner</h5>
          <p>
            AI-powered meal planner that generates personalized weekly meal
            plans based on your goals and macro targets{" "}
          </p>
          <div className="tech-used">
            {techStack.React.icon}
            {techStack.TypeScript.icon}
            {techStack.HTML.icon}
            {techStack.CSS.icon}
            {techStack.Express.icon}
            {techStack.PostgreSQL.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
