"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { duration, easeOut } from "@/lib/motion";

export function FillText({
  children,
  className,
  delay = 0.04,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={cn("relative block overflow-hidden", className)}>
      <span className="opacity-25">{children}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: duration.slow + 0.1, ease: easeOut, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
