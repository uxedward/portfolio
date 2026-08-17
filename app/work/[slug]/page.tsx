import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BusSearchBody,
  busSearchToc,
} from "@/components/case-studies/bus-search";
import {
  CarRentalsBody,
  carRentalsToc,
} from "@/components/case-studies/car-rentals";
import {
  TrainBookingBody,
  trainBookingToc,
} from "@/components/case-studies/train-booking";
import {
  CaseStudyHero,
  CaseStudyShell,
} from "@/components/case-study/layout";
import type { TocItem } from "@/components/case-study/toc";
import {
  caseStudies,
  getCaseStudy,
  getNextCaseStudy,
} from "@/lib/projects";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

const bodies: Record<
  string,
  { toc: TocItem[]; Body: () => React.ReactNode }
> = {
  "bus-search": { toc: busSearchToc, Body: BusSearchBody },
  "train-booking": { toc: trainBookingToc, Body: TrainBookingBody },
  "car-rentals": { toc: carRentalsToc, Body: CarRentalsBody },
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  const content = bodies[slug];
  if (!project || !content) notFound();

  const nextProject = getNextCaseStudy(project.slug);
  const { toc, Body } = content;

  return (
    <article>
      <CaseStudyHero project={project} />
      <CaseStudyShell
        project={project}
        domains={project.domains ?? []}
        toc={toc}
        next={
          nextProject
            ? { href: `/work/${nextProject.slug}`, title: nextProject.title }
            : undefined
        }
      >
        <Body />
      </CaseStudyShell>
    </article>
  );
}
