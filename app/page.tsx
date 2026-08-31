import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconExternal } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description:
    "Product designer at tiket.com. I help 200,000+ designers build better products.",
  alternates: { canonical: "/" },
};

const now = [
  {
    title: "Building products @ tiket.com",
    href: "/work",
    external: false,
    body: "As a Product Designer, I build products at tiket.com, Indonesia’s leading online travel company.",
  },
  {
    title: "Teaching design in public",
    href: "https://www.instagram.com/ux.edward/",
    external: true,
    body: "As a Creator, I break down how real product teams think, make decisions, and test ideas and advocate AI and modern design tools so designers can ship work that matters.",
  },
];

const highlightedSocials = site.socials.filter((social) =>
  ["Instagram", "TikTok", "Threads"].includes(social.name),
);

export default function Home() {
  return (
    <div className="px-5 py-10 sm:px-8 lg:max-w-[720px] lg:px-10 lg:py-14">
      <div className="relative size-[320px] max-w-full overflow-hidden rounded-[24px]">
        <Image
          src="/images/about/edward-home.jpg"
          alt="Edward Sudjono"
          fill
          priority
          sizes="320px"
          className="object-cover object-[center_35%]"
        />
      </div>

      <h1 className="mt-10 font-sans text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95] tracking-[-0.03em]">
        Hi! I&apos;m Edward.
      </h1>
      <p className="mt-5 max-w-xl text-[18px] leading-8 text-ink">
        I help 200,000+ designers{" "}
        <em className="italic">build better products.</em>
      </p>

      <div className="mt-12 space-y-8">
        {now.map((item) => {
          const label = (
            <>
              <span className="text-[18px] font-medium tracking-tight">
                {item.title}
              </span>
              <IconExternal />
            </>
          );

          return (
            <div key={item.title} className="max-w-xl">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-ink transition-opacity duration-300 hover:opacity-70"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-ink transition-opacity duration-300 hover:opacity-70"
                >
                  {label}
                </Link>
              )}
              <p className="mt-2 text-[16px] leading-7 text-ink-muted">
                {item.body}
              </p>
            </div>
          );
        })}
      </div>

      <ul className="mt-14 flex flex-wrap gap-10 border-t border-hairline pt-8">
        {highlightedSocials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="block transition-opacity duration-300 hover:opacity-70"
            >
              <p className="text-[13px] text-ink-soft underline decoration-hairline underline-offset-4">
                {social.name}
              </p>
              <p className="mt-1 text-[22px] font-medium tracking-tight">
                {social.stat}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <section className="mt-16 max-w-xl border-t border-hairline pt-10">
        <h2 className="font-sans text-[clamp(1.8rem,3vw,2.4rem)] leading-[0.95] tracking-[-0.03em]">
          Find me online
        </h2>
        <p className="mt-4 text-[16px] leading-7 text-ink">
          You can find me on{" "}
          {site.socials.map((social, index) => {
            const sep =
              index === site.socials.length - 1
                ? "."
                : index === site.socials.length - 2
                  ? ", and "
                  : ", ";
            return (
              <span key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:decoration-ink"
                >
                  {social.name}
                </a>
                {sep}
              </span>
            );
          })}
        </p>
        <p className="mt-8 text-[16px] leading-7 text-ink-muted">
          Thanks for dropping by.
        </p>
      </section>
    </div>
  );
}
