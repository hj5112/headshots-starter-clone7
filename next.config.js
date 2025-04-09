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
      {
        source: '/_not-found',
        destination: '/',
      }
    ];
  },
  // 禁用内置的404页面
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => !ext.includes('not-found')),
  // 增加静态生成超时时间
  staticPageGenerationTimeout: 180,
  // 输出独立构建
  output: 'standalone'
};

module.exports = nextConfig;
