export const event = {
  name: "Built Different 3.0",
  tagline: "For people who refuse average",
  dates: "October 24–25, 2026",
  datesIso: "2026-10-24T08:00:00+02:00",
  location: "MAK Albania Hotel · Tirana, Albania",
  seats: 1000,
  ticketsLabel: "1,000+",
  instagram: "https://www.instagram.com/builtdifferent.official/",
  instagramHandle: "@builtdifferent.official",
  dmKeyword: "BUILT",
  vslYoutubeId: "KWyb_lM3YR4",
} as const;

export const trustStats = [
  { value: "€20M+", label: "Operator brand built" },
  { value: "100+", label: "Entrepreneurs at BD 1.0" },
  { value: "9", label: "International speakers" },
  { value: "2", label: "Days of intensity" },
] as const;

import type { ExperienceIconKey } from "@/components/icons";

export const experienceTiles: {
  title: string;
  description: string;
  icon: ExperienceIconKey;
}[] = [
  {
    title: "Sunrise workouts",
    description:
      "Day starts with discipline — coach-led sessions that hardwire standards before the room opens.",
    icon: "workout",
  },
  {
    title: "Cold plunge",
    description:
      "Ice discipline under pressure. Comfort stripped away so the rest of the weekend hits different.",
    icon: "cold-plunge",
  },
  {
    title: "Sales frameworks",
    description:
      "Real closing systems — not motivation. Frameworks you deploy Monday morning.",
    icon: "sales",
  },
  {
    title: "Leadership & culture",
    description:
      "Lead teams, build culture, operate when the pressure is on.",
    icon: "leadership",
  },
  {
    title: "Marketing systems",
    description:
      "Attention → authority → revenue. Personal brand that actually converts.",
    icon: "marketing",
  },
  {
    title: "Brotherhood nights",
    description:
      "High-level networking where collaborations and deals are born — not photo ops.",
    icon: "networking",
  },
];

export const proofQuotes = [
  {
    quote:
      "Everyone who walks into Built Different walks out as someone else.",
    source: "Event manifesto",
    metric: "7,086 likes · 12.2% engagement",
  },
  {
    quote:
      "Built Different isn't an event. It's a reset. Two days where we strip away comfort and rebuild you under pressure.",
    source: "Official event copy",
    metric: "64 comments on launch post",
  },
  {
    quote:
      "The Built Different 2.0 event was life changing for everyone who came there to rebuild themselves.",
    source: "Post-event recap",
    metric: "3,439 likes · 43 comments",
  },
] as const;

export const headlineSpeaker = {
  name: "Pasquale Minasi",
  role: "Founder & headline speaker",
  edition: "Built Different 3.0 · confirmed",
  tagline:
    "CEO of BlueMagic Group. Operator who built a $65M+ brand, invested in 103+ startups, and puts his face on the line every edition.",
  handle: "@iampasqualeminasi",
  url: "https://www.instagram.com/iampasqualeminasi/",
  image: "/assets/pasquale/stage.jpg",
  highlights: [
    "BlueMagic Group · $65M+ valuation",
    "103+ startup investments",
    "Built Different creator · 3 editions",
  ],
} as const;

/** BD 2.0 international roster — past guests, not the full 3.0 lineup */
export const pastGuests = [
  {
    name: "Juli Schöfmann",
    role: "Special guest",
    handle: null,
    url: null,
    image: "/assets/guests/juli.jpg",
  },
  {
    name: "Brian Choi",
    role: "Sales & closing",
    handle: "@brianchoisales",
    url: "https://www.instagram.com/brianchoisales/",
    image: "/assets/guests/brian.jpg",
  },
  {
    name: "Denis Gafuri",
    role: "Business growth",
    handle: "@denisgafuri",
    url: "https://www.instagram.com/denisgafuri/",
    image: "/assets/guests/denis.jpg",
  },
  {
    name: "Marco Riccardi",
    role: "Network & influence",
    handle: "@misternetwork",
    url: "https://www.instagram.com/misternetwork/",
    image: "/assets/guests/marco.jpg",
  },
  {
    name: "Cody Jones",
    role: "Special guest",
    handle: "@codyjxn",
    url: "https://www.instagram.com/codyjxn/",
    image: "/assets/guests/cody.jpg",
  },
  {
    name: "Daniel Kovalenko",
    role: "Special guest",
    handle: "@daniel_kovalenko1",
    url: "https://www.instagram.com/daniel_kovalenko1/",
    image: "/assets/guests/daniel.jpg",
  },
  {
    name: "Joon Choi",
    role: "Special guest",
    handle: "@joonxchoi",
    url: "https://www.instagram.com/joonxchoi/",
    image: "/assets/guests/joon.jpg",
  },
  {
    name: "Brendan Borg",
    role: "Special guest",
    handle: "@iambrendanborg",
    url: "https://www.instagram.com/iambrendanborg/",
    image: "/assets/guests/brendan.jpg",
  },
  {
    name: "Ali",
    role: "Fitness coach",
    handle: "@alifitpro",
    url: "https://www.instagram.com/alifitpro/",
    image: "/assets/guests/ali.jpg",
  },
] as const;

