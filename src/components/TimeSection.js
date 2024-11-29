import React from "react";
import "../styles/TimeSection.css";

const TimeSection = ({ title, temp, icon, condition }) => (
  <div className="time-section">
    <h3>{title}</h3>
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={condition} />
    <p>{temp}°C</p>
  </div>
);

export default TimeSection;
