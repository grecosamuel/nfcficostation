import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './Welcome';
import List from './List';
import { HashRouter, Route } from 'react-router-dom';

 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <HashRouter>
            <Route 
              path='/'
              element={<Welcome />}
            />
            <Route

              path='/list'
              element={<List />}
            />
         </HashRouter>
  </React.StrictMode>
);
