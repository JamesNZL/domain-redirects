/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://github.com/JamesNZL',
        permanent: false,
      },
      {
        source: '/21',
        destination: 'https://forms.gle/7WuMbfqdrbu3KrtS8',
        permanent: false,
      },
      {
        source: '/:path((?!api/).*)',
        destination: 'https://github.com/JamesNZL/:path',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
