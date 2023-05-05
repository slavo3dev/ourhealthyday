import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
)
{
	console.log( "Request Body: ", req.body );
	console.log("Response: ", res);
	res.status(200).json({ data: req.body });
}