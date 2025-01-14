import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: 'export',
  basePath: process.env.BASE_PATH || '',
};

export default nextConfig;
