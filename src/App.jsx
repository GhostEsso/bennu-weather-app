import React from 'react';
import Navbar from './components/Navbar.jsx'; // Importe le composant Navbar correctement
import './components/navbar.css'; // Assure-toi d'importer le fichier de styles correctement
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      {/* Ajoute ici les autres composants ou contenus de ton application */}
    </>
  );
};

export default App;
