import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 100],
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
        source: "/about",
        destination: "/",
        permanent: false,
      },
      {
        source: "/work/bus-product",
        destination:
          "https://tiket.design/stories/the-design-odyssey-of-bus-and-shuttle-at-tiket-com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
