"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionDivider, SectionHeader } from "@/components/section";
import { faqs } from "@/lib/event";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" variant="surface" withGrain>
      <SectionHeader
        eyebrow="FAQ"
        title="QUESTIONS BEFORE"
        titleAccent="you commit."
        align="center"
      />
      <SectionDivider />
      <div className="mx-auto mt-14 max-w-2xl">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 40}>
              <div className="border-b border-border">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-fg">{item.q}</span>
                  <span
                    className={cn(
                      "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors",
                      isOpen && "border-accent/40 bg-accent/10 text-accent",
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={2} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    )}
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-fg-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
