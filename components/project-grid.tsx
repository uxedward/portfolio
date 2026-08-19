import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section>
      {featured ? <ProjectCard project={featured} featured /> : null}
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
