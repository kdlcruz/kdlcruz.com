import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

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

export default withFlowbiteReact(nextConfig);