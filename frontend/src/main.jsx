import { Provider } from '@/components/ui/provider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Theme } from '@chakra-ui/react';

//Importacion de paginas / componentes
import HomePage from './pages/HomePage.jsx';
import WelcomeRegister from './pages/WelcomeRegister.jsx';
import UserRegister from './pages/UserRegister.jsx';
import PetRegister from './pages/PetRegister.jsx';
import UserLogin from './pages/UserLogin.jsx';
import BuscarClinica from './pages/BuscarClinica.jsx';
import LayoutDuenoMascota from './pages/LayoutDuenoMascota.jsx';
import DetallesClinica from './pages/DetallesClinica.jsx';

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
    element: <UserLogin />,
  },
  {
    path: '/home-page-Dueno',
    element: <LayoutDuenoMascota />,
    children: [
      {
        index: true,
        element: <BuscarClinica />,
      },
      {
        path: '/home-page-Dueno/buscar-clinica',
        element: <BuscarClinica />,
      },
      {
        path: '/home-page-Dueno/detalles-clinica',
        element: <DetallesClinica />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <Theme appearance="light">
        <RouterProvider router={router} />
      </Theme>
    </Provider>
  </StrictMode>
);
