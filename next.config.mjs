/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['v0.blob.com', 'images.unsplash.com'],
  },
  // Disable certain features that might cause deployment issues
  experimental: {
    serverActions: true,
  },
  eslint:{
    ignoreDuringBuilds: true,
  },typescript: {
    ignoreBuildErrors: true,
  },
  // Simplify the build process
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;

