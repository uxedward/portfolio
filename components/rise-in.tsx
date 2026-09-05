"use client";

import { Reveal } from "@/components/motion/reveal";

export function RiseIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Reveal className={className}>{children}</Reveal>;
}
