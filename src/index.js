import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colours.css'
import Root from './Root';
import Error from './pages/Error'
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Contacts from './pages/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "achievements",
        element: <Achievements />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ]
  },
  {


  },


]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
