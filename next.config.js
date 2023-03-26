/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // basePath: "/cootelsLandingPage",
  assetPrefix: isProd
    ? "https://shishlovfelix.github.io/cootelsLandingPage"
    : undefined,
};

module.exports = nextConfig;
