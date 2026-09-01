"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Studio } from "@/lib/nav";

export function StudioMark({
  studio,
  size = "md",
}: {
  studio: Studio;
  size?: "sm" | "md" | "lg";
}) {
  if (!("image" in studio) || !studio.image) return null;

  const box =
    size === "lg"
      ? "h-16 w-16 md:h-[92px] md:w-[92px]"
      : size === "sm"
        ? "h-8 w-8"
        : "h-9 w-9";
  const pixels = size === "lg" ? 184 : 36;

  return (
    <Image
      src={studio.image}
      alt={studio.bannerLabel}
      width={pixels}
      height={pixels}
      quality={100}
      className={cn(
        "shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-paper object-contain",
        box,
      )}
    />
  );
}

export function StudioTab({
  studio,
  active,
  onNavigate,
}: {
  studio: Studio;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={studio.href}
      prefetch
      scroll={false}
      aria-current={active ? "page" : undefined}
      onClick={() => {
        if (!onNavigate) return;
        window.setTimeout(onNavigate, 0);
      }}
      className={cn(
        "flex items-start gap-3 rounded-[var(--radius)] px-3 py-2.5",
        active ? "bg-ink text-paper" : "text-ink hover:bg-paper-2",
      )}
    >
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-medium tracking-tight">
          {studio.label}
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[13px] leading-5",
            active ? "text-paper/70" : "text-ink-soft",
          )}
        >
          {studio.subtitle}
        </span>
      </span>
    </Link>
  );
}
