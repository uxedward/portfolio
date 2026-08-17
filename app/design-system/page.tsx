import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";

export const metadata: Metadata = {
  title: "Design system",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "paper", value: "#f3f0e8", className: "bg-paper border border-hairline" },
  { name: "paper-2", value: "#e8e3d6", className: "bg-paper-2" },
  { name: "ink", value: "#171614", className: "bg-ink" },
  { name: "ink-soft", value: "#5f5a52", className: "bg-ink-soft" },
  { name: "hairline", value: "#d8d2c4", className: "bg-hairline" },
  { name: "accent", value: "#c24e1a", className: "bg-accent" },
];

export default function DesignSystemPage() {
  return (
    <div className="page-enter mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:py-24">
      <p className="text-sm text-ink-soft">Edward / Product Design</p>
      <h1 className="mt-3 font-serif text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.03em]">
        Design system
      </h1>
      <p className="mt-6 max-w-xl text-[17px] leading-7 text-ink-soft">
        Tokens, type, and components for the portfolio. Accent is for metrics
        only — never for buttons.
      </p>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-3xl tracking-tight">Color</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {colors.map((color) => (
            <li key={color.name}>
              <div className={`h-24 rounded-2xl ${color.className}`} />
              <p className="mt-3 text-sm">{color.name}</p>
              <p className="text-sm text-ink-soft">{color.value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-3xl tracking-tight">Type</h2>
        <p className="mt-8 font-serif text-5xl tracking-tight">
          Instrument Serif for titles
        </p>
        <p className="mt-4 max-w-xl text-[17px] leading-7 text-ink-soft">
          Inter Tight for interface, body, and the case-study left nav.
        </p>
      </section>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-3xl tracking-tight">Buttons</h2>
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
        <h2 className="font-serif text-3xl tracking-tight">Chips</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          <Chip>Product Thinking</Chip>
          <Chip>Product Design</Chip>
          <Chip>Human-Centricity</Chip>
        </div>
      </section>

      <section className="mt-16 border-t border-hairline pt-12">
        <h2 className="font-serif text-3xl tracking-tight">Metrics</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
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
