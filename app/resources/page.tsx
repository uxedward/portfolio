import type { Metadata } from "next";
import { BrandMark } from "@/components/brand-mark";
import { Reveal, RevealList } from "@/components/motion/reveal";
import { ResourceCard } from "@/components/resource-card";
import { StudioBanner } from "@/components/studio-banner";
import { getStudio } from "@/lib/nav";
import { resourceItems, resources } from "@/lib/resources";

const studio = getStudio("resources");

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Edward’s guides for Figma MCP and Mobbin, plus brands he has partnered with.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="px-6 py-10 sm:px-8 lg:px-10 lg:py-10">
      <StudioBanner studio={studio} />

      <section>
        <RevealList
          className="grid gap-3 md:grid-cols-2"
          itemClassName="h-full"
        >
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </RevealList>
      </section>

      <section className="mt-16">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.7rem,3vw,2.375rem)] leading-[0.95] tracking-[-0.03em]">
            Brands I proudly have partnered with
          </h2>
        </Reveal>
        <ul className="mt-8 border-t border-hairline">
          {resourceItems.map((item) => (
            <li key={item.href} className="border-b border-hairline">
              <Reveal>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 py-5 transition-opacity hover:opacity-70 sm:items-center"
                >
                  <BrandMark src={item.logo} alt={item.logoAlt} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[17px] font-medium tracking-tight">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-ink-soft">
                      {item.body}
                    </span>
                  </span>
                  <span className="shrink-0 text-lg text-ink-soft">↗</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
