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
  env: {
    PROJECT_REGION: process.env.PROJECT_REGION,
    COGNITO_IDENTITY_POOL_ID: process.env.COGNITO_IDENTITY_POOL_ID,
    COGNITO_REGION: process.env.COGNITO_REGION,
    USER_POOLS_ID: process.env.USER_POOLS_ID,
    USER_POOLS_WEB_CLIENT_ID: process.env.USER_POOLS_WEB_CLIENT_ID,
  }
};

module.exports = nextConfig;
