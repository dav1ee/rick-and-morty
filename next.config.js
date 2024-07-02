/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['rickandmortyapi.com'],
    unoptimized: true
  }
};

module.exports = nextConfig;
