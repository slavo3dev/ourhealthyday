import { FC, useEffect, useState } from "react";
import { IWeatherData } from "@lib/types";


export const WeatherData: FC = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(
    null,
  );

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const apiKey = "6bb1483eb5c24c00b8f132720233105"; //process.env.API_KEY; don't know how to import from .env
      const location = "London | Belgrade";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error fetching weather data");
      }

      const data = await response.json();
      console.log(data);
      setWeatherData(data as IWeatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      {weatherData && (
  <div className="flex flex-col bg-white rounded p-2 w-64 max-w-xs translate-y-[260px] translate-x-[1000px]">
    <div className="text-sm font-light text-gray-500">
      {weatherData.location.name}
    </div>
    <div className="text-sm text-gray-500">
      {weatherData.current.last_updated}
    </div>
    <div className="flex flex-row items-center justify-center mt-4">
      <div className="font-medium text-4xl text-black font-bold">
        {weatherData.current.temp_c}°C
      </div>
      <div className="flex flex-col items-center ml-4">
        <div className="mt-1">
          <span className="text-xs">
            <i className="far fa-long-arrow-up"></i>
          </span>
          <span className="text-xs font-light text-gray-500">
            {weatherData.current.temp_f}°F
          </span>
        </div>
        <div>
          <span className="text-xs">
            <i className="far fa-long-arrow-down"></i>
          </span>
          <span className="text-xs font-light text-gray-500">
            {weatherData.current.feelslike_c}°C
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-between mt-4">
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs">
          {weatherData.current.wind_kph}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs">
          {weatherData.current.humidity}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs">{weatherData.current.uv}</div>
      </div>
    </div>
  </div>
)}

    </>
  );
};
