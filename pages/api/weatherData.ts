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

const apiKey = '6bb1483eb5c24c00b8f132720233105';
const location = 'Belgrade, Serbia';

const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }
    return response.json();
  })
  .then((data) => {
    const weatherData: WeatherData = data as WeatherData;
  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
  });

  export default WeatherData;