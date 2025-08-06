import React from 'react'
import Navbar from '../../components/Navbar'
import AboutPage from '../About/AboutPage'
import ExperiencePage from '../Experience/ExperiencePage'
import ProjectsPage from '../Projects/ProjectsPage'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <ProjectsPage />
      <ExperiencePage />
    </div>
  )
}

export default HomePage