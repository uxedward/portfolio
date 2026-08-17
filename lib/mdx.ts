import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const workDirectory = path.join(process.cwd(), "content/work");

export function getCaseStudySource(slug: string) {
  const filePath = path.join(workDirectory, `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { content } = matter(file);
  return content;
}

export function caseStudyExists(slug: string) {
  return fs.existsSync(path.join(workDirectory, `${slug}.mdx`));
}
