import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "utfs.io",
        pathname: "/a/nv7bbljpkp/**",
      },
    ],
  }
};

export default nextConfig;
