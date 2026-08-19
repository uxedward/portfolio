import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { isExternal, projectHref, type Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const href = projectHref(project);
  const external = isExternal(project);
  const cta = (
    <Button href={href} external={external} className="mt-6">
      View
    </Button>
  );

  return (
    <article className="flex flex-col gap-6 border-t border-hairline pt-10">
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
          <span className="text-[13px] text-ink-soft">{project.year}</span>
        </div>
        <p className="mt-4 text-[15px] text-ink-soft">{project.client}</p>
        <h2 className="mt-2 font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.95] tracking-[-0.03em]">
          {external ? (
            <a href={href} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          ) : (
            <Link href={href}>{project.title}</Link>
          )}
        </h2>
        <p className="mt-5 text-[17px] leading-7 text-ink-soft">{project.lede}</p>
        {project.bullets.length ? (
          <ul className="mt-5 space-y-1.5 text-[15px] leading-6">
            {project.bullets.map((bullet) => (
              <li key={bullet}>
                <strong className="font-medium text-ink">{bullet}</strong>
              </li>
            ))}
          </ul>
        ) : null}
        {project.note ? (
          <p className="mt-3 text-sm text-ink-soft">{project.note}</p>
        ) : null}
        {cta}
      </div>
      <div className="overflow-hidden rounded-[var(--radius)] bg-paper-2">
        {external ? (
          <a href={href} target="_blank" rel="noreferrer">
            <Cover project={project} />
          </a>
        ) : (
          <Link href={href}>
            <Cover project={project} />
          </Link>
        )}
      </div>
    </article>
  );
}

function Cover({ project }: { project: Project }) {
  return (
    <Image
      src={project.cover}
      alt={project.title}
      width={1600}
      height={1000}
      className="h-auto w-full"
      sizes="(min-width: 1024px) 70vw, 100vw"
    />
  );
}
