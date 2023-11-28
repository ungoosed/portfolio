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
    children: [
      {
        path: "projects",
        element: <Projects/>,
        errorElement: <Error />,
      },
      {
        path: "achievements",
        element: <Achievements/>,
        errorElement: <Error />,
    
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
