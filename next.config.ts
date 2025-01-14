import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: 'export',
  basePath: '/wdccxsesahackathon.com',
  assetPrefix: '/wdccxsesahackathon.com/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
