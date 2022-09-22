import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './pages/Home'; // o componente 'Home' recebeu aqui o nome 'App'
import { Home } from './pages/Home'; // tem que receber pelo mesmo nome, pois não foi esxpotado default

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


