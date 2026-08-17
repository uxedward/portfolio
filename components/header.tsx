"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
];

export function Header() {
  const pathname = usePathname();
  const inverse = pathname.startsWith("/work/");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-300",
        inverse
          ? "border-b border-white/10 bg-ink text-paper"
          : "border-b border-hairline/80 bg-paper/85 text-ink backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-tight transition-opacity duration-300 hover:opacity-60"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 text-[13px] sm:gap-7">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/" || pathname.startsWith("/work/")
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 transition-colors duration-300",
                  inverse
                    ? active
                      ? "text-paper"
                      : "text-paper/55 hover:text-paper"
                    : active
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-300 ease-[var(--ease-out)]",
                    inverse ? "bg-paper" : "bg-ink",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <p
          className={cn(
            "hidden text-sm sm:block",
            inverse ? "text-paper/55" : "text-ink-soft",
          )}
        >
          {site.practice}
        </p>
      </div>
    </header>
  );
}
