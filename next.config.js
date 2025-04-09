/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  typescript: {
    // 在构建过程中忽略TypeScript错误
    ignoreBuildErrors: true
  },
  // 忽略ESLint错误
  eslint: {
    ignoreDuringBuilds: true
  },
  // 临时重定向问题路由
  async rewrites() {
    return [
      {
        source: '/login/failed',
        destination: '/login',
      },
    ];
  }
};

module.exports = nextConfig;
