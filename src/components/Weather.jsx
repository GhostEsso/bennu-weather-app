import "./weather.css";

const Weather = () => {
  return (
    <div className="weather-container">
      <div className="weather-header">
        <div className="today">
          Today <br />
          <span className="dote"></span>
        </div>
        <div className="tomorrow">Tomorrow</div>
        <div className="next">Next 7 Days <span className="arrow">&gt;</span> </div>
      </div>

      <div className="weather">
        <div className="weather-details">
          <div className="weather-time">12AM</div>
          <div className="weather-icon">
            <i className="wi wi-day-sunny"></i>
          </div>
          <div className="weather-temperature">26°C</div>
        </div>
        <div className="weather-details">
          <div className="weather-time">9AM</div>
          <div className="weather-icon">
            <i className="wi wi-snow"></i>
          </div>
          <div className="weather-temperature">26°C</div>
        </div>
        <div className="weather-details">
          <div className="weather-time">10PM</div>
          <div className="weather-icon">
            <i className="wi wi-day-sleet-storm"></i>
          </div>
          <div className="weather-temperature">26°C</div>
        </div>
        <div className="weather-details">
          <div className="weather-time">12AM</div>
          <div className="weather-icon">
            <i className="wi wi-night-alt-storm-showers"></i>
          </div>
          <div className="weather-temperature">26°C</div>
        </div>
        <div className="weather-details">
          <div className="weather-time">12AM</div>
          <div className="weather-icon">
            <i className="wi wi-day-sprinkle"></i>
          </div>
          <div className="weather-temperature">26°C</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
