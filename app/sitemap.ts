import { site } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  const routes = [
    "",
    "/about",
    "/content",
    "/ai-tools",
    "/work/bus-search",
    "/work/train-booking",
    "/work/car-rentals",
    "/work/bus-product",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
  }));
}
