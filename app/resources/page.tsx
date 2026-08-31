import type { Metadata } from "next";
import { ResourceCard } from "@/components/resource-card";
import { StudioBanner } from "@/components/studio-banner";
import { getStudio } from "@/lib/nav";
import { resourceItems, resources } from "@/lib/resources";

const studio = getStudio("resources");

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Edward’s guides for Figma MCP and Mobbin, plus tools he actually uses.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="px-5 py-8 sm:px-8 lg:max-w-[720px] lg:px-10 lg:py-10">
      <StudioBanner studio={studio} />

      <section>
        <h2 className="font-sans text-[clamp(1.8rem,3vw,2.4rem)] leading-[0.95] tracking-[-0.03em]">
          Guides
        </h2>
        <p className="mt-3 max-w-xl text-[16px] leading-7 text-ink-soft">
          Setup notes I wrote so designers can get Figma MCP, Claude Code, and
          Mobbin working.
        </p>
        <div className="mt-6 space-y-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-sans text-[clamp(1.8rem,3vw,2.4rem)] leading-[0.95] tracking-[-0.03em]">
          Tools
        </h2>
        <p className="mt-3 max-w-xl text-[16px] leading-7 text-ink-soft">
          Things I actually use — the same list I keep on{" "}
          <a
            href="https://beacons.ai/ux.edward"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:decoration-ink"
          >
            beacons.ai/ux.edward
          </a>
          .
        </p>
        <ul className="mt-8 border-t border-hairline">
          {resourceItems.map((item) => (
            <li key={item.href} className="border-b border-hairline">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-baseline justify-between gap-4 py-5 transition-opacity hover:opacity-70"
              >
                <span>
                  <span className="block text-[17px] font-medium tracking-tight">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-ink-soft">
                    {item.body}
                  </span>
                </span>
                <span className="shrink-0 text-lg text-ink-soft">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
