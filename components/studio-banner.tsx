import { IconExternal } from "@/components/icons";
import { StudioMark } from "@/components/studio-tab";
import type { Studio } from "@/lib/nav";

export function StudioBanner({ studio }: { studio: Studio }) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-5 border-b border-hairline pb-8">
      <div className="flex items-center gap-3">
        <StudioMark studio={studio} size="lg" />
        <div>
          <h1 className="font-sans text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.03em]">
            {studio.bannerLabel}
          </h1>
          {"years" in studio && studio.years ? (
            <p className="mt-2 text-sm text-ink-soft">{studio.years}</p>
          ) : null}
        </div>
      </div>
      {"siteHref" in studio && studio.siteHref ? (
        <a
          href={studio.siteHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-hairline bg-paper px-3 py-2 text-[13px] transition-colors duration-300 hover:border-ink"
        >
          {studio.siteLabel}
          <IconExternal />
        </a>
      ) : null}
    </div>
  );
}
