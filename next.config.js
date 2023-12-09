/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
    ],
  },
};

module.exports = nextConfig;
