import { NextRequest, NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"

export async function GET(request: NextRequest, response: NextResponse) {
  const query = `
          *[_type == "slot"] | order(publishedAt desc) {
            ...,
            "category": categories[0]->{_id, title}
          } 
        `
  const res = await client.fetch(query)

  return NextResponse.json(res)
}
