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
    heightClass: "h-[220px] sm:h-[420px]",
    photos: [
      {
        src: "/images/home/dsc05676.jpg",
        alt: "Edward presenting on stage at a Logitech event",
        widthClass: "flex-1",
      },
      {
        src: "/images/home/img-9472.jpg",
        alt: "Edward standing at a conference with a Logitech presentation behind him",
        widthClass: "w-[38%] sm:w-[280px] sm:shrink-0",
      },
    ],
  },
  {
    heightClass: "h-[180px] sm:h-[300px]",
    photos: [
      {
        src: "/images/home/img-1022.jpg",
        alt: "Edward speaking into a microphone on stage",
        widthClass: "flex-1",
      },
      {
        src: "/images/home/img-1016.jpg",
        alt: "Presentation slide for a new workflow with Figma Make",
        widthClass: "flex-1",
      },
    ],
  },
  {
    heightClass: "h-[200px] sm:h-[340px]",
    photos: [
      {
        src: "/images/home/img-0155.jpg",
        alt: "Edward in front of the Tech in Asia Conference wall",
        widthClass: "flex-1",
      },
      {
        src: "/images/home/d50d4909.jpg",
        alt: "Group photo at a Logitech partner event",
        widthClass: "w-[38%] sm:w-[280px] sm:shrink-0",
      },
    ],
  },
  {
    heightClass: "h-[200px] sm:h-[340px]",
    photos: [
      {
        src: "/images/home/view-recent.jpg",
        alt: "Edward with a guest in front of a digital billboard",
        widthClass: "w-[36%] sm:w-[270px] sm:shrink-0",
      },
      {
        src: "/images/home/img-6884.jpg",
        alt: "Slide titled UX Designer 2026 AI Tool Stack with Edward’s portrait",
        widthClass: "flex-1",
      },
    ],
  },
  {
    heightClass: "h-[200px] sm:h-[340px]",
    photos: [
      {
        src: "/images/home/desk.jpg",
        alt: "Audience at a Logitech-branded event",
        widthClass: "flex-1",
        objectClass: "object-bottom",
      },
      {
        src: "/images/home/img-0119.jpg",
        alt: "Edward working at a desk with a laptop and tablet",
        widthClass: "w-[42%] sm:w-[393px] sm:shrink-0",
      },
    ],
  },
];
