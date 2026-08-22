import { cn } from "@/lib/cn";

export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-sm)] border border-hairline px-2 py-1 text-[12px] font-medium tracking-tight text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
