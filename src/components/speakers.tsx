import Image from "next/image";
import { AssetImage } from "@/components/asset-image";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/section";
import { event, headlineSpeaker, pastGuests } from "@/lib/event";
import { ExternalLink, Megaphone } from "lucide-react";

const PASQUALE_FALLBACK =
  "https://img.youtube.com/vi/KWyb_lM3YR4/maxresdefault.jpg";

function PastGuestCard({
  guest,
}: {
  guest: (typeof pastGuests)[number];
}) {
  const media = (
    <div className="relative aspect-[3/4] overflow-hidden border border-border bg-bg-card transition-colors group-hover:border-accent/40">
      <Image
        src={guest.image}
        alt={guest.name}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 11vw"
      />
      <span className="sr-only">{guest.name}</span>
    </div>
  );

  if (guest.url) {
    return (
      <a
        href={guest.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        title={guest.name}
      >
        {media}
      </a>
    );
  }

  return <div className="group">{media}</div>;
}

export function Speakers() {
  return (
    <Section id="speakers" variant="surface" withGrain>
      <SectionHeader
        eyebrow="Speakers"
        title="PASQUALE LEADS."
        titleAccent="More dropping soon."
        description="BD 3.0 lineup builds on what worked at 2.0 — operators on stage, not hour-long inspiration. Pasquale is confirmed. The rest announces on Instagram."
        align="center"
      />

      {/* Confirmed headline — BD 3.0 */}
      <Reveal>
        <article className="overflow-hidden border border-accent/35 bg-bg-card">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/5] min-h-[280px] border-b border-border lg:aspect-auto lg:min-h-[420px] lg:border-b-0 lg:border-r">
              <AssetImage
                src={headlineSpeaker.image}
                fallback={PASQUALE_FALLBACK}
                alt={headlineSpeaker.name}
                fill
                className="object-cover object-[center_12%] grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-bg-void/20" />
              <span className="absolute left-4 top-4 border border-accent/50 bg-bg-void/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
                Confirmed · 3.0
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                {headlineSpeaker.edition}
              </p>
              <h3 className="text-display mt-3 text-3xl text-fg md:text-4xl">
                {headlineSpeaker.name}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-fg-muted">
                {headlineSpeaker.role}
              </p>
              <p className="mt-5 text-base leading-relaxed text-fg-muted">
                {headlineSpeaker.tagline}
              </p>
              <ul className="mt-6 space-y-2">
                {headlineSpeaker.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-fg-muted"
                  >
                    <span className="h-1 w-1 shrink-0 bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={headlineSpeaker.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent hover:text-accent-hover"
              >
                {headlineSpeaker.handle}
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </article>
      </Reveal>

      {/* 3.0 lineup TBA */}
      <Reveal delay={80} className="mt-6">
        <div className="flex gap-4 border border-border bg-bg-void/80 p-5 backdrop-blur-sm md:items-center">
          <Megaphone
            className="mt-0.5 h-5 w-5 shrink-0 text-accent md:mt-0"
            strokeWidth={1.5}
          />
          <p className="text-sm leading-relaxed text-fg-muted">
            <span className="font-medium text-fg">BD 3.0 speakers</span> announce
            on{" "}
            <a
              href={event.instagram}
              className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.instagramHandle}
            </a>
            . Expect the same operator standard as BD 2.0 — closers, founders,
            and practitioners who&apos;ve done the work.
          </p>
        </div>
      </Reveal>

      {/* Past guests — BD 2.0 (compact) */}
      <Reveal delay={120} className="mt-10">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            Past guests · BD 2.0
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
            9 speakers · Apr 2026 · Tirana
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
          {pastGuests.map((guest) => (
            <PastGuestCard key={guest.name} guest={guest} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
