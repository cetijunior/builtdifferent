"use client";

import { AnimatedStat } from "@/components/animated-stat";
import { Reveal } from "@/components/motion/reveal";
import { credentials } from "@/lib/content";
import { cn } from "@/lib/utils";

type Credential = (typeof credentials)[number];

function StatCard({
  item,
  index,
  variant,
}: {
  item: Credential;
  index: number;
  variant: "hero" | "compact";
}) {
  const delay = variant === "hero" ? index * 120 : 360 + index * 80;

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden border border-border bg-bg-card",
        variant === "hero"
          ? "min-h-[140px] p-5 sm:min-h-[160px] sm:p-6 md:p-8"
          : "min-h-[120px] p-4 sm:p-5 md:p-6",
      )}
    >
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
        aria-hidden
      />
      <p
        className={cn(
          "text-display leading-none text-fg",
          variant === "hero"
            ? "text-[clamp(2rem,6vw,3.25rem)]"
            : "text-[clamp(1.75rem,4.5vw,2.5rem)]",
        )}
      >
        <AnimatedStat value={item.value} delay={delay} />
      </p>
      <div className="mt-auto pt-4">
        <p
          className={cn(
            "font-medium uppercase tracking-wider text-fg-muted",
            variant === "hero" ? "text-[11px] md:text-xs" : "text-[10px] md:text-[11px]",
          )}
        >
          {item.label}
        </p>
        <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-fg-subtle">
          {item.source}
        </p>
      </div>
    </article>
  );
}

export function CredentialStats() {
  const hero = credentials.filter((c) => "featured" in c && c.featured);
  const rest = credentials.filter((c) => !("featured" in c && c.featured));

  return (
    <div className="mt-8 space-y-3 sm:space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {hero.map((item, i) => (
          <Reveal key={item.label} delay={i * 60}>
            <StatCard item={item} index={i} variant="hero" />
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {rest.map((item, i) => (
          <Reveal key={item.label} delay={180 + i * 50}>
            <StatCard item={item} index={i} variant="compact" />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
