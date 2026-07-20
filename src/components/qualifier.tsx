import { Button } from "@/components/button";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { qualifier } from "@/lib/content";
import { AlertTriangle, Ban, Check, ShieldCheck, X } from "lucide-react";

function DeniedPanel() {
  return (
    <div className="qualifier-denied relative h-full overflow-hidden border border-accent/25 p-6 md:p-8">
      <div
        className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-mono text-[4.5rem] font-bold uppercase leading-none tracking-tighter text-accent/[0.07] md:text-[6rem]"
        aria-hidden
      >
        DENIED
      </div>

      <div className="relative flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center border border-accent/40 bg-accent/10">
          <Ban className="h-4 w-4 text-accent" strokeWidth={2} />
        </span>
        <h3 className="text-display text-lg text-fg-muted md:text-xl">
          {qualifier.noTitle}
        </h3>
      </div>

      <ul className="relative mt-6 space-y-4">
        {qualifier.no.map((item) => (
          <li
            key={item}
            className="flex gap-3 border-l border-accent/20 pl-4 text-sm leading-relaxed text-fg-subtle"
          >
            <X
              className="mt-0.5 h-4 w-4 shrink-0 text-accent/80"
              strokeWidth={2.5}
            />
            {item}
          </li>
        ))}
      </ul>

      <p className="relative mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
        Close this tab. Save your money.
      </p>
    </div>
  );
}

function ClearedPanel() {
  return (
    <div className="qualifier-cleared relative h-full overflow-hidden border border-accent/50 p-6 md:p-8">
      <div
        className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none font-mono text-[4.5rem] font-bold uppercase leading-none tracking-tighter text-accent/[0.12] md:text-[6rem]"
        aria-hidden
      >
        CLEARED
      </div>

      <div className="relative flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center border border-accent bg-accent/20">
          <ShieldCheck className="h-4 w-4 text-accent" strokeWidth={2} />
        </span>
        <h3 className="text-display text-lg text-fg md:text-xl">
          {qualifier.yesTitle}
        </h3>
      </div>

      <ul className="relative mt-6 space-y-4">
        {qualifier.yes.map((item) => (
          <li
            key={item}
            className="flex gap-3 border-l-2 border-accent/60 pl-4 text-sm leading-relaxed text-fg"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
            {item}
          </li>
        ))}
      </ul>

      <Button href="#pricing" size="lg" arrow className="relative mt-8 w-full">
        {qualifier.cta}
      </Button>
    </div>
  );
}

export function Qualifier() {
  return (
    <Section
      id="qualifier"
      variant="elevated"
      className="relative border-y-2 border-accent/50 !bg-bg-void"
    >
      <div className="hazard-stripes h-1.5 w-full" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-0 py-10 md:py-14">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            <AlertTriangle className="h-3.5 w-3.5" strokeWidth={2.5} />
            {qualifier.warning}
          </p>

          <h2 className="text-display mt-8 text-[clamp(2rem,5.5vw,3.75rem)] leading-[0.95] text-fg">
            {qualifier.title}
            <br />
            <span className="text-serif-accent text-[clamp(1.35rem,3.5vw,2.25rem)] text-accent">
              {qualifier.titleAccent}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            {qualifier.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
          <Reveal className="order-1 md:order-none">
            <DeniedPanel />
          </Reveal>
          <Reveal delay={90} className="order-2 md:order-none">
            <ClearedPanel />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8 md:mt-10">
          <div className="flex flex-col items-center gap-5 border border-border bg-bg-card px-6 py-6 text-center md:flex-row md:justify-between md:px-8 md:text-left">
            <p className="max-w-2xl text-sm leading-relaxed text-fg-muted md:text-base">
              {qualifier.closeLine}
            </p>
            <Button href="#pricing" size="md" arrow className="shrink-0">
              Get tickets
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="hazard-stripes h-1.5 w-full" aria-hidden />
    </Section>
  );
}
