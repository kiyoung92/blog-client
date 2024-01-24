/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: `${process.env.REQUEST_URL}/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
