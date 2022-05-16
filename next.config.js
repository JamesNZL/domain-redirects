/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path',
        destination: 'https://github.com/JamesNZL',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
