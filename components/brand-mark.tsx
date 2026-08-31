import Image from "next/image";

export function BrandMark({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <span className="relative block size-10 shrink-0 overflow-hidden rounded-[12px] bg-paper">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="size-10 object-cover"
      />
    </span>
  );
}
