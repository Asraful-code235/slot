/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io", "dzyz6pzqu8wfo.cloudfront.net", "spikeslot.com"],
  },
}

export default nextConfig
