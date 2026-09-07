import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconExternal } from "@/components/icons";
import { FadeIn } from "@/components/motion/fade-in";
import { Reveal, RevealList } from "@/components/motion/reveal";
import { homeNow, homePhotoRows, homePhotos } from "@/lib/home";
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
      <div className="px-6 pt-12 sm:px-8 lg:px-10 lg:pt-10">
        <h1 className="font-serif text-[clamp(2.6rem,11vw,3.8rem)] leading-[0.95] tracking-[-0.03em]">
          Hi! I&apos;m Edward.
        </h1>
        <FadeIn delay={0.18}>
          <p className="mt-4 max-w-xl text-[18px] leading-8 text-ink">
            Product Designer, Content Creator, MX Ambassador Logitech.
          </p>
        </FadeIn>

        <div className="mt-12 max-w-xl space-y-10">
          {homeNow.map((item, index) => {
            const label = (
              <>
                <span className="text-[18px] font-medium tracking-tight">
                  {item.title}
                </span>
                <IconExternal />
              </>
            );

            return (
              <Reveal key={item.title} delay={index * 0.06}>
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
              </Reveal>
            );
          })}
        </div>
      </div>

      <section
        aria-label="Photos"
        className="px-6 py-12 sm:px-8 lg:px-10 lg:py-8"
      >
        <RevealList className="flex flex-col gap-3 md:hidden">
          {homePhotos.map((photo, photoIndex) => (
            <figure
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-[10px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={photoIndex === 0}
                sizes="100vw"
                className={`object-cover ${photo.objectClass ?? ""}`}
              />
            </figure>
          ))}
        </RevealList>

        <RevealList className="hidden flex-col gap-4 md:flex">
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
        </RevealList>
      </section>
    </div>
  );
}
