import { Reveal } from "@/components/motion/reveal";
import { Section, SectionDivider, SectionHeader } from "@/components/section";
import { voices } from "@/lib/content";
import { Play, Quote } from "lucide-react";

export function Voices() {
  return (
    <Section id="voices" variant="surface">
      <SectionHeader
        eyebrow="Voices from the room"
        title="NOT JUST PASQUALE."
        titleAccent="The whole movement talks."
        description="Built Different is one founder's standard — and hundreds of operators who stepped into it."
        align="center"
      />
      <SectionDivider />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {voices.map((voice, i) => (
          <Reveal key={`${voice.name}-${i}`} delay={i * 60}>
            {voice.type === "quote" ? (
              <blockquote className="flex h-full flex-col border border-border bg-bg-card p-7 md:p-8">
                <Quote
                  className="mb-5 h-7 w-7 text-accent/60"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="flex-1 text-base leading-relaxed text-fg">
                  &ldquo;{voice.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-border pt-5">
                  <cite className="not-italic text-xs font-medium uppercase tracking-wider text-fg">
                    {voice.name}
                  </cite>
                  <p className="mt-1 text-xs text-fg-muted">{voice.role}</p>
                  <p className="mt-2 font-mono text-[11px] text-accent">
                    {voice.result}
                  </p>
                </footer>
              </blockquote>
            ) : (
              <div className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden border border-border bg-bg-elevated">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(to top, var(--bg-void) 0%, transparent 50%), url(${voice.poster})`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center border border-fg/20 bg-bg-void/70 backdrop-blur-sm transition-colors group-hover:border-accent group-hover:bg-accent">
                    <Play className="ml-0.5 h-5 w-5 fill-current text-fg" strokeWidth={0} />
                  </span>
                </div>
                <div className="relative p-7">
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {voice.quote}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wider text-fg">
                    {voice.name}
                  </p>
                  <p className="font-mono text-[10px] text-fg-subtle">
                    {voice.role} · {voice.result}
                  </p>
                </div>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
