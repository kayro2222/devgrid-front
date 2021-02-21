import React from 'react';
import './index.css';

function Weather({ weather }) {
  return (
    <div className="box-weather">
      <div className="weather-items">
        <span className="text-description">{weather.name}</span>
        <span className="text-temp">
          {Math.floor(+weather.main.temp)}
          ºC
        </span>
        <span className="text-description">{weather.weather[0].main}</span>
      </div>
    </div>
  );
}

export default Weather;
