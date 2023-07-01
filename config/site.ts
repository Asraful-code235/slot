export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "SLOT",
      href: "/slot",
    },
    // {
    //   title: "SPORT",
    //   href: "/sport",
    // },
    {
      title: "CASINO",
      href: "/casino",
    },
    // {
    //   title: "LIVE STATISTICS",
    //   href: "/live-statistics",
    // },
    {
      title: "POKER",
      href: "/poker",
    },
    {
      title: "GUIDE",
      href: "/guide",
    },
    {
      title: "BLOG E NOTIZIE",
      href: "/blog-and-news",
    },
    {
      title: "CHI SIAMO",
      href: "/about-us",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
