import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'

//Other components
import HomePage from './html-site/HomePage/HomePage.jsx'
import ErrorPage from './html-site/ErrorPage/ErrorPage.jsx'
import ExperiencePage from './html-site/experiencePage/experiencePage.jsx'
import PatentPage from './html-site/patentPage/patentPage.jsx'
import ProjectPage from './html-site/projectPage/projectPage.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/experience",
    element: <ExperiencePage />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/patents",
    element: <PatentPage />,
    errorElement: <ErrorPage />,
  },
  {
    path : "/projects",
    element: <ProjectPage />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
