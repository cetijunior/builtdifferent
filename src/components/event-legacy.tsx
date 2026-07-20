import { Button } from "@/components/button";
import { EditionBanner } from "@/components/edition-banner";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/section";
import { legacyEditions, legacyGrowth } from "@/lib/legacy-journey";
import { cn } from "@/lib/utils";

function GrowthSnapshot() {
  return (
    <div className="border border-border bg-bg-card px-6 py-10 text-center md:px-12 md:py-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
        How fast it grew
      </p>
      <p className="text-display mt-3 text-2xl text-fg md:text-3xl">
        {legacyGrowth.message}
      </p>

      <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-end justify-center gap-4 md:gap-6">
        {legacyGrowth.steps.map((step, i) => (
          <div key={step.label} className="flex items-end gap-4 md:gap-6">
            {i > 0 && (
              <span className="text-display mb-2 text-xl text-accent md:text-2xl" aria-hidden>
                →
              </span>
            )}
            <div>
              <p
                className={cn(
                  "text-display text-4xl md:text-5xl",
                  i === legacyGrowth.steps.length - 1 ? "text-accent" : "text-fg",
                )}
              >
                {step.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex h-3 max-w-md overflow-hidden border border-border bg-bg-void">
        <div className="w-[10%] bg-accent/30" title="100+" />
        <div className="w-[20%] bg-accent/55" title="200+" />
        <div className="w-[70%] bg-accent" title="1,000+" />
      </div>
      <div className="mx-auto mt-2 flex max-w-md justify-between font-mono text-[9px] uppercase tracking-wider text-fg-subtle">
        <span>100+</span>
        <span>200+</span>
        <span>1,000+</span>
      </div>

      <p className="mx-auto mt-8 max-w-md text-sm text-fg-muted">{legacyGrowth.sub}</p>
    </div>
  );
}

function EditionCard({ edition }: { edition: (typeof legacyEditions)[number] }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden border bg-bg-card",
        edition.active ? "border-accent/50" : "border-border",
      )}
    >
      <EditionBanner
        id={edition.id}
        headline={edition.headline}
        headlineLabel={edition.headlineLabel}
        portrait={edition.portrait}
        portraitPosition={edition.portraitPosition}
        bannerKind={edition.bannerKind}
        active={edition.active}
      />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-display text-lg text-fg">{edition.label}</h3>
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
            {edition.when}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">{edition.line}</p>

        {edition.active ? (
          <Button href="#pricing" size="md" arrow className="mt-5 w-full">
            Get tickets
          </Button>
        ) : (
          edition.igShortcode && (
            <a
              href={`https://www.instagram.com/p/${edition.igShortcode}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 font-mono text-[10px] uppercase tracking-wider text-accent hover:text-accent-hover"
            >
              See it on Instagram →
            </a>
          )
        )}
      </div>
    </article>
  );
}

export function EventLegacy() {
  return (
    <Section id="legacy">
      <SectionHeader
        eyebrow="Track record"
        title="IT SCALED."
        titleAccent="1,000+ tickets for 3.0."
        description="Three editions. One trend — the room keeps growing. The standard stays the same."
        align="center"
      />

      <Reveal>
        <GrowthSnapshot />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-4">
        {legacyEditions.map((edition, i) => (
          <Reveal key={edition.id} delay={i * 70}>
            <EditionCard edition={edition} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
