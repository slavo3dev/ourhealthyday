import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@lib/supabase";

type Data = {
    data: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
)
{
	// you need to put to try and catch function 
	await supabase
		.from("facts")
		.insert([req.body])
		.select();
	res.status(200).json({ data: req.body });
}