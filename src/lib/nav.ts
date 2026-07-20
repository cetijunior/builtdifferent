/** Primary in-page navigation — header + footer */
export const primaryNav = [
  { label: "Proof", href: "/#proof" },
  { label: "Experience", href: "/#experience" },
  { label: "Venue", href: "/#venue" },
  { label: "Legacy", href: "/#legacy" },
  { label: "Moments", href: "/#moments" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Agenda", href: "/#agenda" },
  { label: "Tickets", href: "/#pricing" },
  { label: "Founder", href: "/#founder" },
  { label: "Join", href: "/#capture" },
  { label: "FAQ", href: "/#faq" },
] as const;

/** Compact header links (subset) */
export const headerNav = [
  { label: "Proof", href: "/#proof" },
  { label: "Experience", href: "/#experience" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Agenda", href: "/#agenda" },
  { label: "Tickets", href: "/#pricing" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Sale", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refund" },
  { label: "Cookie Policy", href: "/legal/cookies" },
] as const;
