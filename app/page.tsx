import { ProjectGrid } from "@/components/project-grid";
import { StudioBanner } from "@/components/studio-banner";
import { getStudio } from "@/lib/nav";
import { workProjects } from "@/lib/projects";

const studio = getStudio("tiket");

export default function Home() {
  return (
    <div className="page-enter px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <StudioBanner studio={studio} />
      <p className="mb-8 text-sm text-ink-soft">Case Studies</p>
      <ProjectGrid projects={workProjects} />
    </div>
  );
}
