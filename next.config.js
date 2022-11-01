const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const nextImages = withImages()

module.exports = {
  ...nextConfig,
  ...nextImages
}
