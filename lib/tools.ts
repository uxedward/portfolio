export type AiTool = {
  slug: string;
  title: string;
  summary: string;
  href?: string;
  year?: string;
  cover?: string;
};

/** Tools Edward has built with AI. Add shipped playground pieces here. */
export const aiTools: AiTool[] = [
  {
    slug: "setflow",
    title: "Setflow",
    summary: "A worship setlist app I use for church gathering.",
    href: "https://temporary-turbo-gorge-3va6m4d.vercel.app/",
    year: "2026",
    cover: "/images/playground/worship-setlist.jpg",
  },
];
