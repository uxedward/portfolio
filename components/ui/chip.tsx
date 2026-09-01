import { cn } from "@/lib/cn";

export function Chip({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium tracking-tight",
        tone === "inverse"
          ? "rounded-full border border-paper px-4 py-2 text-[14px] text-paper lg:px-6 lg:py-2.5 lg:text-base"
          : "rounded-[var(--radius-sm)] border border-hairline bg-paper-2 px-2 py-1 text-[12px] text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
