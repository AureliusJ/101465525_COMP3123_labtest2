import React from "react";
import "../styles/ForecastSection.css";

const colors = [
  { card: "#8ba892", font: "#dbe5dd" },
  { card: "#db9864", font: "#ebc5a7" },
  { card: "#b1695a", font: "#d3aaa2" },
  { card: "#644749", font: "#9a8888" },
  { card: "#3b4c63", font: "#c7d4eb" },
];

const ForecastSection = ({ forecast }) => {
  return (
    <div className="forecast-section">
      {forecast.map((data, index) => {
        const color = colors[index % colors.length]; // Cycle through the color array
        const date = new Date(data.dt_txt);
        const day = date.toLocaleDateString("en-US", { weekday: "long" });
        const fullDate = date.toLocaleDateString("en-US", { month: "long", day: "numeric" });

        return (
          <div
            key={index}
            className="forecast-card"
            style={{ backgroundColor: color.card, color: color.font }}
          >
            <h2>{day}</h2>
            <p className="forecast-date">{fullDate}</p>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
            />
            <p>{data.weather[0].description}</p>
            <p>
              Temp: <span>{data.main.temp}°C</span>
            </p>
            <p>
              Min: <span>{data.main.temp_min}°C</span> / Max: <span>{data.main.temp_max}°C</span>
            </p>
            <p>Wind: {data.wind.speed} m/s</p>
            <p>Humidity: {data.main.humidity}%</p>
          </div>
        );
      })}
    </div>
  );
};

export default ForecastSection;
