import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="grid gap-3 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={index === 0}
        />
      ))}
    </section>
  );
}
