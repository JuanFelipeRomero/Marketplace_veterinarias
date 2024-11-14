import { Provider } from '@/components/ui/provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

//Importacion de paginas / componentes
import HomePage from './pages/HomePage.jsx';

const router = createBrowserRouter([
  //Home page
  {
    path: '/',
    element: <HomePage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
