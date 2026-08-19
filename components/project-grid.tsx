"use client";

import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";
import { duration, easeOut } from "@/lib/motion";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section>
      <AnimatePresence mode="wait">
        <motion.div
          key={featured?.slug ?? "empty"}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: duration.base, ease: easeOut }}
        >
          {featured ? <ProjectCard project={featured} featured /> : null}
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {rest.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: duration.base,
                  delay: 0.04 * index,
                  ease: easeOut,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
