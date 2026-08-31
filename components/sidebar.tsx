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
import { StudioTab } from "@/components/studio-tab";
import { cn } from "@/lib/cn";
import { studioFromPath, studios } from "@/lib/nav";
import { site } from "@/lib/site";

const socialIcons = {
  Instagram: IconInstagram,
  TikTok: IconTikTok,
  Threads: IconThreads,
  LinkedIn: IconLinkedIn,
  Dribbble: IconDribbble,
} as const;

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeStudio = studioFromPath(pathname);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    for (const studio of studios) {
      router.prefetch(studio.href);
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

  function Tabs() {
    return (
      <ul className="space-y-1.5">
        {studios.map((studio) => (
          <li key={studio.id}>
            <StudioTab
              studio={studio}
              active={activeStudio === studio.id}
              onNavigate={() => setOpen(false)}
            />
          </li>
        ))}
      </ul>
    );
  }

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
            <SocialRow />
            <div className="mt-10">
              <Tabs />
            </div>
          </nav>
        </div>
      ) : null}

      <aside className="vt-sidebar fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-w)] flex-col border-r border-hairline bg-paper px-6 py-8 lg:flex">
        <Link href="/" className="text-lg font-medium tracking-tight">
          {site.fullName}
        </Link>

        <div className="mt-6">
          <SocialRow />
        </div>

        <nav aria-label="Work" className="mt-10 flex-1">
          <Tabs />
        </nav>
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
