import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './Welcome';
import List from './List';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "nfcficostation",
    element: <Welcome />,
    children: [
      {
        path: 'list',
        element: <List />
      }
    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <RouterProvider router={router} />
  </React.StrictMode>
);
