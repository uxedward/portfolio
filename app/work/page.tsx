import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { StudioBanner } from "@/components/studio-banner";
import { tiketStudio } from "@/lib/nav";
import { workProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product design case studies from tiket.com — Bus & Shuttle, Train, and Car Rentals.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <StudioBanner studio={tiketStudio} />
      <ProjectGrid projects={workProjects} />
    </div>
  );
}
