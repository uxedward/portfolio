import type { Metadata } from "next";
import { RiseIn } from "@/components/rise-in";
import { StudioBanner } from "@/components/studio-banner";
import { ToolCard } from "@/components/tool-card";
import { getStudio } from "@/lib/nav";
import { aiTools } from "@/lib/tools";

const studio = getStudio("playground");

export const metadata: Metadata = {
  title: "Playground",
  description:
    "A personal playground of tools Edward Sudjono has built with AI.",
  alternates: { canonical: "/ai-tools" },
};

export default function AiToolsPage() {
  return (
    <div className="px-6 py-10 sm:px-8 lg:px-10 lg:py-10">
      <StudioBanner studio={studio} />
      <p className="mb-3 text-sm text-ink-soft">Stuff I’m building</p>
      <p className="mb-8 max-w-xl text-[17px] leading-7 text-ink-soft">
        Tools I&apos;ve built with AI — small products, agents, and workflow
        experiments from my own practice.
      </p>
      {aiTools.length === 0 ? (
        <RiseIn>
          <div className="rounded-[var(--radius)] border border-hairline bg-paper-2 px-5 py-16 sm:px-8">
            <p className="text-[15px] text-ink">First tools coming soon.</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-ink-soft">
              This is where I&apos;ll collect the AI-built tools I actually use —
              not tutorials, the things I shipped.
            </p>
          </div>
        </RiseIn>
      ) : (
        <RiseIn>
          <ul className="grid gap-4 md:grid-cols-2 md:gap-3">
            {aiTools.map((tool) => (
              <li key={tool.slug}>
                <ToolCard tool={tool} />
              </li>
            ))}
          </ul>
        </RiseIn>
      )}
    </div>
  );
}
