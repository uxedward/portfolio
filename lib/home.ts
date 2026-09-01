export const homeNow = [
  {
    title: "Building products @ tiket.com",
    href: "/work",
    external: false,
    body: "As a Product Designer, I build products at tiket.com, Indonesia’s leading online travel company.",
  },
  {
    title: "Advocating AI & design as @ux.edward",
    href: "https://www.instagram.com/ux.edward/",
    external: true,
    body: "As a creator, I help 200,000+ designers improve their product design workflow, while promoting AI and modern design tools to create meaningful work.",
  },
] as const;

export type HomePhoto = {
  src: string;
  alt: string;
  widthClass: string;
  objectClass?: string;
};

export type HomePhotoRow = {
  heightClass: string;
  photos: HomePhoto[];
};

export const homePhotoRows: HomePhotoRow[] = [
  {
    heightClass: "h-[420px]",
    photos: [
      {
        src: "/images/home/dsc05676.jpg",
        alt: "Edward presenting on stage at a Logitech event",
        widthClass: "flex-1",
      },
      {
        src: "/images/home/img-9472.jpg",
        alt: "Edward at Config APAC with the conference stage behind him",
        widthClass: "w-[280px] shrink-0",
      },
    ],
  },
  {
    heightClass: "h-[300px]",
    photos: [
      {
        src: "/images/home/img-1022.jpg",
        alt: "Edward speaking on stage at a Logitech MX Master event",
        widthClass: "flex-1",
      },
      {
        src: "/images/home/img-1016.jpg",
        alt: "Edward presenting a new workflow with Figma Make",
        widthClass: "flex-1",
      },
    ],
  },
  {
    heightClass: "h-[340px]",
    photos: [
      {
        src: "/images/home/img-0155.jpg",
        alt: "Edward in front of the Tech in Asia Conference wall",
        widthClass: "flex-1",
      },
      {
        src: "/images/home/d50d4909.jpg",
        alt: "Group photo at Maker Collective Singapore",
        widthClass: "w-[280px] shrink-0",
      },
    ],
  },
  {
    heightClass: "h-[340px]",
    photos: [
      {
        src: "/images/home/view-recent.jpg",
        alt: "Edward with a guest in front of a digital billboard",
        widthClass: "w-[270px] shrink-0",
      },
      {
        src: "/images/home/img-6884.jpg",
        alt: "Edward presenting UX Designer 2026 AI Tool Stack at GDG Bandung",
        widthClass: "flex-1",
      },
    ],
  },
  {
    heightClass: "h-[340px]",
    photos: [
      {
        src: "/images/home/desk.jpg",
        alt: "Group photo around a Logitech logi sign",
        widthClass: "flex-1",
      },
      {
        src: "/images/home/img-0119.jpg",
        alt: "Edward at a desk with a laptop and tablet showing design work",
        widthClass: "w-[393px] shrink-0",
      },
    ],
  },
];

export const homePhotos = homePhotoRows.flatMap((row) => row.photos);
