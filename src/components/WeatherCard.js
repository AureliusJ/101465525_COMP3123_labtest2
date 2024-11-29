import React from "react";
import "../styles/WeatherCard.css"; // Make sure this file exists in the styles directory

const WeatherCard = ({ weather }) => {
  // Format the date
  const date = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="weather-card">
      <div className="weather-card-left">
        <h2 className="weather-location">{weather.name}</h2>
        <p className="weather-date">{date}</p>
      </div>
      <div>
      <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="weather-icon"
        />
      </div>
      <div className="weather-card-right">
        <p className="weather-description">{weather.weather[0].description}</p>
        <p className="weather-temp">
          Temperature: <span>{weather.main.temp}°C</span>
        </p>
        <p>
          Min: <span>{weather.main.temp_min}°C</span> / Max:{" "}
          <span>{weather.main.temp_max}°C</span>
        </p>
        <p>
          Wind: <span>{weather.wind.speed} m/s</span>
        </p>
        <p>
          Humidity: <span>{weather.main.humidity}%</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
