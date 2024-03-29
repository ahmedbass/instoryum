/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "upload.wikimedia.org", "www.pngkey.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
