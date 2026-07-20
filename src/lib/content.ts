/** Conversion + credibility content — swap [CONFIRM] when client delivers assets */

export const heroCopy = {
  badge: "2-day live event · MAK Albania · Oct 24–25, 2026",
  headline: "THE SYSTEM THAT BUILT A MULTI-MILLION EURO EMPIRE.",
  headlineAccent: "Taught live. No theory. No mercy.",
  /** Tony-style hero — short, decisive, human */
  cinematicHeadline: "The room changes you.",
  cinematicSub: "Built Different 3.0 with Pasquale Minasi — two days at MAK Albania, Tirana, for closers who refuse average.",
  sub: "Built Different 3.0 with Pasquale Minasi — CEO of BlueMagic Group, angel investor, and the operator who built this room for closers who refuse average.",
  cta: "Get tickets now",
  watch: "Watch",
  eventLabel: "Next event",
  eventDetails: "View event details",
  micro: "From €249 · Secure checkout · Apple Pay & Google Pay",
} as const;

export const credentials = [
  {
    label: "BlueMagic Group valuation",
    value: "$65M+",
    source: "Forbes Australia",
    featured: true,
  },
  {
    label: "Operator brand scale",
    value: "€20M+",
    source: "LinkedIn / public",
    featured: true,
  },
  {
    label: "BD 3.0 capacity",
    value: "1,000+",
    source: "Built Different",
    featured: true,
  },
  { label: "Startup investments", value: "103+", source: "Forbes / Pasquale" },
  { label: "BD editions delivered", value: "3", source: "Built Different" },
  { label: "BD 2.0 participants", value: "200+", source: "Event reporting" },
  { label: "International speakers", value: "9", source: "BD 2.0 lineup" },
] as const;

export const pressAndPartners = [
  "Forbes Australia",
  "Business Magazine Albania",
  "MAK Albania Hotel",
  "Tirana Business University",
  "Denis Gafuri Convention",
  "Andy Elliott · The Elliott Group",
  "Minasi Inner Circle",
] as const;

export const pasqualeArc = {
  origin: "Bartender. Real estate. Then he built BlueMagic from savings into a medical tourism empire — Istanbul, London, Dubai, Tirana.",
  operator:
    "While others sell courses, Pasquale runs clinics, invests in 103+ startups, and puts his face on the line every edition of Built Different.",
  promise:
    "On stage he breaks down what actually converted: personal brand → authority → revenue. Execution. Standards. Obsession with growth.",
  close: "This isn't motivation. It's the playbook of someone who built in the real world — and brought the room with him.",
} as const;

export const andyBlock = {
  kicker: "Credibility spine",
  title: "WHAT ANDY ELLIOTT SAYS ABOUT PASQUALE",
  quote:
    "Pasquale is one of the most driven operators I've met — he builds real businesses and trains real closers. Built Different is where that energy hits the room.",
  citeName: "Andy Elliott",
  citeRole: "The Elliott Group · 2.4M followers",
  videoCaption:
    "Andy Elliott on Pasquale Minasi — operator credibility from the most watched sales voice in the game.",
  context:
    "When Andy puts his name on an operator, the room listens. This isn't a paid clip — it's the credibility spine Built Different runs on. Pasquale built the event. Andy vouched for the standard.",
  igPost: "https://www.instagram.com/p/DXTeWfuiJJx/",
  vimeoUrl: "https://vimeo.com/1108653159",
} as const;

export const outcomes = [
  {
    title: "Close without discounting",
    desc: "Hold price integrity under pressure — the same frameworks Pasquale deploys across medical, sales, and marketing ventures.",
  },
  {
    title: "Build and train a team",
    desc: "Culture, energy, and habits that turn average reps into consistent producers.",
  },
  {
    title: "Systemize to scale",
    desc: "Playbooks, KPIs, and leadership rhythms that survive growth — not heroics.",
  },
  {
    title: "Rewire the 1% mindset",
    desc: "Decision speed, standards, and identity shifts top closers carry daily.",
  },
  {
    title: "0 → 6 → 7 figure moves",
    desc: "Step-by-step operator stories from someone who did it — not theory from the sidelines.",
  },
  {
    title: "Sell anywhere",
    desc: "Automotive, real estate, clinics, D2D, solar — transferable architecture.",
  },
] as const;

export const qualifier = {
  warning: "Access warning · Not for tourists",
  title: "NOT EVERYONE BELONGS",
  titleAccent: "In this room.",
  description:
    "Built Different applies pressure by design. We filter hard so the room stays operator-grade — and so the people who stay, convert.",
  yesTitle: "Cleared — this is for you if",
  yes: [
    "You lead a business or sales team and need sharper systems — not another seminar high",
    "You're a closer ready to raise income, standards, and network",
    "You pay for rooms that produce ROI — operators, not tourists",
  ],
  noTitle: "Access denied — stay home if",
  no: [
    "You want motivation without execution for 90 days after",
    "You need hand-holding — this event applies pressure by design",
    "You're bargain-hunting — Built Different is operator-grade, not entry-level",
  ],
  closeLine:
    "Still reading? You passed the filter. The weak scrolled away. The closers are still here.",
  cta: "I'm built for this — get tickets",
} as const;

