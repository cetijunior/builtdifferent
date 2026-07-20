export const siteConfig = {
  event: {
    name: "Built Different 3.0",
    dates: "October 24–25, 2026",
    datesIso: "2026-10-24T08:00:00+02:00",
    city: "Tirana",
    country: "Albania",
    venue: "MAK Albania Hotel",
    venueAddress: "Sheshi Italia, Tirana, Albania",
    venueUrl: "https://www.makalbania.com/",
    seats: 1000,
    ticketsLabel: "1,000+",
    eliteSeats: 20,
  },
  earlyBirdDeadline:
    process.env.NEXT_PUBLIC_EARLY_BIRD_DEADLINE ?? "2026-09-30T23:59:59+02:00",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@pasqualeminasi.com",
  instagram: {
    event: "https://www.instagram.com/builtdifferent.official/",
    founder: "https://www.instagram.com/iampasqualeminasi/",
  },
  tiktok: {
    event: "https://www.tiktok.com/@builtdifferent.official2",
  },
  dmKeyword: "BUILT",
  videos: {
    pasquale: process.env.NEXT_PUBLIC_VIDEO_PASQUALE ?? "KWyb_lM3YR4",
    andy: process.env.NEXT_PUBLIC_VIDEO_ANDY ?? "",
    andyVimeo: process.env.NEXT_PUBLIC_VIDEO_ANDY_VIMEO ?? "1108653159",
    andyIgShortcode: "DXTeWfuiJJx",
    /** Hero loop — first ~11.5s of master cut (1080p stream-copy) */
    heroMp4:
      process.env.NEXT_PUBLIC_HERO_VIDEO_MP4 ?? "/assets/video/hero-web.mp4",
  },
  assets: {
    pasqualeHero: "/assets/pasquale/hero.jpg",
    pasqualeStage: "/assets/pasquale/stage.jpg",
    pasqualeHeadshot: "/assets/pasquale/headshot.jpg",
  },
  stripe: {
    standard:
      process.env.NEXT_PUBLIC_STRIPE_STANDARD ??
      "https://buy.stripe.com/28E3cv9NcfoqaoQ90T6Vq0i",
    vip: process.env.NEXT_PUBLIC_STRIPE_VIP ?? "",
    elite: process.env.NEXT_PUBLIC_STRIPE_ELITE ?? "",
  },
  /** Organizer / merchant of record — confirm before live payments */
  legal: {
    brand: "Built Different",
    organizer: "Pasquale Minasi",
    tradingAs: "Built Different",
    /** Set NEXT_PUBLIC_LEGAL_ENTITY when the registered company name is confirmed */
    entity:
      process.env.NEXT_PUBLIC_LEGAL_ENTITY ?? "Pasquale Minasi / Built Different",
    address:
      process.env.NEXT_PUBLIC_LEGAL_ADDRESS ??
      "Event operations · Tirana, Albania",
    country: "Albania",
    governingLaw: "Albania",
    supportEmail:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@pasqualeminasi.com",
    paymentProcessor: "Stripe",
    lastUpdated: "2026-07-20",
  },
} as const;

export function whatsappUrl(text?: string) {
  const n = siteConfig.whatsapp.replace(/\D/g, "");
  if (!n) return "#capture";
  const base = `https://wa.me/${n}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