/** @deprecated Use headlineSpeaker + pastGuests */
export const speakers = [
  { ...headlineSpeaker, featured: true as const },
  ...pastGuests.map((g) => ({ ...g, featured: false as const })),
] as const;

export type AgendaSlotTag =
  | "discipline"
  | "session"
  | "break"
  | "networking"
  | "vip";

export type AgendaSlot = {
  start: string;
  end: string;
  title: string;
  detail?: string;
  tag: AgendaSlotTag;
};

export type AgendaDay = {
  day: string;
  date: string;
  weekday: string;
  title: string;
  hours: string;
  slots: AgendaSlot[];
};

export const agendaTagLabels: Record<AgendaSlotTag, string> = {
  discipline: "Discipline",
  session: "Session",
  break: "Break",
  networking: "Networking",
  vip: "VIP",
};

export const agenda: AgendaDay[] = [
  {
    day: "Day 1",
    date: "24 Oct 2026",
    weekday: "Friday",
    title: "Discipline & frameworks",
    hours: "06:30 – 22:00",
    slots: [
      {
        start: "06:30",
        end: "07:30",
        title: "Sunrise workout",
        detail: "Coach-led session with Ali — reps before the room opens",
        tag: "discipline",
      },
      {
        start: "07:30",
        end: "08:15",
        title: "Cold plunge & reset",
        detail: "Ice discipline under pressure — comfort stripped early",
        tag: "discipline",
      },
      {
        start: "08:15",
        end: "09:00",
        title: "Breakfast & check-in",
        detail: "Fuel up · settle in · meet the room",
        tag: "break",
      },
      {
        start: "09:00",
        end: "10:30",
        title: "Opening keynote",
        detail: "Pasquale sets the standard — why average dies in this room",
        tag: "session",
      },
      {
        start: "10:45",
        end: "12:30",
        title: "Sales frameworks",
        detail: "Systems that close in the real world — not slide-deck theory",
        tag: "session",
      },
      {
        start: "12:30",
        end: "14:00",
        title: "Lunch",
        detail: "Included with Standard · open networking in the venue",
        tag: "break",
      },
      {
        start: "14:00",
        end: "15:45",
        title: "Leadership under pressure",
        detail: "Operating when it counts — decisions, teams, and standards",
        tag: "session",
      },
      {
        start: "16:00",
        end: "17:30",
        title: "Marketing & attention",
        detail: "Turn attention into authority — then into revenue",
        tag: "session",
      },
      {
        start: "18:00",
        end: "19:00",
        title: "Implementation block",
        detail: "Live exercises — you leave with something built, not noted",
        tag: "session",
      },
      {
        start: "19:30",
        end: "22:00",
        title: "Networking night",
        detail: "Brotherhood, not business cards — the room after dark",
        tag: "networking",
      },
    ],
  },
  {
    day: "Day 2",
    date: "25 Oct 2026",
    weekday: "Saturday",
    title: "Systems & elevation",
    hours: "06:30 – 21:00",
    slots: [
      {
        start: "06:30",
        end: "07:30",
        title: "Morning workout",
        detail: "Day 2 standards — same alarm, higher bar",
        tag: "discipline",
      },
      {
        start: "07:30",
        end: "08:15",
        title: "Cold plunge",
        detail: "Mindset reset before the frameworks land",
        tag: "discipline",
      },
      {
        start: "08:15",
        end: "09:00",
        title: "Breakfast",
        detail: "Included with Standard",
        tag: "break",
      },
      {
        start: "09:00",
        end: "10:30",
        title: "Standards & mindset",
        detail: "The internal work operators skip — and pay for later",
        tag: "session",
      },
      {
        start: "10:45",
        end: "12:15",
        title: "Marketing mastery",
        detail: "Content, offers, and positioning that compounds",
        tag: "session",
      },
      {
        start: "12:15",
        end: "13:45",
        title: "Lunch",
        detail: "Included with Standard",
        tag: "break",
      },
      {
        start: "13:45",
        end: "15:15",
        title: "Team culture & systems",
        detail: "Build a business that runs without you in every room",
        tag: "session",
      },
      {
        start: "15:30",
        end: "17:00",
        title: "Live implementation",
        detail: "Work the frameworks on your business — in the room, not at home",
        tag: "session",
      },
      {
        start: "17:15",
        end: "18:00",
        title: "Operator panel & Q&A",
        detail: "International speakers · open floor · no soft questions",
        tag: "session",
      },
      {
        start: "18:30",
        end: "19:30",
        title: "VIP exclusive Q&A",
        detail: "Priority seating · deeper access · VIP & Elite only",
        tag: "vip",
      },
      {
        start: "19:30",
        end: "21:00",
        title: "Closing ceremony",
        detail: "Recap · commitments · what happens after you leave Tirana",
        tag: "session",
      },
    ],
  },
];

