import { Button, buttonClassName } from "@/components/button";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/section";
import { RedKicker } from "@/components/slash-divider";
import { VimeoPlayer } from "@/components/vimeo-player";
import { CredentialStats } from "@/components/credential-stats";
import { andyBlock, pressAndPartners } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { vimeoWatchUrl } from "@/lib/vimeo";
import { ExternalLink } from "lucide-react";

export function Proof() {
  const vimeoId = siteConfig.videos.andyVimeo;

  return (
    <Section id="proof" variant="surface" className="border-y border-border">
      <SectionHeader
        eyebrow="Proof"
        title="OPERATORS BACK THIS."
        titleAccent="Numbers. Names. Andy Elliott on camera."
        description="Built Different isn't influencer marketing — it's operator credibility with receipts."
        align="center"
      />

      {/* Andy Elliott testimonial */}
      <Reveal>
        <div className="relative mx-auto max-w-5xl">
          <div
            className="pointer-events-none absolute -inset-4 bg-accent/10 blur-3xl"
            aria-hidden
          />
          <div className="relative border border-border bg-bg-card p-1.5 md:p-2">
            <VimeoPlayer
              vimeoId={vimeoId}
              variant="featured"
              kicker="Andy Elliott · Testimonial"
              caption={`"${andyBlock.quote}"`}
              label="Andy Elliott testimonial for Pasquale Minasi"
            />
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-14">
        <Reveal delay={80}>
          <blockquote className="border-l-2 border-accent pl-6 md:pl-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
              {andyBlock.kicker}
            </p>
            <p className="mt-4 text-xl leading-relaxed text-fg md:text-2xl lg:text-[1.65rem] lg:leading-snug">
              &ldquo;{andyBlock.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="text-display text-lg text-fg">{andyBlock.citeName}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                {andyBlock.citeRole}
              </p>
            </footer>
          </blockquote>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex h-full flex-col justify-between gap-6 border border-border bg-bg-card p-6 md:p-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                Why this matters
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {andyBlock.context}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="#pricing" size="lg" arrow className="w-full">
                Get tickets now
              </Button>
              <a
                href={vimeoWatchUrl(vimeoId)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({
                  variant: "secondary",
                  size: "lg",
                  className: "w-full gap-2",
                })}
              >
                Watch on Vimeo
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Credential stats */}
      <div className="mt-20 border-t border-border pt-16 md:mt-24 md:pt-20">
        <Reveal>
          <RedKicker>Operator proof — not influencer fluff</RedKicker>
        </Reveal>
        <CredentialStats />
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-border pt-8">
            {pressAndPartners.map((name) => (
              <span
                key={name}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-subtle"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
