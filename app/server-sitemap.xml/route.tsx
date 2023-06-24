// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from "next-sitemap"

export async function GET(request: Request) {
  // Method to source urls from cms
  const response = await fetch("https://slot-ndkk.vercel.app/api/slots")
  const urls = await response.json()

  // @ts-ignore
  const res =
    urls.map((url: any) => {
      return {
        loc: `https://slot-ndkk.vercel.app/${url.slug.current}`,
        lastmod: new Date().toISOString(),
      }
    }) ?? []

  console.log(urls)

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
}
