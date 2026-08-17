import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { getCaseStudySource } from "@/lib/mdx";
import {
  caseStudies,
  getCaseStudy,
  getNextCaseStudy,
} from "@/lib/projects";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
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
  if (!project) notFound();

  const source = getCaseStudySource(project.slug);
  const nextProject = getNextCaseStudy(project.slug);

  return (
    <article>
      <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-paper-2">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[1440px] px-5 pb-10 text-white sm:px-8">
          <p className="text-sm text-white/80">{project.client}</p>
          <h1 className="mt-3 max-w-4xl font-serif text-[clamp(2.2rem,5vw,4.6rem)] leading-[0.95] tracking-[-0.03em]">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
        <div className="grid gap-6 border-b border-hairline pb-8 text-sm sm:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Project
            </p>
            <p className="mt-1">{project.type}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Duration
            </p>
            <p className="mt-1">{project.duration}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Live product
            </p>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block underline decoration-hairline underline-offset-4 hover:decoration-ink"
              >
                View ↗
              </a>
            ) : (
              <p className="mt-1">—</p>
            )}
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border-x border-b border-hairline bg-hairline sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="bg-paper px-5 py-6">
              <p className="font-serif text-4xl tracking-tight text-accent">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-5 text-ink-soft">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <MDXRemote source={source} components={mdxComponents} />
        </div>
      </div>

      {nextProject ? (
        <div className="border-t border-hairline">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-8 sm:px-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Next project
            </p>
            <Link
              href={`/work/${nextProject.slug}`}
              className="text-lg transition-opacity hover:opacity-70"
            >
              {nextProject.title} ↗
            </Link>
          </div>
        </div>
      ) : null}
    </article>
  );
}
