"use client";

import { Reveal } from "@/components/motion/reveal";
import { PricingEliteEnvelope } from "@/components/pricing-elite-envelope";
import { PricingFlipTicket } from "@/components/pricing-flip-ticket";
import { Section, SectionDivider, SectionHeader } from "@/components/section";
import {
  defaultStripeLinks,
  event,
  tiers,
  type TierId,
} from "@/lib/event";

function getCheckoutUrl(tierId: TierId, envKey: string): string {
  const fromEnv = process.env[envKey];
  if (fromEnv && fromEnv.startsWith("http")) return fromEnv;
  return defaultStripeLinks[tierId];
}

export function Pricing() {
  const standard = tiers.find((t) => t.id === "standard")!;
  const vip = tiers.find((t) => t.id === "vip")!;
  const elite = tiers.find((t) => t.id === "elite")!;

  return (
    <Section id="pricing" variant="elevated" withGrain>
      <SectionHeader
        eyebrow="Tickets"
        title="PICK YOUR SEAT."
        titleAccent="Price goes up. Tickets don't."
        description="Standard gets you in the room. VIP gets you closer. Elite gets Pasquale's calendar. 1,000+ tickets — when they're gone, the door stays shut."
        align="center"
      />
      <Reveal>
        <p className="mx-auto mb-14 max-w-lg text-center font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
          {event.ticketsLabel} tickets · {event.dates} · {event.location}
        </p>
      </Reveal>
      <SectionDivider />

      <div className="mt-14 space-y-8 md:space-y-10">
        {/* Standard + VIP row */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-5 lg:gap-8">
          <Reveal delay={60} className="h-full">
            <PricingFlipTicket
              tier={standard}
              checkoutUrl={getCheckoutUrl(standard.id, standard.envKey)}
            />
          </Reveal>
          <Reveal delay={120} className="h-full">
            <PricingFlipTicket
              tier={vip}
              checkoutUrl={getCheckoutUrl(vip.id, vip.envKey)}
              featured
            />
          </Reveal>
        </div>

        {/* Elite envelope — ticket opens in portal, never overlaps other cards */}
        <Reveal delay={180}>
          <div className="mx-auto w-full max-w-xl">
            <PricingEliteEnvelope
              tier={elite}
              checkoutUrl={getCheckoutUrl(elite.id, elite.envKey)}
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={220}>
        <p className="mt-12 text-center text-sm text-fg-subtle">
          Questions before checkout? DM &quot;{event.dmKeyword}&quot; on{" "}
          <a
            href={event.instagram}
            className="text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          . By purchasing you agree to our{" "}
          <a
            href="/legal/terms"
            className="text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Terms of Sale
          </a>{" "}
          and{" "}
          <a
            href="/legal/refund"
            className="text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Refund Policy
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
