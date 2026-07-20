/** Built Different — moments showcase (photos, videos, testimonials) */

export const MOMENTS_PHOTO_INITIAL_VISIBLE = 8;

export type MomentPhotoSource = "instagram" | "tiktok";

export type MomentPhoto = {
  id: string;
  label: string;
  caption: string;
  image: string;
  href: string;
  source?: MomentPhotoSource;
  /** Bento span on sm+ */
  featured?: boolean;
};

export type MomentTestimonial = {
  quote: string;
  name: string;
  role: string;
  result: string;
};

export const momentVideos = {
  official: {
    title: "The official experience film",
    caption: "100+ entrepreneurs · cold plunges · brotherhood · the standard",
    youtubeId: "KWyb_lM3YR4",
  },
  andy: {
    title: "Andy Elliott on Pasquale",
    caption:
      "Pasquale is one of the most driven operators I've met — he builds real businesses and trains real closers. Built Different is where that energy hits the room.",
    vimeoId: "1108653159",
  },
} as const;

export const momentPhotos: MomentPhoto[] = [
  {
    id: "recap",
    label: "BD 2.0 recap",
    caption: "3,439 likes · strangers walked in, a community walked out",
    image: "/assets/moments/recap.jpg",
    href: "https://www.instagram.com/p/DZF_3fhIfWn/",
    featured: true,
  },
  {
    id: "ice",
    label: "Ice discipline",
    caption: "Pressure by design — comfort stripped before frameworks land",
    image: "/assets/moments/ice.jpg",
    href: "https://www.instagram.com/p/DXqqCbFCPKQ/",
    featured: true,
  },
  {
    id: "workout",
    label: "Sunrise session",
    caption: "Coach-led reps before the room opens",
    image: "/assets/moments/workout.jpg",
    href: "https://www.instagram.com/p/DXtXtBHiO6D/",
  },
  {
    id: "movement",
    label: "Movement reel",
    caption: "233K views · this movement changes lives",
    image: "/assets/moments/movement.jpg",
    href: "https://www.instagram.com/p/DWt0OAtjHYK/",
  },
  {
    id: "networking",
    label: "Brotherhood nights",
    caption: "VIP rooms where operators actually connect",
    image: "/assets/moments/networking.jpg",
    href: "https://www.instagram.com/p/DXodotuCKo-/",
  },
  {
    id: "transform",
    label: "Transformation",
    caption: "Walk in one way. Walk out different.",
    image: "/assets/moments/transform.jpg",
    href: "https://www.instagram.com/p/DO0SNFpiMPL/",
  },
  {
    id: "tbu",
    label: "TBU standard",
    caption: "200+ at Tirana Business University",
    image: "/assets/moments/tbu.jpg",
    href: "https://www.instagram.com/p/DXOX3SLDGXa/",
  },
  {
    id: "andy",
    label: "Andy on Pasquale",
    caption: "Andy Elliott on camera — energy you can't fake",
    image: "/assets/moments/andy.jpg",
    href: "https://www.instagram.com/p/DXTeWfuiJJx/",
  },
  {
    id: "networking-reel",
    label: "Networking reel",
    caption: "148% engagement · connections that compound",
    image: "/assets/moments/networking-reel.jpg",
    href: "https://www.instagram.com/p/DX3ixfAIq80/",
  },
  {
    id: "brotherhood",
    label: "Brotherhood taste",
    caption: "2.0 was a taste of what brotherhood means",
    image: "/assets/moments/brotherhood.jpg",
    href: "https://www.instagram.com/p/DX6MudnIEwS/",
  },
  {
    id: "pasquale-stage",
    label: "Pasquale on stage",
    caption: "Why most people never make their dreams true",
    image: "/assets/moments/pasquale-stage.jpg",
    href: "https://www.instagram.com/p/DXHyw8_DPm8/",
  },
  {
    id: "pristina",
    label: "Pristina room",
    caption: "500 people in one room · the movement travels",
    image: "/assets/moments/pristina.jpg",
    href: "https://www.instagram.com/p/DY_9RdtsPlP/",
  },
  {
    id: "dreams",
    label: "Go after it",
    caption: "If you're this crazy about your dreams — be in the room",
    image: "/assets/moments/dreams.jpg",
    href: "https://www.instagram.com/p/DXE_3cLDeD8/",
  },
  {
    id: "movement-2",
    label: "The movement",
    caption: "We will never stop · October 24–25 Tirana",
    image: "/assets/moments/movement-2.jpg",
    href: "https://www.instagram.com/p/DXgS0zSCGS6/",
  },
  {
    id: "reset",
    label: "The reset",
    caption: "Not an event — a reset · ice, sales, brotherhood",
    image: "/assets/moments/reset.jpg",
    href: "https://www.instagram.com/p/DPRg9YTCNgb/",
  },
];

export const momentTestimonials: MomentTestimonial[] = [
  {
    quote:
      "The Built Different 2.0 event was life changing for everyone who came there to rebuild themselves.",
    name: "BD 2.0 room",
    role: "Collective voice · post-event recap",
    result: "3,439 likes · 43 comments",
  },
  {
    quote: "Everyone who walks into Built Different walks out as someone else.",
    name: "Event manifesto",
    role: "Core promise",
    result: "7,086 likes · 12.2% engagement",
  },
  {
    quote:
      "Real brotherhood is built under pressure — not networking photos.",
    name: "BD community",
    role: "Post–2.0 messaging",
    result: "LinkedIn + IG alignment",
  },
];

export const momentWins = [
  {
    tag: "Event proof",
    title: "200+ rebuilt in April",
    line: "Discipline, ice baths, sales systems — implementation, not inspiration.",
  },
  {
    tag: "Network",
    title: "9 international speakers",
    line: "Operators from Malta to Pristina — one room, one standard.",
  },
  {
    tag: "Long game",
    title: "The room keeps working",
    line: "Successes documented weeks after 2.0 — the event is a starting line.",
  },
  {
    tag: "Next scale",
    title: "1,000+ tickets · Oct 2026",
    line: "MAK Albania · the movement leveled up again.",
  },
] as const;
