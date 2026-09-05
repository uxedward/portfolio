"use client";

import { Children } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { cardGrid, cardItem, duration, easeOut } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("max-w-full min-w-0", className)}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14, margin: "0px 0px -8% 0px" }}
      transition={{ duration: duration.slow, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealList({
  children,
  className,
  itemClassName,
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}) {
  const reduce = useReducedMotion();
  const items = Children.toArray(children);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={cardGrid}
    >
      {items.map((child, index) => (
        <motion.div
          key={index}
          className={cn("max-w-full min-w-0", itemClassName)}
          variants={cardItem}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
