import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

// Your actual Next.js config
const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.ignoreWarnings = [
      { message: /sourceMapURL could not be parsed/ },
    ];
    return config;
  },
};

// Wrap with MDX and export
export default withMDX(nextConfig);
