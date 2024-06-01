import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.jsx'; 
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap-icons/font/bootstrap-icons.css';



const root = createRoot(document.getElementById('root')); 

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
