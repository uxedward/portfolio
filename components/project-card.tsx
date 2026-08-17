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
    "group relative block overflow-hidden bg-paper-2",
    featured ? "min-h-[420px] md:min-h-[560px]" : "min-h-[340px] md:min-h-[420px]",
  );

  const content = (
    <>
      <Image
        src={project.cover}
        alt={project.title}
        fill
        sizes={featured ? "(min-width: 768px) 100vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        priority={featured}
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="rounded-full bg-paper px-4 py-2 text-sm text-ink">
          View details ↗
        </span>
      </div>
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 text-[11px] uppercase tracking-[0.16em] text-white/85 sm:p-5">
        <span>{project.tags.join(" · ")}</span>
        <span>{project.year}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <p className="text-[12px] text-white/75">{project.client}</p>
        <h3 className="mt-1 max-w-xl text-xl leading-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-white/85">{project.outcome}</p>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
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
