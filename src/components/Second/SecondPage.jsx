// SevenDayForecast.jsx
import Navbar from "./Navbar";
import Title from "./Title";
import Panel from "./Panel";
import Temperature from "./Temperature";

import "./SecondPage.css";

const SecondPage = () => {
  return (
    <div className="secondPage">
      <Navbar />
      <Title />
      <Panel />
      <Temperature />
    </div>
  );
};

export default SecondPage;
