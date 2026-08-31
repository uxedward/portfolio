import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconExternal } from "@/components/icons";
import { homeNow, homePhotoRows } from "@/lib/home";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description:
    "Product Designer, Content Creator, MX Ambassador Logitech. I help 200,000+ designers improve their product design workflow.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <div className="px-5 pt-10 sm:px-8 lg:px-10 lg:pt-10">
        <h1 className="font-serif text-[clamp(2.4rem,6vw,3.8rem)] leading-[0.95] tracking-[-0.03em]">
          Hi! I&apos;m Edward.
        </h1>
        <p className="mt-3 max-w-xl text-[18px] leading-8 text-ink">
          Product Designer, Content Creator, MX Ambassador Logitech.
        </p>

        <div className="mt-12 max-w-xl space-y-8">
          {homeNow.map((item) => {
            const label = (
              <>
                <span className="text-[18px] font-medium tracking-tight">
                  {item.title}
                </span>
                <IconExternal />
              </>
            );

            return (
              <div key={item.title}>
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
      </div>

      <section
        aria-label="Photos"
        className="flex flex-col gap-4 px-5 py-8 sm:px-8 lg:px-10 lg:py-8"
      >
        {homePhotoRows.map((row) => (
          <div
            key={row.photos.map((photo) => photo.src).join("-")}
            className={`flex gap-4 ${row.heightClass}`}
          >
            {row.photos.map((photo, photoIndex) => (
              <div
                key={photo.src}
                className={`relative min-w-0 overflow-hidden rounded-[10px] ${photo.widthClass}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={row === homePhotoRows[0] && photoIndex === 0}
                  sizes="(max-width: 1024px) 100vw, calc(100vw - 280px)"
                  className={`object-cover ${photo.objectClass ?? ""}`}
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
