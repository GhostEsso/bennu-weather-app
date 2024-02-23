// HomePage.jsx
import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Weather from './Weather';
import Rain from './Rain';
import "./homepage.css";
import "./navbar.css";

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