export type TierId = "standard" | "vip" | "elite";

export const tiers: {
  id: TierId;
  name: string;
  price: number;
  anchor: number;
  tagline: string;
  benefits: string[];
  accent?: "gold";
  envKey: string;
}[] = [
  {
    id: "standard",
    name: "Standard",
    price: 249,
    anchor: 997,
    tagline: "Get in the room.",
    benefits: [
      "2-day event access",
      "Event booklet",
      "Minasi certificate",
      "2 workout sessions",
      "Lunch & coffee",
    ],
    envKey: "NEXT_PUBLIC_STRIPE_STANDARD",
  },
  {
    id: "vip",
    name: "VIP",
    price: 497,
    anchor: 1497,
    tagline: "Get closer to the action.",
    benefits: [
      "All Standard benefits",
      "Exclusive Q&A session",
      "Priority seating",
      "Networking dinner",
    ],
    envKey: "NEXT_PUBLIC_STRIPE_VIP",
  },
  {
    id: "elite",
    name: "Elite",
    price: 1997,
    anchor: 4797,
    tagline: "Get on Pasquale's calendar.",
    benefits: [
      "All VIP benefits",
      "1:1 session with Pasquale",
      "Professional photoshoot",
      "Front row seating",
      "Mastermind event access",
    ],
    accent: "gold",
    envKey: "NEXT_PUBLIC_STRIPE_ELITE",
  },
];

export const faqs = [
  {
    q: "Is this just another motivation event?",
    a: "No. Built Different is two days of real sales frameworks, leadership systems, marketing strategy, and live exercises — plus sunrise workouts and cold plunges that hardwire discipline. You leave with tools, not feelings.",
  },
  {
    q: "What language is the event in?",
    a: "Primary delivery is English. The room includes Albanian entrepreneurs and international operators — expect a global, high-energy environment.",
  },
  {
    q: "What's the difference between VIP and Elite?",
    a: "VIP adds exclusive Q&A, priority seating, and a networking dinner. Elite includes everything in VIP plus a 1:1 with Pasquale, a photoshoot, front row seating, and mastermind access.",
  },
  {
    q: "Where is Built Different 3.0?",
    a: "MAK Albania Hotel, Sheshi Italia, Tirana — the five-star address where BD 1.0 started and 3.0 scales to 1,000+ tickets.",
  },
  {
    q: "How many tickets are available?",
    a: "Built Different 3.0 opens with 1,000+ tickets. When they're gone, registration closes — DM \"BUILT\" on Instagram to join the waitlist.",
  },
  {
    q: "Who is Pasquale Minasi?",
    a: "CEO of BlueMagic Group (€20M+ medical tourism brand), angel investor in 100+ startups, and creator of Built Different. He built real businesses before building this room — operator credibility, not guru theory.",
  },
  {
    q: "Can I get a refund?",
    a: "Ticket sales are generally non-refundable except where required by law or if we cancel the event. Full details are in the Refund Policy in the site footer. Contact the team before purchasing if you're unsure.",
  },
] as const;

export const defaultStripeLinks: Record<TierId, string> = {
  standard: "https://buy.stripe.com/28E3cv9NcfoqaoQ90T6Vq0i",
  vip: "#pricing",
  elite: "#pricing",
};
