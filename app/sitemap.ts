import { resources } from "@/lib/resources";
import { site } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  const routes = [
    "",
    "/about",
    "/work",
    "/resources",
    "/work/bus-search",
    "/work/train-booking",
    "/work/car-rentals",
    "/work/bus-product",
    ...resources.map((resource) => `/resources/${resource.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
  }));
}
