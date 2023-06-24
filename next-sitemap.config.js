/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://slot-ndkk.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://slot-ndkk.vercel.app/server-sitemap.xml", // <==== Add here
      "https://localhost:3000/server-sitemap.xml", // <==== Add here
    ],
  }, // <= exclude here

  // ...other options
}
