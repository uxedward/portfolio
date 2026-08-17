"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/cn";
import type { Category, Project } from "@/lib/projects";

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
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            aria-pressed={filter === item.id}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-[13px] transition-colors",
              filter === item.id
                ? "border-ink bg-ink text-paper"
                : "border-hairline text-ink-soft hover:border-ink hover:text-ink",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {featured ? <ProjectCard project={featured} featured /> : null}
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
