/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['cdn.discordapp.com', 'via.placeholder.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
