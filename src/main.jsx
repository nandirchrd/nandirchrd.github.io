import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import DeveloperPage from './pages/developerPage';
import PhotographyPage from './pages/photographyPage';
import PortfolioPage from './pages/portfolioPage';
import './styles/main.css';

const router = createHashRouter([
  {
    path: '/photography',
    element: <PhotographyPage />,
  },
  {
    path: '/portofolio',
    element: <PortfolioPage />,
  },
  {
    path: '/',
    element: <DeveloperPage />,
    errorElement: <DeveloperPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
