/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
  domains: ["links.papareact.com", "image.tmdb.org"],
  },
  reactStrictMode: true,
  rules: {
    "react/display-name": "off"
  }
}

module.exports = nextConfig
