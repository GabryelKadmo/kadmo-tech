import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
