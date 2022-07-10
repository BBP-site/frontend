const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  webpack5: true,
  swcMinify: true,
  images: {
    domains: [''],
  },
  async rewrites() {
    const rewrites = [];
    if (process.env.API_HOST)
      rewrites.push({
        source: '/v1/:path*',
        destination: `${process.env.API_HOST}/v1/:path*`,
      });
    return rewrites;
  },
  async headers() {
    return [
      {
        source: '/fonts',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = withPlugins(
  [
    withSvgr({
      svgrOptions: {
        svgo: false,
        titleProp: true,
      },
    }),
  ],
  nextConfig
);
