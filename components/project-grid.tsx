import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 md:gap-3">
      {projects.map((project, index) => (
        <div
          key={project.slug}
          className="card-rise"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <ProjectCard project={project} priority={index === 0} />
        </div>
      ))}
    </section>
  );
}
