"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const activeStudio = studioFromPath(pathname);
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

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
            <p className="max-w-sm text-[15px] leading-6 text-ink-soft">
              Designer in practice, educator at heart. Product design at
              tiket.com, based in {site.location}.
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Work
            </p>
            <ul className="mt-3 space-y-1.5">
              {studios.map((studio) => (
                <li key={studio.id}>
                  <StudioTab
                    studio={studio}
                    active={activeStudio === studio.id}
                  />
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-1 border-t border-hairline pt-6">
              <li>
                <Link
                  href="/about"
                  className={cn(
                    "block rounded-2xl px-3 py-3 text-[15px] transition-colors duration-300",
                    pathname === "/about"
                      ? "bg-ink text-white"
                      : "hover:bg-paper-2",
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href={site.chat.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl px-3 py-3 text-[15px] hover:bg-paper-2"
                >
                  {site.chat.label} ↗
                </a>
              </li>
            </ul>
            <div className="mt-auto pt-10">
              <SocialRow />
            </div>
          </nav>
        </div>
      ) : null}

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-w)] flex-col border-r border-hairline bg-paper px-6 py-8 lg:flex">
        <Link href="/" className="text-lg font-medium tracking-tight">
          {site.fullName}
        </Link>
        <p className="mt-4 text-[15px] leading-6 text-ink-soft">
          Designer in practice, <em className="italic text-ink">educator</em> at
          heart. Product design at tiket.com, based in {site.location}.
        </p>
        <Link
          href="/about"
          className="mt-4 w-fit text-sm text-ink underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:decoration-ink"
        >
          About →
        </Link>

        <div className="mt-6">
          <SocialRow />
        </div>

        <nav aria-label="Work" className="mt-10 flex-1">
          <ul className="space-y-1.5">
            {studios.map((studio) => (
              <li key={studio.id}>
                <StudioTab
                  studio={studio}
                  active={activeStudio === studio.id}
                />
              </li>
            ))}
          </ul>
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
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper-2 text-ink-soft transition-colors duration-300 hover:bg-hairline hover:text-ink"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
