   module.exports = {
     output: "export",  // 使用静态导出
     typescript: {
       ignoreBuildErrors: true
     },
     eslint: {
       ignoreDuringBuilds: true
     },
     experimental: {
       esmExternals: "loose",
     }
   };
