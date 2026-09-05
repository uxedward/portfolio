import { ProjectCard } from "@/components/project-card";
import { RevealList } from "@/components/motion/reveal";
import type { Project } from "@/lib/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <RevealList className="grid gap-4 md:grid-cols-2 md:gap-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={index === 0}
        />
      ))}
    </RevealList>
  );
}
