import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  framework: "nextjs",
  redirects: [
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
  ],
};
