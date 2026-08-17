import { HomeIntro } from "@/components/home-intro";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <HomeIntro />
      <ProjectGrid projects={projects} />
    </>
  );
}
