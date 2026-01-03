import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  webpack: (config, { dev, isServer }) => {
    // 1. 
    if (!dev) {
      config.optimization.usedExports = true;
    }
    
    // 2.
    if (!isServer) {
        config.optimization.splitChunks = {
            ...config.optimization.splitChunks,
            cacheGroups: {
                ...config.optimization.splitChunks?.cacheGroups,
                // 
                spline: {
                    test: /[\\/]node_modules[\\/](@splinetool|@splinetool\/runtime|@splinetool\/react-spline)[\\/]/,
                    name: 'spline-runtime',
                    chunks: 'all', 
                    priority: 50, // 
                    reuseExistingChunk: true,
                },
            },
        };
    }
    
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
