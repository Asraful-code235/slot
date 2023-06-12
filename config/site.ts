export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "SLOT",
      href: "/",
    },
    {
      title: "SPORT",
      href: "/sport",
    },
    {
      title: "CASINO",
      href: "/casino",
    },
    {
      title: "LIVE STATISTICS",
      href: "/live-statistics",
    },
    {
      title: "POKER",
      href: "/poker",
    },
    {
      title: "BLOG AND NEWS",
      href: "/blog-and-news",
    },
    {
      title: "ABOUT US",
      href: "/about-us",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
