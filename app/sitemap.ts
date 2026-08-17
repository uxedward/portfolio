import { site } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  const routes = ["", "/about", "/content", "/work/bus-search", "/work/train-booking", "/work/car-rentals"];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
  }));
}
