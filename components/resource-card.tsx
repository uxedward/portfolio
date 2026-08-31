import Link from "next/link";
import type { Resource } from "@/lib/resources";
import { site } from "@/lib/site";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group block rounded-[var(--radius)] border border-hairline px-5 py-6 transition-opacity duration-300 hover:opacity-80 sm:px-6"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">
        {resource.category}
      </p>
      <h3 className="mt-3 font-sans text-[clamp(1.35rem,2.4vw,1.75rem)] font-medium leading-[1.1] tracking-[-0.03em]">
        {resource.title}
      </h3>
      <p className="mt-2 max-w-2xl text-[16px] leading-7 text-ink-muted">
        {resource.summary}
      </p>
      <p className="mt-5 text-[14px] text-ink-soft transition-colors duration-300 group-hover:text-ink">
        {resource.cta} →
      </p>
    </Link>
  );
}

export function GuideHeader({
  title,
  kicker = "Edward’s Guidebook",
}: {
  title: string;
  kicker?: string;
}) {
  return (
    <header className="border-b border-hairline pb-8">
      <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
        {kicker}
      </p>
      <h1 className="mt-3 font-sans text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.95] tracking-[-0.03em]">
        {title}
      </h1>
      <p className="mt-4 text-[15px] text-ink-soft">
        Created by {site.handle}
        <span className="mx-2 text-hairline">·</span>
        <a
          href={site.socials[0].href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-ink"
        >
          instagram.com/ux.edward
        </a>
      </p>
    </header>
  );
}

export function CommandBlock({ command }: { command: string }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-[var(--radius-sm)] border border-hairline bg-paper-2 px-4 py-3 text-[13px] leading-6 text-ink">
      <code>{command}</code>
    </pre>
  );
}
