import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-ink text-paper hover:bg-accent hover:text-paper",
  outline:
    "border border-hairline bg-paper text-ink hover:border-ink",
  ghost: "bg-transparent text-ink-soft hover:text-ink",
} as const;

const sizes = {
  sm: "px-3 py-2 text-[13px] font-medium",
  md: "px-3.5 py-2.5 text-[13px]",
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
    "inline-flex items-center justify-center rounded-[var(--radius-sm)] tracking-tight",
    "transition-[background-color,color,border-color,transform,opacity] duration-300 ease-[var(--ease-out)]",
    "active:scale-[0.98]",
    variants[variant],
    sizes[size],
    pressed &&
      variant === "outline" &&
      "border-ink bg-ink text-paper hover:bg-ink hover:text-paper",
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
