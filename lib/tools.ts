export type AiTool = {
  slug: string;
  title: string;
  summary: string;
  href?: string;
  year?: string;
  cover?: string;
};

/** Tools Edward has built with AI. Add shipped playground pieces here. */
export const aiTools: AiTool[] = [];
