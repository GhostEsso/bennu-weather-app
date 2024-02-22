import Navbar from './components/Navbar.jsx'; // Importe le composant Navbar correctement
import './components/navbar.css'; // Assure-toi d'importer le fichier de styles correctement
import Dashboard from './components/Dashboard.jsx';
import Weather from './components/Weather.jsx';
import Rain from './components/Rain.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Weather />
      <Rain />
    </>
  );
};

export default App;
