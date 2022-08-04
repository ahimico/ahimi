const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');

/** @type {import('@nrwl/next/plugins/with-nx').WithNxOptions} */
const nxConfig = { nx: { svgr: true } };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['cdn.dribbble.com'] },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

const INVALID_NEXT_CONFIG_KEYS = ['nx'];

module.exports = withPlugins(
  [
    // [withPWA, pwaConfig], // issue https://github.com/shadowwalker/next-pwa/issues/371#issue-1320841797
    [withNx, nxConfig],
    config => {
      for (let key of INVALID_NEXT_CONFIG_KEYS) delete config[key];
      return config;
    },
  ],
  nextConfig,
);
