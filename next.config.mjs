import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  // 1. IP PROTECTION: Strictly disable source maps in production
  // This is the primary way to keep your 3D logic secret from "Inspect Element".
  productionBrowserSourceMaps: false,

  // 2. STEALTH: Remove Next.js identification headers
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 3. GHOST ROUTING: Mask your folder structure
  // Users see '/showcase/hvac', but code stays at '/internal/v2/hvac-complex-3d'
  async rewrites() {
    return [
      {
        source: '/showcase/:client',
        destination: '/secret-internal-builds/:client', // Hide your real file paths
      },
      {
        source: '/wp-admin', // Honeypot for WP bots
        destination: '/api/honeypot',
      },
      {
        source: '/admin',
        destination: '/api/honeypot',
      }
    ];
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization.usedExports = true;
    }
    
    if (!isServer) {
        config.optimization.splitChunks = {
            ...config.optimization.splitChunks,
            cacheGroups: {
                ...config.optimization.splitChunks?.cacheGroups,
                spline: {
                    test: /[\\/]node_modules[\\/](@splinetool|@splinetool\/runtime|@splinetool\/react-spline)[\\/]/,
                    name: 'spline-runtime',
                    chunks: 'all', 
                    priority: 50, 
                    reuseExistingChunk: true,
                },
            },
        };
    }
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
