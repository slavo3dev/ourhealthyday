import { FC, useEffect, useState } from "react";

type TLocationName = "London" | "Belgrade";

interface IWeatherData {
  location: {
    name: TLocationName;
    region: "City of London, Greater London";
    country: "United Kingdom";
  };
  current: {
    condition: {
      code: number;
      icon: string;
      text: string;
    };
    temp_c: number;
    temp_f: number;
    last_updated: string;
    feelslike_c: number;
    wind_kph: number;
    humidity: number;
    uv: number;
  };
}

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
      setWeatherData(data as WeatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      {weatherData && (
        <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
          <div className="text-sm font-light text-gray-500">
            {weatherData.location.name}
          </div>
          <div className="text-sm text-gray-500">
            {weatherData.current.last_updated}
          </div>
          <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
            <svg
              className="w-32 h-32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-row items-center justify-center mt-6">
            <div className="font-mediutm text-6xl text-black font-bold">
              {weatherData.current.temp_c}c°
            </div>
            <div className="flex flex-col items-center ml-6">
              <div className="mt-1">
                <span className="text-sm">
                  <i className="far fa-long-arrow-up"></i>
                </span>
                <span className="text-sm font-light text-gray-500">
                  {weatherData.current.temp_f}f°
                </span>
              </div>
              <div>
                <span className="text-sm">
                  <i className="far fa-long-arrow-down"></i>
                </span>
                <span className="text-sm font-light text-gray-500">
                  {weatherData.current.feelslike_c}c°
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-6">
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">
                {weatherData.current.wind_kph}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">
                {weatherData.current.humidity}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-medium text-sm">
                {weatherData.current.uv}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
