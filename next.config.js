/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextConfig = {
  reactStrictMode: true,

  images: {
    disableStaticImages: true,
  },
}

module.exports = withPlugins([
  [optimizedImages],
  nextConfig,
]);
