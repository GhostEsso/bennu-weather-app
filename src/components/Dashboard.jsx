import React from "react";
import "./dashboard.css"; // Assure-toi de créer ce fichier CSS

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="rain-icon">
        {/* Utilise une icône de pluie de Weather Icons ici */}
        <i className="wi wi-rain"></i>Today
      </div>
      <div className="today-info">
        <div className="day-date">Sat, 3 Aug</div>
        <div className="temperature">
          28<span className="c">°C</span>
        </div>
        <div className="location">
          Barcelona, Spain
        </div>
        <div className="edit-icon">
          {/* Icône pour modifier la ville */}
          <i className="bi bi-pencil"></i>
        </div>
        <div className="feels-like">
          Feels like 33 <span className="dot"></span> Sunset 20:15
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
