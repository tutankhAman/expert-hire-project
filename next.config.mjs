/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable App Router
  experimental: {
    appDir: false
  }
};

export default nextConfig;
