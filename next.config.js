const withGraphql = require("next-plugin-graphql");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    config.resolve.preferRelative = true;
    return config;
  }
};

module.exports = withGraphql(nextConfig);
