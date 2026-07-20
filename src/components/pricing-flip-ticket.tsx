"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { Check, RotateCcw } from "lucide-react";
import type { TierId } from "@/lib/event";

type TierShape = {
  id: TierId;
  name: string;
  price: number;
  anchor: number;
  tagline: string;
  benefits: string[];
  accent?: "gold";
  envKey: string;
};

type PricingFlipTicketProps = {
  tier: TierShape;
  checkoutUrl: string;
  featured?: boolean;
};

export function PricingFlipTicket({
  tier,
  checkoutUrl,
  featured = false,
}: PricingFlipTicketProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      className={cn(
        "ticket-flip flex h-full w-full flex-col",
        featured ? "ticket-flip--vip" : "ticket-flip--standard",
      )}
    >
      <div className="mb-3 flex h-7 items-center justify-center">
        {featured ? (
          <span className="ticket-flip__badge ticket-flip__badge--vip">
            Most selected
          </span>
        ) : (
          <span className="invisible font-mono text-[10px]">·</span>
        )}
      </div>

      <div
        className={cn(
          "ticket-flip__inner flex-1",
          flipped && "ticket-flip__inner--flipped",
        )}
      >
        <button
          type="button"
          onClick={() => setFlipped(true)}
          aria-expanded={flipped}
          aria-label={`Flip ${tier.name} ticket to see full details`}
          className="ticket-flip__face ticket-flip__face--front cursor-pointer text-left"
        >
          <div className="ticket-flip__stripe" aria-hidden />
          <p className="ticket-flip__name">{tier.name}</p>
          <div className="mt-5 flex items-end gap-3">
            <span className="ticket-flip__price">€{tier.price}</span>
            <span className="ticket-flip__anchor">€{tier.anchor}</span>
          </div>
          <p className="ticket-flip__tagline">{tier.tagline}</p>
          <p className="ticket-flip__hint">Tap to flip ticket →</p>
        </button>

        <div className="ticket-flip__face ticket-flip__back">
          <div className="ticket-flip__stripe" aria-hidden />
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="ticket-flip__name ticket-flip__name--sm">{tier.name}</p>
              <p className="ticket-flip__meta">
                €{tier.price} · {tier.tagline}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="ticket-flip__back-btn"
              aria-label="Flip ticket back"
            >
              <RotateCcw className="h-3 w-3" strokeWidth={2} />
              Flip back
            </button>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {tier.benefits.map((benefit) => (
              <li key={benefit} className="ticket-flip__benefit">
                <Check className="ticket-flip__check" strokeWidth={2} />
                {benefit}
              </li>
            ))}
          </ul>
          <Button
            href={checkoutUrl}
            className="mt-7 w-full"
            size="lg"
            arrow
            variant={featured ? "primary" : "secondary"}
            target={checkoutUrl.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            Reserve Your Seat
          </Button>
        </div>
      </div>
    </article>
  );
}
