"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import type { Category, Project } from "@/lib/projects";
import { duration, easeOut } from "@/lib/motion";

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "product", label: "Product" },
  { id: "content", label: "Content" },
];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"all" | Category>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects],
  );

  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-20 sm:px-8">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {filters.map((item) => {
          const selected = filter === item.id;
          return (
            <Button
              key={item.id}
              variant={selected ? "primary" : "outline"}
              size="sm"
              pressed={selected}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </Button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
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
