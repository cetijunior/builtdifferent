"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { Check, Crown, X } from "lucide-react";
import type { TierId } from "@/lib/event";

type EliteTier = {
  id: TierId;
  name: string;
  price: number;
  anchor: number;
  tagline: string;
  benefits: string[];
  envKey: string;
};

type PricingEliteEnvelopeProps = {
  tier: EliteTier;
  checkoutUrl: string;
};

/**
 * Elite envelope: flap opens in place; ticket opens in a fixed portal
 * so it never overlaps Standard / VIP cards.
 */
export function PricingEliteEnvelope({
  tier,
  checkoutUrl,
}: PricingEliteEnvelopeProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const labelId = useId();
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const ticketModal =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            className="elite-env-portal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
          >
            <button
              type="button"
              className="elite-env-portal__backdrop"
              aria-label="Close Elite ticket"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="elite-env-portal__card"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${labelId}-title`}
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 48, scale: 0.92 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 32, scale: 0.96 }
              }
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : {
                      type: "spring",
                      stiffness: 280,
                      damping: 26,
                      mass: 0.85,
                      delay: 0.12,
                    }
              }
            >
              <div className="elite-env__ticket-perf" aria-hidden />
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold">
                  Built Different 3.0 · Elite
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="touch-manipulation rounded-sm p-1 text-fg-subtle transition-colors hover:text-gold"
                  aria-label="Close Elite ticket"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
              <p
                id={`${labelId}-title`}
                className="text-display mt-2 text-2xl text-gold sm:text-3xl"
              >
                {tier.name}
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-3">
                <span className="text-display text-4xl leading-none text-fg sm:text-5xl">
                  €{tier.price}
                </span>
                <span className="mb-1 text-sm text-fg-subtle line-through">
                  €{tier.anchor}
                </span>
              </div>
              <p className="mt-3 text-sm text-fg-muted sm:text-base">
                {tier.tagline}
              </p>
              <ul className="mt-5 max-h-[40vh] space-y-2.5 overflow-y-auto border-t border-dashed border-gold/20 pt-5 sm:max-h-none">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-fg-muted">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={2}
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button
                href={checkoutUrl}
                className="mt-6 w-full"
                size="lg"
                arrow
                variant="secondary"
                target={checkoutUrl.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                Reserve Your Seat
              </Button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 w-full touch-manipulation py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-fg-subtle transition-colors hover:text-gold"
              >
                Seal envelope
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <article className="elite-env">
      <div className="mb-3 flex h-7 items-center justify-center">
        <span className="inline-flex items-center gap-1.5 border border-gold/40 bg-bg-void px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
          <Crown className="h-3 w-3" strokeWidth={2} />
          Elite invitation
        </span>
      </div>

      <div className="elite-env__stage" style={{ perspective: 1200 }}>
        <div className="elite-env__pocket">
          <motion.div
            className="elite-env__flap"
            initial={false}
            animate={{ rotateX: open ? (reduceMotion ? -90 : -165) : 0 }}
            transition={
              reduceMotion
                ? { duration: 0.01 }
                : { duration: 0.7, ease, delay: open ? 0 : 0.1 }
            }
            style={{
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
            }}
            aria-hidden
          >
            <div className="elite-env__flap-face elite-env__flap-face--front" />
            <div className="elite-env__flap-face elite-env__flap-face--back" />
          </motion.div>

          <motion.div
            className="elite-env__seal"
            initial={false}
            animate={
              open
                ? { opacity: 0, scale: 0.55, y: -8 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={
              reduceMotion ? { duration: 0.01 } : { duration: 0.3, ease }
            }
            aria-hidden={open}
          >
            <span className="text-display text-[9px] leading-none tracking-wider text-gold">
              ELITE
            </span>
          </motion.div>

          <motion.div
            className="elite-env__peek"
            initial={false}
            animate={{ opacity: open ? 0 : 0.9 }}
            transition={{ duration: 0.25 }}
            aria-hidden
          />

          <button
            type="button"
            id={labelId}
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-label="Open Elite invitation envelope"
            className={cn(
              "elite-env__body touch-manipulation cursor-pointer",
              open && "elite-env__body--open",
            )}
          >
            <div className="elite-env__folds" aria-hidden />
            <div className="relative z-[2] flex h-full min-h-[inherit] flex-col justify-end p-6 pt-16 sm:p-8 sm:pt-20">
              <p className="text-display text-2xl text-gold sm:text-3xl">
                {tier.name}
              </p>
              <div className="mt-4 flex flex-wrap items-end gap-3">
                <span className="text-display text-4xl leading-none text-fg sm:text-5xl">
                  €{tier.price}
                </span>
                <span className="mb-1 text-sm text-fg-subtle line-through">
                  €{tier.anchor}
                </span>
              </div>
              <p className="mt-4 text-base leading-snug text-fg-muted">
                {tier.tagline}
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                {open
                  ? "Envelope open · ticket delivered"
                  : "Sealed invitation · tap to open"}
              </p>
            </div>
          </button>
        </div>
      </div>

      {ticketModal}
    </article>
  );
}
