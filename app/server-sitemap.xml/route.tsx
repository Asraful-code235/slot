// app/server-sitemap.xml/route.ts
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { getServerSideSitemap } from "next-sitemap"

export async function GET(request: Request) {
  try {
    const query = groq`
    *[_type == "slot"] | order(publishedAt desc) {
      ...,
      "category": categories[0]->{_id, title}
    } 
  `
    const response = await client.fetch(query)
    // Method to source urls from cms
    // const response = await fetch(`https://slot-ndkk.vercel.app/api/slots`)

    if (!response.ok) {
      console.log(response)
    }

    const res = response.map((url: any) => {
      return {
        loc: `https://slot-ndkk.vercel.app/slot/${url.slug.current}`,
        lastmod: new Date().toISOString(),
      }
    })

    console.log(response)

    return getServerSideSitemap([
      {
        loc: "https://slot-ndkk.vercel.app/",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/slot",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/casino",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/live-statistics",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/slot/poker",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/slot/guide",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/slot/blog-and-news",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/slot/about-us",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      ...res,
    ])
  } catch (error) {
    console.error(error)
    return getServerSideSitemap([]) // Return an empty sitemap in case of error
  }
}
