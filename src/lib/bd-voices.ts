/** Voices of the Built Different — from builtdifferent.pasqualeminasi.com (Vimeo) */

export type BdVoice = {
  id: string;
  name: string;
  role: string;
  /** On-screen caption / pull quote */
  caption: string;
  vimeoId: string;
};

export const bdVoicesIntro = {
  title: "VOICES OF THE BUILT DIFFERENT",
  subtitle: "Real operators. Real results. Not motivation — proof.",
  source: "https://builtdifferent.pasqualeminasi.com/",
} as const;

export const bdVoices: BdVoice[] = [
  {
    id: "oliger",
    name: "Oliger",
    role: "Built Different · life-changing at any age",
    caption: "You can start changing life from any age — this is Oliger's experience at Built Different.",
    vimeoId: "1161794513",
  },
  {
    id: "amarildo",
    name: "Amarildo",
    role: "Built Different attendee",
    caption: "What Built Different did for me — straight from the room.",
    vimeoId: "1161794397",
  },
  {
    id: "chris",
    name: "Chris",
    role: "Built Different attendee",
    caption: "Chris on what changed after two days in the room.",
    vimeoId: "1161794426",
  },
  {
    id: "couple",
    name: "Greek couple",
    role: "Built Different · shared experience",
    caption: "Two operators. One room. A shared Built Different experience.",
    vimeoId: "1161794470",
  },
  {
    id: "room-1",
    name: "From the room",
    role: "Built Different testimonial",
    caption: "Why they came — and why they'd do it again.",
    vimeoId: "1161794341",
  },
  {
    id: "room-2",
    name: "From the room",
    role: "Built Different testimonial",
    caption: "Pressure, brotherhood, and standards that stick after the weekend.",
    vimeoId: "1161794740",
  },
  {
    id: "mix",
    name: "The movement",
    role: "Testimonial mix · Built Different",
    caption: "Voices from the movement — not one guru, a whole room.",
    vimeoId: "1161794772",
  },
];
