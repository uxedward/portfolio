import { IconExternal } from "@/components/icons";
import { StudioMark } from "@/components/studio-tab";
import type { Studio } from "@/lib/nav";

export function StudioBanner({ studio }: { studio: Studio }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <StudioMark studio={studio} size="sm" />
        <div>
          <h1 className="text-xl font-medium tracking-tight sm:text-2xl">
            {studio.label}
          </h1>
          <p className="mt-0.5 text-sm text-ink-soft">{studio.years}</p>
        </div>
      </div>
      <a
        href={studio.siteHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-paper px-3.5 py-2 text-sm transition-colors duration-300 hover:border-ink"
      >
        {studio.siteLabel}
        <IconExternal />
      </a>
    </div>
  );
}
