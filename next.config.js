/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    domains: ['sami-shop.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.sami-shop.com'
      }
    ]
  }
}

module.exports = nextConfig
