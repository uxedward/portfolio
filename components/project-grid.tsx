"use client";

import { motion, useReducedMotion } from "motion/react";
import { ProjectCard } from "@/components/project-card";
import { cardGrid, cardItem } from "@/lib/motion";
import type { Project } from "@/lib/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="grid gap-3 md:grid-cols-2"
      variants={cardGrid}
      initial={reduceMotion ? false : "hidden"}
      animate="show"
    >
      {projects.map((project, index) => (
        <motion.div key={project.slug} variants={cardItem}>
          <ProjectCard project={project} priority={index === 0} />
        </motion.div>
      ))}
    </motion.section>
  );
}
