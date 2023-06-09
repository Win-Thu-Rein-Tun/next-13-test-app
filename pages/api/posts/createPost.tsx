import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).json({ message: "You need to login" });
    
    const title: string = req.body.title;

    //User
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    //Check
    if (title.length > 300)
      return res.status(403).json({ message: "Less than 300 words" });
    if (!title.length)
      return res.status(403).json({ message: "Please don't leave empty" });

    //Create
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser.id,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ err: "Error while making a post" });
    }
  }
}
