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
        "inline-flex items-center rounded-full border border-hairline px-3 py-1.5 text-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