export const eventLegacy = [
  {
    edition: "Built Different 1.0",
    when: "Sep 13–14, 2025",
    venue: "MAK Hotel, Tirana",
    highlight: "100+ entrepreneurs. Cold plunges. Villa networking. The movement started here.",
    stat: "100+ attendees",
  },
  {
    edition: "Built Different 2.0",
    when: "Apr 25–26, 2026",
    venue: "Tirana",
    highlight:
      "200+ participants. 9 international speakers. 3,439-like recap reel. Strangers walked in — a stronger community walked out.",
    stat: "3,439 likes · recap",
  },
  {
    edition: "Built Different 3.0",
    when: "Oct 24–25, 2026",
    venue: "MAK Albania Hotel, Tirana",
    highlight: "The deepest edition yet. Same pressure. Bigger standard.",
    stat: "1,000+ tickets · selling now",
    active: true,
  },
] as const;

/** Attendee + ecosystem voices — Pasquale is one story; the room is many */
export const voices = [
  {
    quote:
      "The Built Different 2.0 event was life changing for everyone who came there to rebuild themselves.",
    name: "BD 2.0 room",
    role: "Collective voice · post-event recap",
    result: "3,439 likes · 43 comments",
    type: "quote" as const,
  },
  {
    quote:
      "Everyone who walks into Built Different walks out as someone else.",
    name: "Event manifesto",
    role: "Core promise · 12.2% engagement",
    result: "7,086 likes",
    type: "quote" as const,
  },
  {
    quote:
      "Real brotherhood is built under pressure — not networking photos.",
    name: "BD community",
    role: "Post–2.0 messaging",
    result: "LinkedIn + IG alignment",
    type: "quote" as const,
  },
  {
    quote: "[CONFIRM — specific € result from 2.0 attendee footage]",
    name: "[CONFIRM name]",
    role: "[CONFIRM role · company]",
    result: "[CONFIRM outcome metric]",
    type: "video" as const,
    poster: "/assets/testimonials/attendee-1.jpg",
  },
  {
    quote: "[CONFIRM — second attendee video quote]",
    name: "[CONFIRM name]",
    role: "Built Different 2.0 · Tirana",
    result: "Video testimonial",
    type: "video" as const,
    poster: "/assets/testimonials/attendee-2.jpg",
  },
] as const;

/** Wins linked to BD — not all Pasquale, but the ecosystem he built */
export const successStories = [
  {
    title: "From bartender to empire",
    subject: "Pasquale Minasi",
    story:
      "Built BlueMagic Group from savings into a $65M+ medical brand. Forbes. 103 investments. Then he built a room so others wouldn't wait as long as he did.",
    tag: "Founder arc",
  },
  {
    title: "200+ rebuilt in April",
    subject: "Built Different 2.0",
    story:
      "Over 200 participants — students, managers, entrepreneurs — engaged in discipline, ice baths, and sales systems. Not inspiration. Implementation.",
    tag: "Event proof",
  },
  {
    title: "International speaker stack",
    subject: "BD 2.0 guests",
    story:
      "Brian Choi, Denis Gafuri, Marco Riccardi, Brendan Borg, and operators from Malta to Pristina — one room, one standard.",
    tag: "Network effect",
  },
  {
    title: "The room keeps working",
    subject: "Post-event pipeline",
    story:
      "One month after 2.0, the account documented 'so many successes and achievements from every one of you who participated' — the event is a starting line, not a weekend.",
    tag: "Long game",
  },
] as const;

export const galleryMoments = [
  {
    label: "Official experience",
    caption: "100+ entrepreneurs · cold plunges · brotherhood",
    youtubeId: "KWyb_lM3YR4",
    igShortcode: null,
  },
  {
    label: "Ice discipline",
    caption: "Coffee and cigarettes during ice bath — only in Albania",
    youtubeId: null,
    igShortcode: "DXqqCbFCPKQ",
  },
  {
    label: "Movement reel",
    caption: "233K views · this movement changes lives",
    youtubeId: null,
    igShortcode: "DWt0OAtjHYK",
  },
  {
    label: "BD 2.0 recap",
    caption: "3,439 likes · post-event trailer",
    youtubeId: null,
    igShortcode: "DZF_3fhIfWn",
  },
  {
    label: "Transformation",
    caption: "Walk in one way. Walk out different.",
    youtubeId: null,
    igShortcode: "DO0SNFpiMPL",
  },
  {
    label: "TBU standard",
    caption: "New standard set at Tirana Business University",
    youtubeId: null,
    igShortcode: "DXOX3SLDGXa",
  },
] as const;

export const closeNote = {
  text: "I built this event because the room changed my life — and I watched it change hundreds of others in April. October is where we go deeper. If you're still average after this page, that's on you. See you in Tirana.",
  sign: "Pasquale Minasi",
  title: "Founder · BlueMagic Group · Built Different",
} as const;
