import Image from "next/image";
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
        "shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-paper object-contain",
        box,
      )}
    />
  );
}
