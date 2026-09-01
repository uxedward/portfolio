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

  return (
    <header className="bg-ink text-paper">
      <div className="mx-auto max-w-[1180px] px-6 pt-8 sm:px-8 sm:pt-10 lg:pt-14">
        <p className="text-sm text-paper/65">{project.client}</p>
        <h1 className="mt-3 max-w-4xl font-sans text-[clamp(1.65rem,7.2vw,5.4rem)] leading-[1.08] tracking-[-0.03em]">
          {project.title}
        </h1>
      </div>
      <div className="mx-auto mt-8 max-w-[1180px] overflow-hidden bg-paper-2 sm:mt-10 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="relative sm:overflow-hidden sm:rounded-[var(--radius)]">
          <Image
            src={hero}
            alt={project.title}
            width={1600}
            height={720}
            priority
            unoptimized={isGif}
            sizes="100vw"
            className="block h-auto w-full"
            style={caseImageStyle}
          />
        </div>
      </div>
    </header>
  );
}

export function CaseStudyShell({
  project,
  domains,
  toc,
  children,
  next,
}: {
  project: Project;
  domains: string[];
  toc: TocItem[];
  children: React.ReactNode;
  next?: { href: string; title: string };
}) {
  return (
    <>
      <div className="border-b border-hairline bg-paper">
        <div className="mx-auto max-w-[1180px] px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-[15px] leading-7 text-ink sm:text-[17px]">
            This project will demonstrate my expertise in these three crucial
            domains:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {domains.map((domain) => (
              <li key={domain}>
                <Chip>{domain}</Chip>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-5 border-t border-hairline pt-6 text-sm sm:grid-cols-3 sm:gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                Project
              </p>
              <p className="mt-1">{project.type}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                Duration
              </p>
              <p className="mt-1">{project.duration}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                Link
              </p>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block break-all underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:decoration-ink"
                >
                  {project.liveUrl.replace("https://", "")}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paper">
        <div className="mx-auto grid max-w-[1180px] lg:grid-cols-[200px_minmax(0,760px)] lg:gap-16">
          <aside className="sticky top-16 z-30 border-b border-hairline bg-paper/90 px-6 backdrop-blur-md lg:top-6 lg:self-start lg:border-b-0 lg:bg-transparent lg:px-8 lg:py-12 lg:backdrop-blur-none">
            <CaseStudyToc items={toc} />
          </aside>
          <div className="min-w-0 overflow-x-hidden px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
            {children}
          </div>
        </div>
      </div>

      {next ? (
        <div className="border-t border-hairline bg-paper">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-8 sm:gap-6 sm:px-8">
            <p className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Next project
            </p>
            <Button
              href={next.href}
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
}: {
  id: string;
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="case-section mb-14 sm:mb-24">
      <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink-muted sm:text-[13px]">
        {label}
      </p>
      <h2 className="mt-2 font-sans text-[clamp(1.35rem,5.6vw,2.75rem)] font-medium leading-[1.2] tracking-[-0.03em] text-ink">
        {heading}
      </h2>
      <div className="mt-5 space-y-4 text-[16px] leading-7 text-ink sm:mt-6 sm:space-y-5 sm:text-[18px] sm:leading-8">
        {children}
      </div>
    </section>
  );
}

export function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-4 text-lg font-medium leading-snug text-ink sm:text-[1.35rem]">
      {children}
    </h3>
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
    <div className="pt-6">
      <p className="text-[13px] font-medium text-ink-muted">{number}</p>
      <h3 className="mt-1 text-lg font-medium leading-snug text-ink sm:text-[1.35rem]">
        {children}
      </h3>
    </div>
  );
}

export function Figure({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "-mx-6 my-2 overflow-hidden bg-paper-2 sm:mx-0 sm:rounded-[var(--radius)]",
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
        className="block h-auto w-full"
        style={caseImageStyle}
      />
    </figure>
  );
}

export function Metrics({
  items,
}: {
  items: { value: string; label: string }[];
}) {
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
    <div className="rounded-[var(--radius)] border border-hairline bg-paper-2 px-4 py-4 sm:px-5 sm:py-5">
      <p className="text-[13px] font-medium text-ink-muted">{number}</p>
      <h3 className="mt-2 text-base font-medium text-ink sm:text-lg">{title}</h3>
      {children ? (
        <div className="mt-2 space-y-2 text-[15px] leading-7 text-ink sm:text-[17px] sm:leading-8">
          {children}
        </div>
      ) : null}
    </div>
  );
}
