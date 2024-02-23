// SevenDayForecast.jsx
import React from 'react';
import Next from './Next';
import styles from './styles/sevendayforecast.module.css';

const SevenDayForecast = () => {
  return (
    <div className={styles.sevenDayForecastContainer}>
      <Next />
    </div>
  );
};

export default SevenDayForecast;
