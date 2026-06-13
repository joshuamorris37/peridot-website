/** @type {import('next').NextConfig} */
const nextConfig = {
  // "There is no server" — ship a pure static site. Deploys to Vercel (or any
  // static host) with zero config.
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
