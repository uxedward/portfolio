"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 34,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-16 right-0 left-0 z-40 h-[2px] origin-left bg-ink lg:top-0 lg:left-[var(--sidebar-w)]"
      style={{ scaleX }}
    />
  );
}
