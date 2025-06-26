import React from "react";

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="card-header">
        <h3>Погода</h3>
        <div className="weater-display">
          <div className="weater-main">
            <div className="city">Таллин</div>
            <div className="temp">16</div>
            <div className="description">пасмурно</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
