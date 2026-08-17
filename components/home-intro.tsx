import { site } from "@/lib/site";

export function HomeIntro() {
  return (
    <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pb-20 lg:pt-24">
      <div>
        <p className="text-sm text-ink-soft">Hey, I&apos;m Edward.</p>
        <h1 className="mt-5 max-w-3xl font-serif text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.03em]">
          Designer in practice,{" "}
          <em className="italic">educator</em> at heart.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-7 text-ink-soft">
          I help businesses craft digital products — and I&apos;ve been advocating
          Figma and product design to 200k+ people since 2021. If that sounds
          like you, let&apos;s build something together.
        </p>
        <a
          href={site.chat.href}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-opacity hover:opacity-80"
        >
          {site.chat.label}
        </a>
      </div>
      <aside className="border-t border-hairline pt-6 lg:border-t-0 lg:pt-0">
        <p className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          {site.role.label}
        </p>
        <p className="mt-3 text-lg">
          {site.role.title} @{" "}
          <a
            href={site.role.href}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-hairline underline-offset-4 transition-colors hover:decoration-ink"
          >
            {site.role.company}
          </a>
        </p>
        <p className="mt-2 text-sm text-ink-soft">{site.location}</p>
      </aside>
    </section>
  );
}
