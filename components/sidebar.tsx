"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import {
  IconDribbble,
  IconInstagram,
  IconLinkedIn,
  IconThreads,
  IconTikTok,
} from "@/components/icons";
import { cn } from "@/lib/cn";
import { navFromPath, navItems } from "@/lib/nav";
import { site } from "@/lib/site";

const socialIcons = {
  Instagram: IconInstagram,
  TikTok: IconTikTok,
  Threads: IconThreads,
  LinkedIn: IconLinkedIn,
  Dribbble: IconDribbble,
} as const;

function Bio() {
  return (
    <p className="max-w-sm text-[15px] leading-6 text-ink-soft">
      Product Designer by day,{" "}
      <em className="italic text-ink">content creator</em> by night.
      <br />
      <br />
      Currently <em className="italic">building products</em> @ tiket.com
    </p>
  );
}

function NavList({
  active,
  onNavigate,
}: {
  active: ReturnType<typeof navFromPath>;
  onNavigate?: () => void;
}) {
  return (
    <ul className="space-y-1">
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              prefetch
              scroll={false}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                if (!onNavigate) return;
                window.setTimeout(onNavigate, 0);
              }}
              className={cn(
                "block rounded-[var(--radius-sm)] px-2 py-2.5 text-[15px] tracking-tight transition-colors duration-300",
                isActive
                  ? "font-medium text-ink"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const active = navFromPath(pathname);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    for (const item of navItems) {
      router.prefetch(item.href);
    }
  }, [router]);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-hairline bg-paper px-5 lg:hidden">
        <Link href="/" className="text-sm font-medium tracking-tight">
          {site.name}
        </Link>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
          className="relative grid h-11 w-11 place-items-center"
        >
          <span
            className={cn(
              "absolute left-3 right-3 h-px bg-ink transition-transform duration-300 ease-[var(--ease-out)]",
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[15px]",
            )}
          />
          <span
            className={cn(
              "absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 bg-ink transition-opacity duration-300",
              open ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute left-3 right-3 h-px bg-ink transition-transform duration-300 ease-[var(--ease-out)]",
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[27px]",
            )}
          />
        </button>
      </header>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-0 z-40 overflow-y-auto bg-paper pt-14 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 py-8">
            <Bio />
            <div className="mt-8">
              <NavList active={active} onNavigate={() => setOpen(false)} />
            </div>
            <a
              href={site.chat.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 text-sm text-ink-soft"
            >
              {site.chat.label} ↗
            </a>
            <div className="mt-auto pt-10">
              <SocialRow />
            </div>
          </nav>
        </div>
      ) : null}

      <aside className="vt-sidebar fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-w)] flex-col border-r border-hairline bg-paper px-6 py-8 lg:flex">
        <Link href="/" className="text-lg font-medium tracking-tight">
          {site.fullName}
        </Link>
        <div className="mt-4">
          <Bio />
        </div>

        <div className="mt-6">
          <SocialRow />
        </div>

        <nav aria-label="Primary" className="mt-10 flex-1">
          <NavList active={active} />
        </nav>

        <a
          href={site.chat.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
        >
          {site.chat.label} ↗
        </a>
      </aside>
    </>
  );
}

function SocialRow() {
  return (
    <ul className="flex flex-wrap gap-2">
      {site.socials.map((social) => {
        const Icon = socialIcons[social.name];
        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors duration-300 hover:border-ink hover:text-ink"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
