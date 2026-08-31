import { cn } from "@/lib/cn";

export function RiseIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("card-rise", className)}>{children}</div>;
}
