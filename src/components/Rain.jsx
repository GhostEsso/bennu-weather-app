import "./rain.css";

const Rain = () => {
  return (
    <div className="rain">
      <h3>Chance of rain</h3>
      <div className="weather">
        <div className="sunny">
          <p>sunny</p>
          <p>rainy</p>
          <p>
            heavy <br /> 
            rainy
          </p>
        </div>
        <div className="graphs">
        </div>
      </div>
      <div className="hours">
        <p>10AM</p>
        <p>12AM</p>
        <p>2PM</p>
        <p>4PM</p>
        <p>6PM</p>
        <p>8PM</p>
      </div>
      <div className="barre-laterale">
        <hr />
      </div>
    </div>
  );
};

export default Rain;
