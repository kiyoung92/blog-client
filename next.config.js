/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.SERVER_PORT}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
