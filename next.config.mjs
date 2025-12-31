/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    // Enable tree shaking
    config.optimization.usedExports = true;
    
    if (!isServer) {
      // Split chunks for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          // Separate React/React-DOM into their own chunk
          react: {
            name: 'react-vendors',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 40,
            reuseExistingChunk: true,
          },
          // Separate other vendor libraries
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            priority: 30,
            reuseExistingChunk: true,
          },
          // Common code shared between pages
          common: {
            name: 'common',
            minChunks: 2,
            priority: 20,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;
