import { getGuides } from "@/lib/resources";
import { site } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  const routes = [
    "",
    "/work",
    "/content",
    "/ai-tools",
    "/resources",
    "/work/help-center",
    "/work/bus-search",
    "/work/train-booking",
    "/work/car-rentals",
    "/work/bus-product",
    ...getGuides().map((resource) => `/resources/${resource.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
  }));
}
