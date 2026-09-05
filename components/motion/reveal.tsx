"use client";

import { Children, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";
import { duration, easeOut } from "@/lib/motion";

function useEnteredView(threshold = 0.88) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * threshold) {
        setShown(true);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [shown, threshold]);

  return { ref, shown };
}

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
  const { ref, shown } = useEnteredView();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("max-w-full min-w-0", className)}
      initial={{ opacity: 0, y: 32 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
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
  const { ref, shown } = useEnteredView(0.92);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {items.map((child, index) => (
        <motion.div
          key={index}
          className={cn("max-w-full min-w-0", itemClassName)}
          initial={{ opacity: 0, y: 40 }}
          animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: duration.slow,
            ease: easeOut,
            delay: 0.06 + index * 0.08,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
