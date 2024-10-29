import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

//Other components
import HomePage from './pages/homePage/homePage.jsx'
import ErrorPage from './pages/errorPage/errorPage.jsx'

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
