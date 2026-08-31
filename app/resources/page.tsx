import type { Metadata } from "next";
import Link from "next/link";
import { StudioBanner } from "@/components/studio-banner";
import { getStudio } from "@/lib/nav";
import { resourceItems } from "@/lib/resources";

const studio = getStudio("resources");

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Tools and guides Edward recommends — Figma, Mobbin, Claude, Notion, and more.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <StudioBanner studio={studio} />
      <p className="mb-8 max-w-xl text-[17px] leading-7 text-ink-soft">
        Tools I actually use and recommend — the same list I keep on{" "}
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
      <ul className="border-t border-hairline">
        {resourceItems.map((item) => {
          const className =
            "flex items-baseline justify-between gap-4 py-5 text-lg transition-opacity hover:opacity-70";
          const body = (
            <>
              <span>
                {item.title}
                <span className="mt-1 block text-sm font-normal leading-6 text-ink-soft">
                  {item.body}
                </span>
              </span>
              <span className="shrink-0">↗</span>
            </>
          );

          return (
            <li key={item.href} className="border-b border-hairline">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {body}
                </a>
              ) : (
                <Link href={item.href} className={className}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
