/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.DEV_CLIENT_SERVER_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
