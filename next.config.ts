import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/case-1-tiket-carrental-redesign",
        destination: "/work/car-rentals",
        permanent: true,
      },
      {
        source: "/case-2-tiket-bus-error",
        destination: "/work/bus-search",
        permanent: true,
      },
      {
        source: "/case-3-tiket-train-bookingform",
        destination: "/work/train-booking",
        permanent: true,
      },
      {
        source: "/content",
        destination: "/",
        permanent: false,
      },
      {
        source: "/ai-tools",
        destination: "/resources",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
