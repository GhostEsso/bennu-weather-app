// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import SevenDayForecast from './components/SevenDayForecast';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" >
            <HomePage />
          </Route>
          <Route path="/seven-day-forecast">
            <SevenDayForecast />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
