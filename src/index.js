import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './Welcome';
import Video from './Video';
import List from './List';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/nfcficostation",
    element: <Welcome />,
  },
  {
    path: '/video',
    element: <Video />
  },
  {
    path: '/list',
    element: <List />
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <RouterProvider router={router} />
  </React.StrictMode>
);
