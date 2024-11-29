import axios from "axios";

const API_KEY = "8385ef852cd207bcae152078ea951576";
const BASE_URL = "http://api.openweathermap.org/data/2.5";

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error("Error fetching current weather:", error);
    return null;
  }
};

export const getForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    return null;
  }
};
