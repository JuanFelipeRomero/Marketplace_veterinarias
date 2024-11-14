import { Provider } from '@/components/ui/provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

//Importacion de paginas / componentes
import HomePage from './pages/HomePage.jsx';
import WelcomeRegister  from './pages/WelcomeRegister.jsx';
import UserRegister from './pages/UserRegister.jsx';
import PetRegister from './pages/PetRegister.jsx';
import UserLogin from './pages/UserLogin.jsx';

const router = createBrowserRouter([
  //Home page
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/registerwelcome',
    element: <WelcomeRegister />,
  },
  {
    path: '/registeruser',
    element: <UserRegister />,
  },
  {
    path: '/petregister',
    element: <PetRegister />,
  },
  {
    path: '/login',
    element: <UserLogin/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
