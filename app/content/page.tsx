import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { contentProjects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Content",
  description:
    "Archives of design education, explorations, and public practice from @ux.edward.",
  alternates: { canonical: "/content" },
};

export default function ContentPage() {
  return (
    <div className="page-enter mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24">
      <p className="text-sm text-ink-soft">Archives</p>
      <h1 className="mt-5 max-w-3xl font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.03em]">
        Ideas, lessons, and explorations that left a trail of the work.
      </h1>
      <p className="mt-6 max-w-xl text-[17px] leading-7 text-ink-soft">
        Since 2021 I&apos;ve been teaching product design in public — Figma
        craft, stakeholder workshops, and the messy middle of shipping. This is
        the analogue to an archives page: the practice outside the case study.
      </p>

      <div className="mt-12 grid gap-3 md:grid-cols-2">
        {contentProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <ul className="mt-16 border-t border-hairline">
        {site.socials.map((social) => (
          <li key={social.name} className="border-b border-hairline">
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-baseline justify-between gap-4 py-5 text-lg transition-opacity hover:opacity-70"
            >
              <span>
                {social.name}
                <span className="ml-3 text-sm text-ink-soft">
                  {social.stat} {social.label}
                </span>
              </span>
              <span>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
