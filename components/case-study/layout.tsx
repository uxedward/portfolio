import Image from "next/image";
import { CaseStudyToc, type TocItem } from "@/components/case-study/toc";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/projects";

export function CaseStudyHero({
  project,
}: {
  project: Project;
}) {
  const hero = project.hero ?? project.cover;
  const isGif = hero.endsWith(".gif");

  return (
    <header className="bg-paper text-ink">
      <div className="mx-auto max-w-[1180px] px-5 pb-16 pt-10 sm:px-8 lg:pb-20 lg:pt-14">
        <p className="text-sm text-ink-soft">{project.client}</p>
        <h1 className="mt-3 max-w-4xl font-serif text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.03em]">
          {project.title}
        </h1>
        <div className="relative mt-10 overflow-hidden rounded-[var(--radius)] bg-paper-2">
          <Image
            src={hero}
            alt={project.title}
            width={1600}
            height={720}
            priority
            unoptimized={isGif}
            className="h-auto w-full"
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
        <div className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8">
          <p className="text-sm text-ink-soft">
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
          <div className="mt-8 grid gap-6 border-t border-hairline pt-6 text-sm sm:grid-cols-3">
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
                  className="mt-1 inline-block underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:decoration-ink"
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
          <aside className="sticky top-14 z-30 border-b border-hairline bg-paper/90 px-5 backdrop-blur-md lg:top-6 lg:self-start lg:border-b-0 lg:bg-transparent lg:px-8 lg:py-12 lg:backdrop-blur-none">
            <CaseStudyToc items={toc} />
          </aside>
          <div className="min-w-0 px-5 py-10 sm:px-8 lg:py-12">{children}</div>
        </div>
      </div>

      {next ? (
        <div className="border-t border-hairline bg-paper">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-8 sm:px-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Next project
            </p>
            <Button href={next.href} variant="ghost" className="px-0 text-lg">
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
    <section id={id} className="case-section mb-24">
      <p className="text-sm text-ink-soft">{label}</p>
      <h2 className="mt-2 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em]">
        {heading}
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-7 text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export function Subhead({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-4 text-xl leading-snug text-ink">{children}</h3>;
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
      <p className="text-sm text-ink-soft">{number}</p>
      <h3 className="mt-1 text-xl leading-snug text-ink">{children}</h3>
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
        "my-2 overflow-hidden rounded-[var(--radius)] bg-paper-2",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        unoptimized={src.endsWith(".gif")}
        className="h-auto w-full"
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
        <div key={item.label} className="bg-paper px-5 py-6">
          <p className="font-serif text-4xl tracking-tight text-accent">
            {item.value}
          </p>
          <p className="mt-2 text-sm leading-5 text-ink-soft">{item.label}</p>
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
    <div className="rounded-[var(--radius)] border border-hairline bg-paper-2 px-5 py-5">
      <p className="text-sm text-ink-soft">{number}</p>
      <h3 className="mt-2 text-lg text-ink">{title}</h3>
      {children ? (
        <div className="mt-2 space-y-2 text-[16px] leading-7">{children}</div>
      ) : null}
    </div>
  );
}
