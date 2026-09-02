import Image from "next/image";
import { CaseStudyToc, type TocItem } from "@/components/case-study/toc";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/projects";

const caseImageStyle = {
  width: "100%",
  height: "auto",
  aspectRatio: "auto",
} as const;

export function CaseStudyHero({
  project,
}: {
  project: Project;
}) {
  const hero = project.hero ?? project.cover;
  const isGif = hero.endsWith(".gif");
  const domains = project.domains ?? [];

  return (
    <header className="bg-ink text-paper">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 pb-8 pt-10 lg:gap-8 lg:px-10 lg:pb-8 lg:pt-[100px]">
        <div className="flex flex-col gap-4 lg:gap-6">
          <div>
            <p className="text-[10px] font-medium tracking-[0.12em] text-case-link lg:text-xl lg:tracking-[0.06em]">
              {project.client}
            </p>
            <h1 className="mt-1 font-sans text-[1.25rem] font-medium leading-[1.4] tracking-[-0.03em] lg:text-[2.5rem] lg:leading-[1.5]">
              {project.title}
            </h1>
          </div>
          <div className="overflow-hidden rounded-3xl bg-paper-2 lg:rounded-[32px]">
            <Image
              src={hero}
              alt={project.title}
              width={1600}
              height={720}
              priority
              unoptimized={isGif}
              sizes="100vw"
              className="block h-auto w-full max-w-full"
              style={caseImageStyle}
            />
          </div>
        </div>

        {domains.length > 0 ? (
          <div className="flex flex-col gap-2 lg:gap-3">
            <p className="text-[15px] leading-6 text-paper lg:text-base">
              This project will demonstrate my expertise in these three crucial
              domains:
            </p>
            <ul className="flex flex-wrap gap-2 lg:gap-4">
              {domains.map((domain) => (
                <li key={domain}>
                  <Chip tone="inverse">{domain}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <dl className="grid gap-4 text-base lg:grid-cols-3 lg:gap-3">
          <div className="flex flex-col gap-2">
            <dt className="font-medium">Project</dt>
            <dd className="text-paper/85">{project.type}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="font-medium">Duration</dt>
            <dd className="text-paper/85">{project.duration}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="font-medium text-case-link">Link</dt>
            <dd>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block break-all font-medium text-case-link underline decoration-case-link/40 underline-offset-4 transition-colors duration-300 hover:decoration-case-link"
                >
                  {project.liveUrl}
                </a>
              ) : null}
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

export function CaseStudyShell({
  toc,
  children,
  next,
}: {
  project?: Project;
  domains?: string[];
  toc: TocItem[];
  children: React.ReactNode;
  next?: { href: string; title: string; external?: boolean };
}) {
  return (
    <>
      <div className="bg-paper">
        <div className="mx-auto flex w-full min-w-0 max-w-[1180px] flex-col lg:grid lg:grid-cols-[225px_minmax(0,1fr)] lg:items-stretch lg:gap-5 lg:px-10 lg:py-10">
          <aside className="sticky top-16 z-30 min-w-0 max-w-full overflow-x-auto border-b border-hairline bg-paper px-5 sm:px-8 lg:static lg:overflow-visible lg:border-b-0 lg:bg-transparent lg:px-0 lg:py-0">
            <div className="lg:sticky lg:top-8">
              <CaseStudyToc items={toc} />
            </div>
          </aside>
          <div className="flex min-w-0 max-w-full flex-col gap-11 overflow-x-clip px-5 py-8 sm:px-8 sm:py-10 lg:gap-[51px] lg:px-0 lg:py-0">
            {children}
          </div>
        </div>
      </div>

      {next ? (
        <div className="border-t border-hairline bg-paper">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-8 sm:gap-6 sm:px-8 lg:px-10">
            <p className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Next project
            </p>
            <Button
              href={next.href}
              external={next.external}
              variant="ghost"
              className="px-0 text-right text-[15px] leading-snug sm:text-lg"
            >
              {next.title} ↗
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function Section({
  id,
  label,
  heading,
  children,
  card = false,
}: {
  id: string;
  label: string;
  heading: string;
  children: React.ReactNode;
  card?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "case-section max-w-full",
        card && "rounded-[12px] bg-paper-2 p-5",
      )}
    >
      <p className="text-[12px] font-medium tracking-[0.1em] text-ink-soft">
        {label}
      </p>
      <h2 className="mt-1 font-sans text-xl font-medium leading-[1.4] tracking-[-0.03em] text-ink sm:text-2xl">
        {heading}
      </h2>
      <div
        className={cn(
          "mt-4 max-w-full space-y-4 overflow-x-hidden text-[15px] leading-7 break-words text-ink sm:text-base sm:leading-[1.5]",
          card && "space-y-3",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-2 text-lg font-medium leading-snug text-ink sm:text-xl">
      {children}
    </h3>
  );
}

export function NumberChip({
  children,
  solid = false,
}: {
  children: React.ReactNode;
  solid?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex min-w-9 items-center justify-center rounded-full border px-3.5 py-2 text-[14px] font-medium lg:px-6 lg:py-2.5 lg:text-base",
        solid
          ? "border-ink bg-ink text-paper"
          : "border-ink bg-transparent text-ink",
      )}
    >
      {children}
    </span>
  );
}

export function StepHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3 pt-2">
      <NumberChip solid>{number}</NumberChip>
      <h3 className="text-lg font-medium leading-snug text-ink sm:text-xl">
        {children}
      </h3>
    </div>
  );
}

export function SplitPanel({
  title,
  children,
  figure,
}: {
  title: string;
  children: React.ReactNode;
  figure: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[12px] bg-paper-2 p-5 lg:flex-row lg:items-start lg:gap-5">
      <div className="min-w-0 space-y-3 lg:flex-1">
        <h3 className="text-lg font-medium leading-snug text-ink sm:text-xl">
          {title}
        </h3>
        <div className="space-y-3 text-[15px] leading-7 text-ink sm:text-base sm:leading-[1.5]">
          {children}
        </div>
      </div>
      <div className="min-w-0 lg:flex-1">{figure}</div>
    </div>
  );
}

export function ProblemSplit({
  id,
  label,
  heading,
  children,
  figure,
}: {
  id: string;
  label: string;
  heading: string;
  children: React.ReactNode;
  figure: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="case-section flex max-w-full flex-col gap-4 rounded-[12px] bg-paper-2 p-5 lg:flex-row lg:items-start lg:gap-5"
    >
      <div className="min-w-0 space-y-3 lg:flex-1">
        <p className="text-[12px] font-medium tracking-[0.1em] text-ink-soft">
          {label}
        </p>
        <h2 className="font-sans text-xl font-medium leading-[1.4] tracking-[-0.03em] text-ink sm:text-2xl">
          {heading}
        </h2>
        <div className="space-y-3 text-[15px] leading-7 break-words text-ink sm:text-base sm:leading-[1.5]">
          {children}
        </div>
      </div>
      <div className="min-w-0 lg:flex-1">{figure}</div>
    </section>
  );
}

export function HmwRow({
  number,
  issue,
  hmw,
}: {
  number: string;
  issue: React.ReactNode;
  hmw: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      <NumberChip>{number}</NumberChip>
      <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-3 lg:gap-6">
        <div className="min-w-0 text-[14px] leading-6 text-ink lg:text-base lg:leading-[1.5]">
          {issue}
        </div>
        <p className="pt-0.5 text-ink" aria-hidden>
          →
        </p>
        <div className="min-w-0 text-[14px] leading-6 text-ink lg:text-base lg:leading-[1.5]">
          {hmw}
        </div>
      </div>
    </div>
  );
}

export function Figure({
  src,
  alt,
  className,
  bleed = true,
}: {
  src: string;
  alt: string;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <figure
      className={cn(
        "relative max-w-none overflow-hidden bg-paper-2",
        bleed
          ? "my-2 w-[calc(100%+2.5rem)] -mx-5 sm:mx-0 sm:w-full sm:rounded-[var(--radius)]"
          : "w-full rounded-[var(--radius)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        sizes="100vw"
        unoptimized={src.endsWith(".gif")}
        className="block h-auto w-full max-w-full"
        style={caseImageStyle}
      />
    </figure>
  );
}

export function Metrics({
  items,
  plain = false,
}: {
  items: { value: string; label: string }[];
  plain?: boolean;
}) {
  if (plain) {
    return (
      <div
        className={cn(
          "grid gap-6",
          items.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3",
        )}
      >
        {items.map((item) => (
          <div key={item.label} className="min-w-0">
            <p className="font-sans text-xl font-medium tracking-tight text-accent lg:text-2xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm leading-6 text-ink-muted lg:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden rounded-[var(--radius)] border border-hairline bg-hairline",
        items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3",
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="bg-paper px-4 py-5 sm:px-5 sm:py-6">
          <p className="font-sans text-[2rem] tracking-tight text-accent sm:text-4xl">
            {item.value}
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-muted">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Issue({
  number,
  title,
  children,
}: {
  number: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3">
      <NumberChip>{number}</NumberChip>
      <h3 className="text-base font-medium text-ink sm:text-lg">{title}</h3>
      {children ? (
        <div className="space-y-2 text-[15px] leading-7 text-ink sm:text-base sm:leading-[1.5]">
          {children}
        </div>
      ) : null}
    </div>
  );
}
