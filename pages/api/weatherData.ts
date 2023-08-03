import { NextApiRequest, NextApiResponse } from "next";

export default function handler ( req:NextApiRequest, res: NextApiResponse )
{
	const apiKey = process.env.API_KEY;
	const location = "Belgrade, Serbia";
	const url = `https://api.weatherapi.com/v1/current.json?key=${ apiKey }&q=${ location }`;
    
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Error fetching weather data");
			}
			return response.json();
		})
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((error) => {
			console.error("Error fetching weather data:", error);
			res.status(500).json({ error: "Error fetching weather data" });
		});
}