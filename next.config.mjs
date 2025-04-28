/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Disable ISR for development to prevent HMR issues
  experimental: {
    isrMemoryCacheSize: 0,
  },
};

export default nextConfig;
