"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import {
  IconInstagram,
  IconLinkedIn,
  IconThreads,
  IconTikTok,
} from "@/components/icons";
import { StudioTab } from "@/components/studio-tab";
import { cn } from "@/lib/cn";
import { studioFromPath, studios, type StudioId } from "@/lib/nav";
import { site } from "@/lib/site";

const socialIcons = {
  Instagram: IconInstagram,
  TikTok: IconTikTok,
  Threads: IconThreads,
  LinkedIn: IconLinkedIn,
} as const;

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const activeStudio = studioFromPath(pathname);
  const [open, setOpen] = useState(false);
  const [openForPath, setOpenForPath] = useState(pathname);
  const menuId = useId();

  if (openForPath !== pathname) {
    setOpenForPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    for (const studio of studios) {
      router.prefetch(studio.href);
    }
  }, [router]);

  useEffect(() => {
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
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-hairline bg-paper px-6 lg:hidden">
        <Link href="/" className="text-[15px] font-medium tracking-tight">
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
          className="fixed inset-0 z-40 flex flex-col bg-paper pt-16 lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-8 pt-2"
          >
            <MobileNav
              activeStudio={activeStudio}
              onNavigate={() => setOpen(false)}
            />
            <div className="mt-auto border-t border-hairline pt-6">
              <SocialRow />
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
          <DesktopNav activeStudio={activeStudio} />
        </nav>
      </aside>
    </>
  );
}

function DesktopNav({ activeStudio }: { activeStudio: StudioId }) {
  return (
    <ul className="space-y-1.5">
      {studios.map((studio) => (
        <li key={studio.id}>
          <StudioTab studio={studio} active={activeStudio === studio.id} />
        </li>
      ))}
    </ul>
  );
}

function MobileNav({
  activeStudio,
  onNavigate,
}: {
  activeStudio: StudioId;
  onNavigate: () => void;
}) {
  return (
    <ul>
      {studios.map((studio) => {
        const active = activeStudio === studio.id;
        return (
          <li key={studio.id}>
            <Link
              href={studio.href}
              prefetch
              scroll={false}
              aria-current={active ? "page" : undefined}
              onClick={() => {
                window.setTimeout(onNavigate, 0);
              }}
              className={cn(
                "block border-b border-hairline py-5",
                active ? "text-ink" : "text-ink-muted",
              )}
            >
              <span className="block text-[22px] font-medium tracking-tight">
                {studio.label}
              </span>
              <span className="mt-1 block text-[15px] leading-6 text-ink-soft">
                {studio.subtitle}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink-soft transition-colors duration-300 hover:border-ink hover:text-ink"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
