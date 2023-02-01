/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
  modularizeImports: {
    'react-tsparticles': {
      transform: 'react-tsparticles/{{member}}',
    },
  },
};

module.exports = nextConfig;
