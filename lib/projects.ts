export type Category = "product" | "content";

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  category: Category;
  summary: string;
  outcome: string;
  metrics: Metric[];
  cover: string;
  duration?: string;
  type?: string;
  liveUrl?: string;
  externalUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "bus-search",
    title: "Improving Search Result Experience",
    client: "tiket.com / Bus & Shuttle",
    year: "2023",
    tags: ["Product", "Research"],
    category: "product",
    summary:
      "A month of behaviour analysis, usability tests, and an impact-to-implementation workshop to fix Bus & Shuttle empty search states.",
    outcome: "+4.2% search-to-book CVR",
    metrics: [
      { value: "+4.2%", label: "Search to book CVR" },
      { value: "+7%", label: "No-route error CTR to product detail" },
      { value: "+12.4%", label: "No-route error CVR to purchase" },
    ],
    cover: "/images/work/bus-search-cover.jpg",
    duration: "Sept 2023 · 1 month",
    type: "Post-release improvement",
    liveUrl: "https://m.tiket.com/bus-travel",
    featured: true,
  },
  {
    slug: "train-booking",
    title: "Improving Booking Form Experience",
    client: "tiket.com / Train",
    year: "2023",
    tags: ["Product", "Experiment"],
    category: "product",
    summary:
      "Redesigned the train booking form after 62.5% of users dropped off on page one — guiding instead of pressuring.",
    outcome: "+2.12% CVR to purchase",
    metrics: [
      { value: "+2.12%", label: "Booking form to purchase CVR" },
      { value: "90%", label: "Users filling passenger details" },
    ],
    cover: "/images/work/train-booking-cover.jpg",
    duration: "June 2023 · 1 month",
    type: "A/B experiment",
    liveUrl: "https://m.tiket.com/kereta-api",
    featured: true,
  },
  {
    slug: "car-rentals",
    title: "Improving Business Scheme & User Experience",
    client: "tiket.com / Car Rentals",
    year: "2022",
    tags: ["Product", "Research"],
    category: "product",
    summary:
      "Reworked Car Rentals education, area pricing, and booking after a wave of complaints and customer-service inquiries.",
    outcome: "−8% complaints · +16.7% landing CVR",
    metrics: [
      { value: "+16.7%", label: "Landing to search CVR" },
      { value: "+19.8%", label: "Product detail to booking CVR" },
      { value: "+8.2%", label: "Booking form to payment CVR" },
      { value: "−8%", label: "Area / zone complaints" },
    ],
    cover: "/images/work/car-rentals-cover.jpg",
    duration: "February 2022 · 2 months",
    type: "UX improvement",
    liveUrl: "https://m.tiket.com/sewa-mobil",
    featured: true,
  },
  {
    slug: "bus-product",
    title: "Creation of Bus & Shuttle Product",
    client: "tiket.com / Bus & Shuttle",
    year: "2023",
    tags: ["Product", "0–1"],
    category: "product",
    summary:
      "Designed tiket.com’s first Bus & Shuttle product so people across Indonesia could buy essential land transport in one flow.",
    outcome: "#2 homepage search · 256k projected users / year",
    metrics: [
      { value: "#2", label: "Homepage search inquiries" },
      { value: "256k", label: "Projected users per year" },
    ],
    cover: "/images/work/bus-product-cover.jpg",
    duration: "2023",
    type: "New product",
    externalUrl:
      "https://tiket.design/stories/the-design-odyssey-of-bus-and-shuttle-at-tiket-com",
    featured: true,
  },
  {
    slug: "instagram",
    title: "Teaching product design in public",
    client: "Instagram",
    year: "2021—",
    tags: ["Content"],
    category: "content",
    summary:
      "Short-form breakdowns of Figma craft, stakeholder workshops, and the path from junior to senior product designer.",
    outcome: "110k+ followers",
    metrics: [{ value: "110k+", label: "Followers" }],
    cover: "/images/about/edward-portrait.jpg",
    externalUrl: "https://instagram.com/uxedward",
  },
  {
    slug: "tiktok",
    title: "Advocating Figma & product thinking",
    client: "TikTok",
    year: "2021—",
    tags: ["Content"],
    category: "content",
    summary:
      "Fast, practical product-design lessons for designers working inside complex stakeholder environments.",
    outcome: "90k+ followers",
    metrics: [{ value: "90k+", label: "Followers" }],
    cover: "/images/about/edward-grid.jpg",
    externalUrl: "https://www.tiktok.com/@ux.edward",
  },
  {
    slug: "dribbble",
    title: "Design explorations",
    client: "Dribbble",
    year: "Ongoing",
    tags: ["Content"],
    category: "content",
    summary:
      "Interface studies and visual explorations outside of shipped product work.",
    outcome: "Shots & studies",
    metrics: [{ value: "→", label: "View on Dribbble" }],
    cover: "/images/work/bus-product-cover.jpg",
    externalUrl: "https://dribbble.com/uxedward",
  },
];

export const caseStudies = projects.filter(
  (project) => project.category === "product" && !project.externalUrl,
);

export const workProjects = projects.filter(
  (project) => project.category === "product",
);

export const contentProjects = projects.filter(
  (project) => project.category === "content",
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const index = caseStudies.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return caseStudies[(index + 1) % caseStudies.length];
}

export function projectHref(project: Project) {
  if (project.externalUrl) return project.externalUrl;
  return `/work/${project.slug}`;
}

export function isExternal(project: Project) {
  return Boolean(project.externalUrl);
}
