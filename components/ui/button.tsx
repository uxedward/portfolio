import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-ink text-white hover:bg-[#2c2a27] hover:text-white",
  outline:
    "border border-ink/35 bg-paper text-ink hover:border-ink hover:bg-paper-2",
  ghost: "bg-transparent text-ink-soft hover:text-ink",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm font-medium",
  md: "px-5 py-2.5 text-sm",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  pressed?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  type = "button",
  onClick,
  pressed,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full tracking-tight",
    "transition-[background-color,color,border-color,transform,opacity] duration-300 ease-[var(--ease-out)]",
    "active:scale-[0.98]",
    variants[variant],
    sizes[size],
    pressed &&
      variant === "outline" &&
      "border-ink bg-ink text-white hover:bg-ink hover:text-white",
    className,
  );

  if (href) {
    if (external || href.startsWith("#")) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-pressed={pressed}
      className={classes}
    >
      {children}
    </button>
  );
}
