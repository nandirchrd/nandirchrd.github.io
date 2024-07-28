import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import DeveloperPage from './pages/developerPage'
import PhotographyPage from './pages/photographyPage'
import PortofolioPage from './pages/portofolioPage'
import './styles/main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DeveloperPage/>,
    errorElement: <DeveloperPage/>
  },
  {
    path: '/photography',
    element: <PhotographyPage/>
  },
  {
    path: '/portofolio',
    element: <PortofolioPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
