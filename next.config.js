/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: '/papaya', destination: '/papaya.html' }]
  },
}

module.exports = nextConfig
