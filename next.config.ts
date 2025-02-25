import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore: appDir is a valid experimental flag in our Next.js version
  },
  reactStrictMode: true,
};

export default nextConfig;