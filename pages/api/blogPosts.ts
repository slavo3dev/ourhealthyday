import { NextApiRequest, NextApiResponse } from "next";
import { request } from "graphql-request";
import { GRAPHQL_API_URL, GRAPHQL_QUERY } from "@lib/api";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { category } = req.query;
  
	const graphqlAPI = GRAPHQL_API_URL;
  
	const query = GRAPHQL_QUERY;

	try {
		const data = await request(graphqlAPI, query, { category });
		res.status(200).json({ data });
	} catch (error) {
		console.error("Error fetching blog posts:", error);
		res.status(500).json({ error: "Error fetching blog posts" });
	}
}
