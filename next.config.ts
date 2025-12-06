import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

// Your actual Next.js config
const nextConfig: NextConfig = {
  // add future config options here
};

// Wrap it with MDX, and export only **one** default
export default withMDX({
  ...nextConfig,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});
