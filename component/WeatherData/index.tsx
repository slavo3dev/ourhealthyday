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
				<div className="flex flex-col bg-teal-500 rounded-lg p-2 w-64 max-w-xs ml-5 translate-y-[290px] translate-x-[-45px]">
					<div className="text-sm font-light text-white">
						{weatherData.location.name}
					</div>
					<div className="text-sm text-white">
						{weatherData.current.last_updated}
					</div>
					<div className="flex flex-row items-center justify-center mt-4">
						<div className="font-medium text-4xl text-white mr-20">
							{weatherData.current.temp_c}°C
						</div>
						<div className="flex flex-col items-center ml-4">
							<div className="mt-1">
          
								<span className="text-xs font-light text-white">
									{weatherData.current.temp_f}°F
								</span>
							</div>
							<div>
								<span className="text-xs">
									<i className="far fa-long-arrow-down"></i>
								</span>
								<span className="text-xs font-light text-white">AT: 
									{weatherData.current.feelslike_c}°C
								</span>
							</div>
						</div>
					</div>
				</div>
			)}

		</>
	);
};
