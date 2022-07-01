/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "www.pngkey.com"]
  }
};

module.exports = nextConfig;
