import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { StudioBanner } from "@/components/studio-banner";
import { getStudio } from "@/lib/nav";
import { workProjects } from "@/lib/projects";

const studio = getStudio("work");

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product design case studies from tiket.com — Bus & Shuttle, Train, and Car Rentals.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <StudioBanner studio={studio} />
      <ProjectGrid projects={workProjects} />
    </div>
  );
}
