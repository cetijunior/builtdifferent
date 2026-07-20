import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/section";
import { VoiceTestimonialCard } from "@/components/voice-testimonial-card";
import { bdVoices, bdVoicesIntro } from "@/lib/bd-voices";
import {
  experienceMediaHref,
  experienceVisuals,
} from "@/lib/experience-visuals";
import { InstagramIcon } from "@/components/instagram-icon";
import { ExternalLink } from "lucide-react";

function ExperiencePillarLink({
  item,
}: {
  item: (typeof experienceVisuals)[number];
}) {
  return (
    <a
      href={experienceMediaHref(item)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-w-[140px] shrink-0 flex-col overflow-hidden border border-border bg-bg-card sm:min-w-0"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-[transform,filter] duration-500 group-hover:scale-[1.04]"
          sizes="160px"
        />
        <div className="absolute inset-0 bg-bg-void/25 transition-colors group-hover:bg-bg-void/10" />
        <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center border border-border/60 bg-bg-void/70">
          <InstagramIcon className="h-3 w-3" />
        </div>
      </div>
      <div className="border-t border-border px-3 py-2.5">
        <p className="text-display text-[11px] leading-tight text-fg">{item.title}</p>
        <p className="mt-0.5 font-mono text-[8px] uppercase tracking-wider text-accent">
          {item.proof.split("·")[0]?.trim()}
        </p>
      </div>
    </a>
  );
}

export function Experience() {
  return (
    <Section id="experience" variant="surface" className="!py-16 md:!py-20">
      <SectionHeader
        eyebrow="The experience"
        title="SEE IT."
        titleAccent="Hear them."
        description="Six pillars with real footage — then voices from operators who lived Built Different."
        align="center"
      />

      {/* Compact pillar links */}
      <Reveal>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
          {experienceVisuals.map((item) => (
            <ExperiencePillarLink key={item.id} item={item} />
          ))}
        </div>
        <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.22em] text-fg-subtle">
          Tap a pillar · clips from Built Different 2.0
        </p>
      </Reveal>

      {/* Voices of the Built Different */}
      <Reveal delay={80} className="mt-12 md:mt-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              {bdVoicesIntro.title}
            </p>
            <p className="mt-2 max-w-lg text-sm text-fg-muted">{bdVoicesIntro.subtitle}</p>
          </div>
          <a
            href={bdVoicesIntro.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle transition-colors hover:text-accent"
          >
            Source site
            <ExternalLink className="h-3 w-3" strokeWidth={2} />
          </a>
        </div>

        <div className="-mx-1 flex gap-2.5 overflow-x-auto px-1 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 lg:gap-3">
          {bdVoices.map((voice, i) => (
            <Reveal key={voice.id} delay={100 + i * 40} className="shrink-0 sm:shrink">
              <VoiceTestimonialCard voice={voice} className="w-[168px] sm:w-auto" />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
