/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dbugstdltd.com",
      },
    ],
  },
};

export default nextConfig;
