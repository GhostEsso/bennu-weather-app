// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import SevenDayForecast from './components/Next/SevenDayForecast';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seven-day-forecast" element={<SevenDayForecast />} />
      </Routes>
    </Router>
  );
};

export default App;
