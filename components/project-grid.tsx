"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";
import { duration, easeOut } from "@/lib/motion";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="flex flex-col gap-10">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.base,
            delay: 0.05 * index,
            ease: easeOut,
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </section>
  );
}
