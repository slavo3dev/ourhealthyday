import axios from "axios";

const apiKey = '6bb1483eb5c24c00b8f132720233105';
const location = 'Belgrade, Serbia';

const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

axios.get(url)
  .then((response) => {
    const weatherData: WeatherData = response.data as WeatherData;
    // Use the weather data here
  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
  });


interface WeatherData {
    last_updated: string;
    last_updated_epoch: number;
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    condition_text: string;
    condition_icon: string;
    condition_code: number;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    is_day: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  }

  export default WeatherData;