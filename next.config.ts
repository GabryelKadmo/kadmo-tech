import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.imgur.com"],
  },
  async redirects() {
    return [
      {
        source: "/form",
        destination: "https://forms.gle/VeVfXbfQAEU5iCcv5",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
