import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { StudioBanner } from "@/components/studio-banner";
import { getStudio } from "@/lib/nav";
import { contentProjects } from "@/lib/projects";
import { site } from "@/lib/site";

const studio = getStudio("uxedward");

export const metadata: Metadata = {
  title: "Content",
  description:
    "Archives of design education, explorations, and public practice from @ux.edward.",
  alternates: { canonical: "/content" },
};

export default function ContentPage() {
  return (
    <div className="page-enter px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <StudioBanner studio={studio} />
      <p className="mb-8 max-w-xl text-[17px] leading-7 text-ink-soft">
        Since 2021 I&apos;ve been teaching product design in public — Figma
        craft, stakeholder workshops, and the messy middle of shipping.
      </p>
      <ProjectGrid projects={contentProjects} />
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
