import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "paper", value: "#ffffff", className: "bg-paper border border-hairline" },
  { name: "paper-2", value: "#f0f0f0", className: "bg-paper-2" },
  { name: "ink", value: "#121212", className: "bg-ink" },
  { name: "ink-soft", value: "#999999", className: "bg-ink-soft" },
  { name: "hairline", value: "#dddddd", className: "bg-hairline" },
  { name: "accent", value: "#ff6f00", className: "bg-accent" },
];

export default function DesignSystemPage() {
  return (
    <div className="page-enter mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <p className="text-sm text-ink-soft">Edward / Product Design</p>
      <h1 className="mt-3 font-serif text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.03em]">
        Design system
      </h1>
      <p className="mt-6 max-w-xl text-[17px] leading-7 text-ink-soft">
        Inter Tight and Instrument Serif from the first iteration. Color and
        components follow Eric Sin: white ground, #121212 ink, 12px cards, 4px
        badges. Accent is for metrics and primary hover.
      </p>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] tracking-tight">
          Color
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {colors.map((color) => (
            <li key={color.name}>
              <div className={`h-24 rounded-[var(--radius)] ${color.className}`} />
              <p className="mt-3 text-sm">{color.name}</p>
              <p className="text-sm text-ink-soft">{color.value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] tracking-tight">
          Type
        </h2>
        <p className="mt-8 font-serif text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.03em]">
          Instrument Serif for titles
        </p>
        <p className="mt-4 max-w-xl text-[17px] leading-7 text-ink-soft">
          Inter Tight for interface, body, and the case-study left nav.
        </p>
      </section>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] tracking-tight">
          Buttons
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline" size="sm">
            Chip button
          </Button>
          <Button variant="primary" size="sm" pressed>
            Selected
          </Button>
        </div>
      </section>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] tracking-tight">
          Chips
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          <Chip>Product Thinking</Chip>
          <Chip>Product Design</Chip>
          <Chip>Human-Centricity</Chip>
        </div>
      </section>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] tracking-tight">
          Metrics
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius)] border border-hairline bg-hairline sm:grid-cols-3">
          <div className="bg-paper px-5 py-6">
            <p className="font-serif text-4xl tracking-tight text-accent">+4.2%</p>
            <p className="mt-2 text-sm text-ink-soft">Search to book CVR</p>
          </div>
          <div className="bg-paper px-5 py-6">
            <p className="font-serif text-4xl tracking-tight text-accent">+7%</p>
            <p className="mt-2 text-sm text-ink-soft">No-route error CTR</p>
          </div>
          <div className="bg-paper px-5 py-6">
            <p className="font-serif text-4xl tracking-tight text-accent">+12%</p>
            <p className="mt-2 text-sm text-ink-soft">No-route error CVR</p>
          </div>
        </div>
      </section>
    </div>
  );
}
