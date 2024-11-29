import React, { useState, useEffect } from "react";
import { getWeather, getForecast } from "./api";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastSection from "./components/ForecastSection";
import "./styles/App.css";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const weatherData = await getWeather(city);
      const forecastData = await getForecast(city);

      if (forecastData) {
        // Filter the forecast to show one entry per day (e.g., 12:00:00)
        const dailyForecast = forecastData.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(dailyForecast);
      }

      setWeather(weatherData);
    }
    fetchData();
  }, [city]);

  return (
    <div className="app">
      <h1 className="app-title">Weather App</h1>
      <SearchBar city={city} setCity={setCity} />
      <div className="weather-section">
        {weather && <WeatherCard weather={weather} />}
        {forecast.length > 0 && <ForecastSection forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
