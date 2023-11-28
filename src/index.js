import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colours.css'
import App from './App';
import Error from './pages/Error'
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "projects",
    element: <App page={<Projects/>} />,
    errorElement: <Error />,

  },
  {
    path: "achievements",
    element: <App page={<Achievements/>} />,
    errorElement: <Error />,

  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
