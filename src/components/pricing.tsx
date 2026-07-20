"use client";

import Image from "next/image";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/section";
import {
  defaultStripeLinks,
  event,
  tiers,
  type TierId,
} from "@/lib/event";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

function getCheckoutUrl(tierId: TierId, envKey: string): string {
  const fromEnv = process.env[envKey];
  if (fromEnv && fromEnv.startsWith("http")) return fromEnv;
  return defaultStripeLinks[tierId];
}

const tierMeta: Record<
  TierId,
  { index: string; badge?: string; featured?: boolean }
> = {
  standard: { index: "01" },
  vip: { index: "02", badge: "Most selected", featured: true },
  elite: { index: "03", badge: "Limited" },
};

function SeatTier({
  tier,
  checkoutUrl,
}: {
  tier: (typeof tiers)[number];
  checkoutUrl: string;
}) {
  const meta = tierMeta[tier.id];
  const isElite = tier.id === "elite";
  const isVip = tier.id === "vip";

  return (
    <article
      className={cn(
        "relative flex h-full flex-col border bg-bg-void/40 transition-colors",
        isVip
          ? "border-accent/55 bg-gradient-to-b from-accent/[0.08] to-transparent"
          : "border-border hover:border-fg/20",
        isElite && "border-fg/25",
      )}
    >
      <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4 md:px-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-fg-subtle">
            Seat {meta.index}
          </p>
          <h3
            className={cn(
              "text-display mt-1.5 text-2xl tracking-[0.08em]",
              isVip ? "text-accent" : "text-fg",
              isElite && "text-[#d4af37]",
            )}
          >
            {tier.name.toUpperCase()}
          </h3>
        </div>
        {meta.badge ? (
          <span
            className={cn(
              "shrink-0 border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em]",
              isVip
                ? "border-accent/50 bg-accent/15 text-accent"
                : "border-border text-fg-subtle",
            )}
          >
            {meta.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-5 py-6 md:px-6 md:py-7">
        <div className="flex items-baseline gap-3">
          <span className="text-display text-4xl text-fg md:text-[2.75rem]">
            €{tier.price}
          </span>
          <span className="font-mono text-sm text-fg-subtle line-through">
            €{tier.anchor}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{tier.tagline}</p>

        <ul className="mt-7 space-y-3 border-t border-border pt-6">
          {tier.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex gap-3 text-sm leading-snug text-fg-muted"
            >
              <Check
                className={cn(
                  "mt-0.5 h-3.5 w-3.5 shrink-0",
                  isVip ? "text-accent" : "text-fg-subtle",
                  isElite && "text-[#d4af37]",
                )}
                strokeWidth={2.5}
              />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <Button
            href={checkoutUrl}
            size="lg"
            arrow
            className="w-full"
            variant={isVip ? "primary" : "secondary"}
            {...(checkoutUrl.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {isElite ? "Request Elite" : `Secure ${tier.name}`}
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" variant="elevated" withGrain>
      <SectionHeader
        eyebrow="Tickets"
        title="PICK YOUR SEAT."
        titleAccent="Price goes up. Access doesn't wait."
        description="Three ways into the room. Benefits stay visible — no games. When the 1,000+ tickets are gone, registration closes."
        align="center"
      />

      {/* Atmosphere — matches media-led sections */}
      <Reveal>
        <div className="relative mb-10 overflow-hidden border border-border md:mb-12">
          <div className="relative aspect-[21/7] min-h-[140px] md:aspect-[28/7]">
            <Image
              src="/assets/pasquale/stage.jpg"
              alt="Built Different stage"
              fill
              className="object-cover object-[center_28%] opacity-70"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-void via-bg-void/55 to-bg-void/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-bg-void/40" />
          </div>
          <div className="absolute inset-0 flex items-end p-5 md:p-7">
            <div className="flex w-full flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                  Built Different 3.0
                </p>
                <p className="mt-1.5 text-sm text-fg md:text-base">
                  {event.dates} · {event.location}
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
                {event.ticketsLabel} tickets · door closes when sold
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {tiers.map((tier, i) => (
          <Reveal key={tier.id} delay={60 + i * 70} className="h-full">
            <SeatTier
              tier={tier}
              checkoutUrl={getCheckoutUrl(tier.id, tier.envKey)}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={220}>
        <p className="mt-10 text-center text-sm text-fg-subtle">
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
