import { NextApiRequest, NextApiResponse } from "next"
import { client } from "@/sanity/lib/client"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const query = `
        *[_type == "slot"] | order(publishedAt desc) {
          ...,
          "category": categories[0]->{_id, title}
        } 
      `
      const response = await client.fetch(query)
      res.status(200).json(response)
    } catch (error) {
      console.error("Error fetching slot data:", error)
      res.status(500).json({ message: "Error fetching slot data" })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
