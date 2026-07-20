/** Built Different edition journey — kept simple for visitors */

export type LegacyEdition = {
  id: string;
  label: string;
  when: string;
  /** The one number visitors should remember */
  headline: string;
  headlineLabel: string;
  line: string;
  /** Banner background — founder portrait or team photo */
  portrait: string;
  portraitPosition?: string;
  bannerKind?: "portrait" | "team";
  igShortcode?: string;
  active?: boolean;
};

export const legacyEditions: LegacyEdition[] = [
  {
    id: "1.0",
    label: "Built Different 1.0",
    when: "Sep 2025",
    headline: "100+",
    headlineLabel: "in the room",
    line: "Where it started — MAK Hotel, Tirana.",
    portrait: "/assets/pasquale/hero.jpg",
    portraitPosition: "68% 12%",
    igShortcode: "DXtXtBHiO6D",
  },
  {
    id: "2.0",
    label: "Built Different 2.0",
    when: "Apr 2026",
    headline: "200+",
    headlineLabel: "in the room",
    line: "Twice the size. 9 international speakers.",
    portrait: "/assets/pasquale/stage.jpg",
    portraitPosition: "55% 22%",
    igShortcode: "DZF_3fhIfWn",
  },
  {
    id: "3.0",
    label: "Built Different 3.0",
    when: "Oct 2026",
    headline: "1,000+",
    headlineLabel: "tickets",
    line: "1,000+ tickets · MAK Albania, Sheshi Italia.",
    portrait: "/assets/legacy/team-3.0.jpg",
    portraitPosition: "center 28%",
    bannerKind: "team",
    active: true,
  },
];

export const legacyGrowth = {
  steps: [
    { value: "100+", label: "BD 1.0" },
    { value: "200+", label: "BD 2.0" },
    { value: "1,000+", label: "BD 3.0" },
  ],
  message: "10× the room since edition 1.",
  sub: "100+ operators → 200+ → 1,000+ tickets for Built Different 3.0.",
} as const;
