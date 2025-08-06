import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';


import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'


const router = createBrowserRouter([
  {
  path: '/',
  element: <HomePage/>
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/experience',
    element: <ExperiencePage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={ router }/>
  </StrictMode>,
)
