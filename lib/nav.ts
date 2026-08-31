export const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "work", label: "Work", href: "/work" },
  { id: "resources", label: "Resources", href: "/resources" },
] as const;

export type NavItem = (typeof navItems)[number];
export type NavId = NavItem["id"];

export function navFromPath(pathname: string): NavId {
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/work")) return "work";
  if (pathname.startsWith("/resources")) return "resources";
  return "home";
}

export const tiketStudio = {
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
};

export type Studio = typeof tiketStudio;
