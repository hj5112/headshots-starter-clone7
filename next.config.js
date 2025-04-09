   /** @type {import('next').NextConfig} */
   const nextConfig = {
     experimental: {
       esmExternals: "loose",
     },
     // 忽略TypeScript错误
     typescript: {
       ignoreBuildErrors: true
     },
     // 忽略ESLint错误
     eslint: {
       ignoreDuringBuilds: true
     },
     // 禁用特定页面类型
     pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
     // 设置输出模式
     output: 'standalone',
     // 重写问题路由
     async rewrites() {
       return [
         {
           source: '/_not-found',
           destination: '/',
         },
         {
           source: '/login/failed',
           destination: '/login',
         }
       ];
     }
   };

   module.exports = nextConfig;
