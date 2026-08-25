/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    serverComponentsExternalPackages: ['resend'],
    optimizePackageImports: ['class-variance-authority', '@hugeicons/react', '@hugeicons/core-free-icons'],
  },
}
export default nextConfig
