import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './Welcome';
import List from './List';
import { Route, HashRouter as Router, Routes  } from 'react-router-dom'

 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <Router>
            <Routes>
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

            </Routes>
            
         </Router>
  </React.StrictMode>
);
