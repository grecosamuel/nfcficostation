import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './Welcome';
import List from './List';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <HashRouter>
            <Routes>
              <Route path='/' element={<Welcome />}/>
              <Route path='/list' element={<List />}/>
            </Routes>
         </HashRouter>
  </React.StrictMode>
);
