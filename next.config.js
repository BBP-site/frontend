const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  webpack5: true,
  swcMinify: true,
  i18n,
  images: {
    domains: [''],
  },
  output: 'standalone',
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
      fileLoader: {
        limit: 16384,
        name() {
          if (process.env.NODE_ENV === 'development') {
            return '[path][name].[ext]';
          }
          return '[contenthash].[ext]';
        },
      },
      svgrOptions: {
        svgo: false,
        titleProp: true,
      },
    }),
  ],
  nextConfig
);
