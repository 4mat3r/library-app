import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['images-na.ssl-images-amazon.com'], // Add the allowed domain here
  },

  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
