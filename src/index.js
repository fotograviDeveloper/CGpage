import React from 'react';
import ReactDOM from 'react-dom/client'; // Aquí se importa 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Se usa createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
