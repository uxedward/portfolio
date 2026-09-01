import Image from "next/image";
import type { AiTool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: AiTool }) {
  const className =
    "group block overflow-hidden rounded-[var(--radius)] border border-hairline bg-paper-2 transition-colors duration-300 hover:border-ink";

  const content = (
    <>
      {tool.cover ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-paper">
          <Image
            src={tool.cover}
            alt={tool.title}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : null}
      <div className="p-5">
        {tool.year ? (
          <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            {tool.year}
          </p>
        ) : null}
        <h2 className="mt-2 text-[clamp(1.35rem,3vw,2rem)] font-medium leading-[1.1] tracking-[-0.03em]">
          {tool.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-ink-soft">{tool.summary}</p>
        {tool.href ? (
          <p className="mt-4 text-sm text-ink-soft transition-colors duration-300 group-hover:text-ink">
            Open ↗
          </p>
        ) : null}
      </div>
    </>
  );

  if (tool.href) {
    return (
      <a
        href={tool.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
