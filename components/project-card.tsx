import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { isExternal, projectHref, type Project } from "@/lib/projects";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const href = projectHref(project);
  const external = isExternal(project);
  const className = cn(
    "group relative block overflow-hidden rounded-[var(--radius)] bg-paper-2 transition-transform duration-700 ease-[var(--ease-out)]",
    featured
      ? "min-h-[420px] md:min-h-[560px]"
      : "min-h-[340px] md:min-h-[420px]",
  );

  const content = (
    <>
      <Image
        src={project.cover}
        alt={project.title}
        fill
        sizes={
          featured
            ? "(min-width: 768px) 100vw, 100vw"
            : "(min-width: 768px) 50vw, 100vw"
        }
        priority={featured}
        className="object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.045]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 ease-[var(--ease-out)] group-hover:opacity-100">
        <span className="rounded-[var(--radius-sm)] bg-paper px-5 py-2.5 text-sm text-ink">
          View details ↗
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 text-[11px] uppercase tracking-[0.16em] text-paper/85 sm:p-5">
        <span>{project.client}</span>
        <span>{project.year}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 text-paper sm:p-5">
        <h3 className="max-w-xl font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-[0.95] tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm text-paper/85">{project.outcome}</p>
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
