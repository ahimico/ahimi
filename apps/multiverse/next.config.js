const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
];

/** @type {import('@nrwl/next/plugins/with-nx').WithNxOptions} */
const nxConfig = { nx: { svgr: true } };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.dribbble.com', 'cdna.artstation.com', 'cdnb.artstation.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

const INVALID_NEXT_CONFIG_KEYS = ['nx'];

module.exports = withPlugins(
  [
    // [withPWA, pwaConfig], // issue https://github.com/shadowwalker/next-pwa/issues/371#issue-1320841797
    [withNx, nxConfig],
    config => {
      for (const key of INVALID_NEXT_CONFIG_KEYS) delete config[key];
      return config;
    },
  ],
  nextConfig,
);
