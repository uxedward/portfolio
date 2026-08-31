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
    id: "work",
    label: "Work",
    bannerLabel: "tiket.com",
    href: "/work",
    subtitle: "tiket.com (2021 - now)",
    years: "2021 - Present",
    siteHref: "https://www.tiket.com",
    siteLabel: "tiket.com",
    mark: "logo" as const,
    image: "/images/tiket-logo.png",
  },
  {
    id: "resources",
    label: "Resources",
    bannerLabel: "Resources",
    href: "/resources",
    subtitle: "Guides & tools",
    mark: "none" as const,
  },
  {
    id: "playground",
    label: "Playground",
    bannerLabel: "Playground",
    href: "/ai-tools",
    subtitle: "Stuff I’m building",
    mark: "none" as const,
  },
] as const;

export const contentStudio = {
  id: "uxedward",
  label: "@ux.edward",
  bannerLabel: "@ux.edward",
  href: "/content",
  subtitle: "Content Creation",
  siteHref: "https://www.instagram.com/ux.edward/",
  siteLabel: "Instagram",
  mark: "none" as const,
} as const;

export type Studio = (typeof studios)[number] | typeof contentStudio;
export type StudioId = Studio["id"];

export function studioFromPath(pathname: string): StudioId {
  if (pathname.startsWith("/resources")) return "resources";
  if (pathname.startsWith("/ai-tools")) return "playground";
  if (pathname.startsWith("/work")) return "work";
  return "home";
}

export function getStudio(id: StudioId): Studio {
  if (id === "uxedward") return contentStudio;
  const studio = studios.find((item) => item.id === id);
  if (!studio) {
    throw new Error(`Unknown studio: ${id}`);
  }
  return studio;
}
