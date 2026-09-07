import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion/fade-in";
import { Reveal } from "@/components/motion/reveal";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import {
  CommandBlock,
  GuideFigure,
  GuideHeader,
  PlanList,
} from "@/components/resource-card";
import { getResource, resources } from "@/lib/resources";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};

  return {
    title: resource.pageTitle,
    description: resource.summary,
    alternates: { canonical: `/resources/${resource.slug}` },
  };
}

export default async function ResourceGuidePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <article className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
      <ScrollProgress />
      <FadeIn>
        <p className="mb-8">
          <Link
            href="/resources"
            className="text-[14px] text-ink-soft transition-colors duration-300 hover:text-ink"
          >
            ← Resources
          </Link>
        </p>
      </FadeIn>

      <GuideHeader title={resource.pageTitle} />

      <FadeIn delay={0.18}>
        <p className="mt-6 max-w-2xl text-[18px] leading-8 text-ink">
          {resource.summary}
        </p>
      </FadeIn>

      <Reveal>
        <section className="mt-14 max-w-2xl">
          <h2 className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            Useful Links
          </h2>
          <ul className="mt-4 space-y-3">
            {resource.links.map((link) => (
              <li key={link.href}>
                <p className="text-[14px] text-ink-soft">{link.label}</p>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-[15px] text-ink underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:decoration-ink"
                >
                  {link.href}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <section className="mt-14 max-w-2xl min-w-0">
        <Reveal>
          <h2 className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            Step by Step Setup
          </h2>
        </Reveal>
        <ol className="mt-6 min-w-0 space-y-8">
          {resource.steps.map((step, index) => (
            <li key={step.title} className="min-w-0 border-t border-hairline pt-6">
              <Reveal>
                <p className="text-[13px] text-ink-soft">Step {index + 1}</p>
                <h3 className="mt-1 text-[20px] font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[16px] leading-7 text-ink">{step.body}</p>
                {step.plans ? <PlanList plans={step.plans} /> : null}
                {step.extra ? (
                  <p className="mt-2 text-[16px] leading-7 text-ink">
                    {step.extra.includes("mobbin.com/edward") ? (
                      <>
                        Get 20% off:{" "}
                        <a
                          href="https://mobbin.com/edward"
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-hairline underline-offset-4 hover:decoration-ink"
                        >
                          mobbin.com/edward
                        </a>
                      </>
                    ) : (
                      step.extra
                    )}
                  </p>
                ) : null}
                {step.link ? (
                  <p className="mt-2 text-[16px] leading-7 text-ink">
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all underline decoration-hairline underline-offset-4 hover:decoration-ink"
                    >
                      {step.link.label}
                    </a>
                  </p>
                ) : null}
                {step.command ? <CommandBlock command={step.command} /> : null}
              </Reveal>
              {step.images?.map((image) => (
                <GuideFigure
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </li>
          ))}
        </ol>
      </section>

      <Reveal>
        <p className="mt-16 text-[14px] text-ink-soft">
          Created by {site.handle}
        </p>
      </Reveal>
    </article>
  );
}
