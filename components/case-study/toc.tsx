"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type TocItem = { id: string; label: string };

const HEADER_OFFSET = 112;

export function CaseStudyToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    function onScroll() {
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= HEADER_OFFSET) {
          current = item.id;
        }
      }
      if (current) setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  function goTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (HEADER_OFFSET - 8);
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  }

  return (
    <nav
      aria-label="On this page"
      className="min-w-0 w-full max-w-full overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] lg:overflow-visible [&::-webkit-scrollbar]:hidden"
    >
      <ul className="flex w-max gap-5 py-3 lg:w-full lg:flex-col lg:gap-3 lg:py-0">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="shrink-0 lg:shrink">
              <a
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  goTo(item.id);
                }}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block whitespace-nowrap py-2 text-[15px] leading-[1.35] tracking-tight transition-colors duration-300 ease-[var(--ease-out)] lg:text-base",
                  isActive
                    ? "font-medium text-ink"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
