import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) 
    return res.status(401).json({ message: "You need to login" });
    const title: string = req.body.title;

    //Check
    if (title.length > 300)
      return res.status(403).json({ message: "!Less than 300 words!" });
    if (title.length)
      return res.status(403).json({ messsage: "Don't leave empty" });

    //Create
  }
}
