import type { Metadata } from "next";
import Image from "next/image";
import { Chip } from "@/components/ui/chip";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.fullName} — product designer at tiket.com and design educator.`,
  alternates: { canonical: "/about" },
};

const experience = [
  {
    role: "Product Designer",
    org: "tiket.com",
    years: "2021 — Present",
    notes:
      "Non-flight transport: Bus & Shuttle, Train, Car Rentals, Airport Transfer, and Ferry. Also led Help Center, halo tiket chatbot, VoIP, and tiket Ads.",
  },
  {
    role: "Brand & Communications / Design Operations",
    org: "tiket.com",
    years: "2021 — 2023",
    notes:
      "Managed a team of designers, illustrators, and a writer. Revamped @tiketdesign branding.",
  },
];

const skills = [
  "Product thinking",
  "User behaviour analysis",
  "Usability testing",
  "Stakeholder workshops",
  "A/B experiments",
  "Hi-fi prototyping",
  "Design systems",
  "Figma",
];

export default function AboutPage() {
  return (
    <div className="page-enter px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm text-ink-soft">A bit about who I am</p>
          <h1 className="mt-5 max-w-3xl font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.03em]">
            I design digital products — and I teach the craft in public.
          </h1>
          <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-7 text-ink-soft">
            <p>
              I&apos;m Edward, a product designer at tiket.com, Southeast
              Asia&apos;s travel platform serving 52M+ users. My work sits at
              the intersection of user interface design, behaviour analysis, and
              stakeholder alignment.
            </p>
            <p>
              Since 2021 I&apos;ve also been advocating Figma and product design
              across Instagram, TikTok, and Threads. I care about making
              complex booking systems feel obvious — and about helping other
              designers learn how to work with data, workshops, and experiments.
            </p>
            <p>
              If that aligns with you,{" "}
              <a
                href={site.chat.href}
                target="_blank"
                rel="noreferrer"
                className="text-ink underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:decoration-ink"
              >
                say hello
              </a>
              .
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-[var(--radius)] bg-paper-2">
          <Image
            src="/images/about/edward-grid.jpg"
            alt="Portraits of Edward Sudjono"
            width={1600}
            height={2000}
            className="h-auto w-full"
          />
        </div>
      </div>

      <section className="mt-20 grid gap-10 border-t border-hairline pt-12 lg:grid-cols-[0.4fr_1fr]">
        <h2 className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.role} className="grid gap-2 sm:grid-cols-[12rem_1fr]">
              <p className="text-sm text-ink-soft">{item.years}</p>
              <div>
                <p className="text-lg">
                  {item.role}, {item.org}
                </p>
                <p className="mt-2 max-w-2xl text-[16px] leading-7 text-ink-soft">
                  {item.notes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 border-t border-hairline pt-12 lg:grid-cols-[0.4fr_1fr]">
        <h2 className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          Selected work beyond case studies
        </h2>
        <ul className="space-y-3 text-[16px] leading-7 text-ink-soft">
          <li>halo tiket — Help Center, chatbot, and VoIP experience</li>
          <li>tiket Ads — end-to-end advertising product experience</li>
          <li>Airport Transfer (International) and Ferry launches</li>
          <li>Car Rentals vendor dashboard</li>
          <li>Train Search Result Page redesign</li>
        </ul>
      </section>

      <section className="mt-16 grid gap-10 border-t border-hairline pt-12 lg:grid-cols-[0.4fr_1fr]">
        <h2 className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          Practice
        </h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill}>
              <Chip>{skill}</Chip>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 grid gap-10 border-t border-hairline pt-12 lg:grid-cols-[0.4fr_1fr]">
        <h2 className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          Elsewhere
        </h2>
        <ul className="space-y-3">
          {site.socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-4 border-b border-hairline py-3"
              >
                <span>{social.name}</span>
                <span className="text-sm text-ink-soft group-hover:text-ink">
                  {social.stat} {social.label} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
