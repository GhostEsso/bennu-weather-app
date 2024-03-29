// HomePage.jsx
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Weather from './Weather';
import Rain from './Rain';
import "./navbar.css";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Weather />
      <Rain />
    </>
  );
};

export default HomePage;
