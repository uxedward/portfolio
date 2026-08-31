import Link from "next/link";
import { ProjectGrid } from "@/components/project-grid";
import { RiseIn } from "@/components/rise-in";
import { contentProjects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <RiseIn>
        <header className="max-w-3xl">
          <h1 className="font-sans text-[clamp(2.2rem,5.5vw,4.6rem)] leading-[0.95] tracking-[-0.03em]">
            Hi, I&apos;m Edward.
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-8 text-ink">
            Product Designer by day,{" "}
            <em className="italic">content creator</em> by night. Currently
            building products @{" "}
            <a
              href="https://www.tiket.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:decoration-ink"
            >
              tiket.com
            </a>
            .
          </p>
          <p className="mt-6">
            <Link
              href="/work"
              className="text-[15px] text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              See product work →
            </Link>
          </p>
        </header>
      </RiseIn>

      <section className="mt-16" aria-label="Teaching in public">
        <p className="mb-6 text-[15px] text-ink-soft">
          Teaching product design in public
        </p>
        <ProjectGrid projects={contentProjects} />
      </section>
    </div>
  );
}
