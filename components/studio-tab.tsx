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
  const box =
    size === "lg" ? "h-[92px] w-[92px]" : size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const pixels = size === "lg" ? 184 : 36;

  return (
    <Image
      src={studio.image}
      alt={studio.bannerLabel}
      width={pixels}
      height={pixels}
      quality={100}
      className={cn(
        "shrink-0 overflow-hidden bg-paper",
        box,
        studio.mark === "portrait"
          ? "rounded-full object-cover"
          : "rounded-[var(--radius-sm)] object-contain",
      )}
    />
  );
}

export function StudioTab({
  studio,
  active,
}: {
  studio: Studio;
  active: boolean;
}) {
  return (
    <Link
      href={studio.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-start gap-3 rounded-[var(--radius)] px-3 py-2.5 transition-colors duration-300",
        active ? "bg-ink text-paper" : "text-ink hover:bg-paper-2",
      )}
    >
      <StudioMark studio={studio} />
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
