export const studios = [
  {
    id: "tiket",
    label: "tiket.com",
    href: "/",
    subtitle: "Product design",
    years: "2021—Present",
    siteHref: "https://www.tiket.com",
    siteLabel: "tiket.com",
    mark: "logo",
    image: "/images/tiket-logo.png",
  },
  {
    id: "uxedward",
    label: "@ux.edward",
    href: "/content",
    subtitle: "Teaching in public",
    years: "2021—",
    siteHref: "https://www.instagram.com/ux.edward/",
    siteLabel: "Instagram",
    mark: "portrait",
    image: "/images/about/edward-portrait.jpg",
  },
] as const;

export type Studio = (typeof studios)[number];
export type StudioId = Studio["id"];

export function studioFromPath(pathname: string): StudioId | null {
  if (pathname.startsWith("/content")) return "uxedward";
  if (pathname === "/" || pathname.startsWith("/work/")) return "tiket";
  return null;
}

export function getStudio(id: StudioId): Studio {
  const studio = studios.find((item) => item.id === id);
  if (!studio) {
    throw new Error(`Unknown studio: ${id}`);
  }
  return studio;
}
