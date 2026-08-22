export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const duration = {
  fast: 0.18,
  page: 0.22,
  base: 0.32,
  slow: 0.5,
} as const;

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
  transition: { duration: duration.base, ease: easeOut },
} as const;

export const pageTransition = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.page, ease: easeOut },
} as const;

export const cardGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
} as const;

export const cardItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeOut },
  },
} as const;

export const tabSpring = {
  type: "tween",
  duration: duration.page,
  ease: easeOut,
} as const;
