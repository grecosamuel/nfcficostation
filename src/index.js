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
              exact
              path='/nfcficostation'
              element={<Welcome />}
            />
            <Route
              exact
              path='/nfcficostation/list'
              element={<List />}
            />
         </HashRouter>
  </React.StrictMode>
);
