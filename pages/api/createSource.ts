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
	const [ text, source, category ] = req.body
	
	await supabase
                .from("facts")
                .insert([{ text, source, category }])
                .select();
	res.status(200).json({ data: req.body });
}