import { IconExternal } from "@/components/icons";
import { StudioMark } from "@/components/studio-tab";
import type { Studio } from "@/lib/nav";

export function StudioBanner({ studio }: { studio: Studio }) {
  return (
    <div className="mb-10 flex flex-col gap-5 border-b border-hairline pb-8 sm:mb-12 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
      <div className="flex items-center gap-3">
        <StudioMark studio={studio} size="lg" />
        <div>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,3.8rem)] leading-[0.95] tracking-[-0.03em]">
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
