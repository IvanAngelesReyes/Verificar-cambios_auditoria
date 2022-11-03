import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Moderadores from './Moderadores';
import Login from './Interfaces/LoginRegistro/Login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Moderadores/>
  </React.StrictMode>
);
