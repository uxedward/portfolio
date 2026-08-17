import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-tight"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 text-[13px] text-ink-soft sm:gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="hidden text-sm text-ink-soft sm:block">{site.practice}</p>
      </div>
    </header>
  );
}
