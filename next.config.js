 /** @type {import('next').NextConfig} */
   const nextConfig = {
     experimental: {
       esmExternals: "loose",
     },
     // 忽略构建错误
     typescript: {
       ignoreBuildErrors: true
     },
     eslint: {
       ignoreDuringBuilds: true
     },
     // 关闭预渲染
     staticPageGenerationTimeout: 1000,
     // 禁用自动静态优化
     optimizeFonts: false,
     // 跳过特定页面
     excludeDefaultMomentLocales: true,
     compiler: {
       // 禁用React严格模式
       styledComponents: true,
     },
     // 使用独立输出
     output: 'standalone',
     // 完全禁用页面数据收集
     env: {
       NEXT_DISABLE_SOURCEMAPS: "1",
       NEXT_TELEMETRY_DISABLED: "1",
     },
     // 禁用特殊页面的渲染
     pageExtensions: ['js', 'jsx', 'ts', 'tsx'].filter(ext => 
       !ext.includes('not-found') && !ext.includes('error')
     ),
     // 使用重写而不是重定向
     async rewrites() {
       return [
         {
           source: '/_not-found',
           destination: '/',
         },
         {
           source: '/login/failed',
           destination: '/login',
         },
         {
           source: '/404',
           destination: '/',
         },
         {
           source: '/500',
           destination: '/',
         }
       ];
     }
   };

   module.exports = nextConfig;


