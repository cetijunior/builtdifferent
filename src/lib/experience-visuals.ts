import type { ExperienceIconKey } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export type ExperienceVisual = {
  id: string;
  title: string;
  description: string;
  icon: ExperienceIconKey;
  image: string;
  proof: string;
  igShortcode?: string;
  youtubeId?: string;
  featured?: boolean;
};

export const experienceVisuals: ExperienceVisual[] = [
  {
    id: "cold-plunge",
    title: "Cold plunge",
    description: "Ice under pressure. Comfort stripped so everything after hits harder.",
    icon: "cold-plunge",
    image: "/assets/experience/cold-plunge.jpg",
    proof: "135K views · ice bath reel",
    igShortcode: "DXqqCbFCPKQ",
    featured: true,
  },
  {
    id: "sales",
    title: "Sales frameworks",
    description: "Live closing systems on stage — deploy Monday, not when you get home and forget.",
    icon: "sales",
    image: "/assets/experience/sales.jpg",
    proof: "3,439 likes · BD 2.0 recap",
    igShortcode: "DZF_3fhIfWn",
    featured: true,
  },
  {
    id: "workout",
    title: "Sunrise workouts",
    description: "Coach-led reps before the room opens — discipline wired in before the first framework lands.",
    icon: "workout",
    image: "/assets/experience/workout.jpg",
    proof: "BD 2.0 · morning session",
    igShortcode: "DXtXtBHiO6D",
    youtubeId: "KWyb_lM3YR4",
  },
  {
    id: "leadership",
    title: "Leadership & culture",
    description: "Operate when the pressure is on. TBU set a new campus standard — same energy in Tirana.",
    icon: "leadership",
    image: "/assets/experience/leadership.jpg",
    proof: "200+ at Tirana Business University",
    igShortcode: "DXOX3SLDGXa",
  },
  {
    id: "marketing",
    title: "Marketing systems",
    description: "Attention → authority → revenue. Personal brand that converts — not content for content's sake.",
    icon: "marketing",
    image: "/assets/experience/marketing.jpg",
    proof: "233K views · movement reel",
    igShortcode: "DWt0OAtjHYK",
  },
  {
    id: "networking",
    title: "Brotherhood nights",
    description: "VIP rooms where speakers, operators, and closers actually connect — deals born after lights dim.",
    icon: "networking",
    image: "/assets/experience/networking.jpg",
    proof: "BD 2.0 · VIP speaker session",
    igShortcode: "DXodotuCKo-",
  },
];

export function experienceMediaHref(item: ExperienceVisual): string {
  if (item.igShortcode) {
    return `https://www.instagram.com/p/${item.igShortcode}/`;
  }
  if (item.youtubeId) {
    return `https://www.youtube.com/watch?v=${item.youtubeId}`;
  }
  return siteConfig.instagram.event;
}
