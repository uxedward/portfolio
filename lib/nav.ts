export const studios = [
  {
    id: "home",
    label: "Home",
    bannerLabel: "Edward",
    href: "/",
    subtitle: "About",
    mark: "none" as const,
  },
  {
    id: "tiket",
    label: "tiket.com (2021 - now)",
    bannerLabel: "tiket.com",
    href: "/work",
    subtitle: "Senior Product Designer",
    years: "2021 - Present",
    siteHref: "https://www.tiket.com",
    siteLabel: "tiket.com",
    mark: "logo" as const,
    image: "/images/tiket-logo.png",
  },
  {
    id: "uxedward",
    label: "@ux.edward",
    bannerLabel: "@ux.edward",
    href: "/content",
    subtitle: "Content Creation",
    siteHref: "https://www.instagram.com/ux.edward/",
    siteLabel: "Instagram",
    mark: "none" as const,
  },
  {
    id: "aitools",
    label: "AI Tools",
    bannerLabel: "AI Tools",
    href: "/ai-tools",
    subtitle: "Personal AI Playground",
    mark: "none" as const,
  },
] as const;

export type Studio = (typeof studios)[number];
export type StudioId = Studio["id"];

export function studioFromPath(pathname: string): StudioId {
  if (pathname.startsWith("/content")) return "uxedward";
  if (pathname.startsWith("/ai-tools")) return "aitools";
  if (pathname.startsWith("/work")) return "tiket";
  return "home";
}

export function getStudio(id: StudioId): Studio {
  const studio = studios.find((item) => item.id === id);
  if (!studio) {
    throw new Error(`Unknown studio: ${id}`);
  }
  return studio;
}
