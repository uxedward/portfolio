import Image from "next/image";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { cn } from "@/lib/cn";

export function Metrics({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3">
      {children}
    </div>
  );
}

export function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-paper px-5 py-6">
      <p className="font-sans text-[2rem] tracking-tight text-accent sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-ink-muted">{label}</p>
    </div>
  );
}

export function Figure({
  src,
  alt,
  caption,
  wide = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  wide?: boolean;
}) {
  return (
    <figure className={cn("my-10", wide && "lg:-mx-16")}>
      <div className="overflow-hidden bg-paper-2">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1200}
          className="block h-auto w-full"
          style={{ width: "100%", height: "auto", aspectRatio: "auto" }}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-ink-soft">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Callout({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="my-8 border border-hairline bg-paper-2/60 px-5 py-5">
      {eyebrow ? (
        <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
          {eyebrow}
        </p>
      ) : null}
      <div className="mt-2 text-[16px] leading-7 text-ink sm:text-[18px] sm:leading-8">
        {children}
      </div>
    </aside>
  );
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <ol className="my-8 space-y-8">{children}</ol>;
}

export function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="grid gap-3 sm:grid-cols-[4rem_1fr]">
      <span className="font-sans text-3xl text-accent">{number}</span>
      <div>
        <h3 className="text-xl leading-tight">{title}</h3>
        <div className="mt-2 space-y-3 text-[16px] leading-7 text-ink sm:text-[18px] sm:leading-8">
          {children}
        </div>
      </div>
    </li>
  );
}

export const mdxComponents: NonNullable<MDXRemoteProps["components"]> = {
  Metrics,
  Metric,
  Figure,
  Callout,
  Steps,
  Step,
  h2: ({ children }) => (
    <h2 className="mt-12 font-sans text-2xl font-medium tracking-tight text-ink sm:mt-16 sm:text-3xl md:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 text-[1.35rem] font-medium leading-snug text-ink">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-[16px] leading-7 text-ink sm:text-[18px] sm:leading-8">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-7 text-ink sm:text-[18px] sm:leading-8">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-[16px] leading-7 text-ink sm:text-[18px] sm:leading-8">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => (
    <strong className="font-medium text-ink">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="underline decoration-hairline underline-offset-4 hover:decoration-ink"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  ),
};
