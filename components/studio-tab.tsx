import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Studio } from "@/lib/nav";

export function StudioMark({
  studio,
  active = false,
  size = "md",
}: {
  studio: Studio;
  active?: boolean;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-8 w-8 text-[13px]" : "h-9 w-9 text-sm";

  if (studio.mark === "portrait") {
    return (
      <Image
        src={studio.image}
        alt=""
        width={36}
        height={36}
        className={cn("shrink-0 rounded-full object-cover", box)}
      />
    );
  }

  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-[var(--radius-sm)] font-medium tracking-tight",
        box,
        active ? "bg-paper text-ink" : "bg-paper-2 text-ink",
      )}
    >
      {studio.mark}
    </span>
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
      <StudioMark studio={studio} active={active} />
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
      <span
        className={cn(
          "shrink-0 pt-0.5 text-[12px]",
          active ? "text-paper/70" : "text-ink-soft",
        )}
      >
        {studio.years}
      </span>
    </Link>
  );
}
