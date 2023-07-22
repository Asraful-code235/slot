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

    const getGuide = groq`
    *[_type == "guide"] | order(publishedAt desc) {
      ...,
      "category": categories[0]->{_id, title}
    } 
  `

    const getNews = groq`
  *[_type == "posts"] | order(publishedAt desc) {
    ...,
    "category": categories[0]->{_id, title}
  } 
`

    const response1 = await client.fetch(getGuide)
    // Method to source urls from cms
    // const response = await fetch(`https://slot-ndkk.vercel.app/api/slots`)

    if (!response1.ok) {
      console.log(response1)
    }

    const res1 = response1.map((url: any) => {
      return {
        loc: `https://slot-ndkk.vercel.app/guide/${url.slug.current}`,
        lastmod: new Date().toISOString(),
      }
    })

    const response2 = await client.fetch(getNews)
    // Method to source urls from cms
    // const response = await fetch(`https://slot-ndkk.vercel.app/api/slots`)

    if (!response2.ok) {
      console.log(response2)
    }

    const res2 = response2.map((url: any) => {
      return {
        loc: `https://slot-ndkk.vercel.app/blog-e-notizie/${url.slug.current}`,
        lastmod: new Date().toISOString(),
      }
    })

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
      // {
      //   loc: "https://slot-ndkk.vercel.app/live-statistics",
      //   lastmod: new Date().toISOString(),
      //   // changefreq
      //   // priority
      // },
      {
        loc: "https://slot-ndkk.vercel.app/poker",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/guide",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/blog-e-notizie",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      {
        loc: "https://slot-ndkk.vercel.app/chi-siamo",
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      },
      ...res,
      ...res1,
      ...res2,
    ])
  } catch (error) {
    console.error(error)
    return getServerSideSitemap([]) // Return an empty sitemap in case of error
  }
}
