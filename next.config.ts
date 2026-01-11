import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用 standalone 模式以支持 Docker 部署
  output: 'standalone',
  
  // 禁用 Turbopack，使用 Webpack（解决字体加载问题）
  experimental: {
    turbo: false,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
