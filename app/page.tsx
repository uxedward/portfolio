import { HomeIntro } from "@/components/home-intro";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="page-enter">
      <HomeIntro />
      <ProjectGrid projects={projects} />
    </div>
  );
}
