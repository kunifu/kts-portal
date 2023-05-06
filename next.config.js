/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mypage",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
