import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'

//Other components
import HomePage from './html-site/HomePage/HomePage.jsx'
import ErrorPage from './html-site/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
