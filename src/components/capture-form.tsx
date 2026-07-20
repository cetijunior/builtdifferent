"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/button";
import { Bell, Radio, Users } from "lucide-react";

const perks = [
  {
    icon: Bell,
    title: "First to know",
    line: "Speaker drops, seat waves, and date locks — before the public IG post.",
  },
  {
    icon: Users,
    title: "Still in the room",
    line: "Operator updates from the movement — even if you're not buying this round.",
  },
  {
    icon: Radio,
    title: "Priority signal",
    line: "When tickets open again, the list hears it first.",
  },
] as const;

export function CaptureForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="capture" variant="surface" withGrain className="border-y border-border">
      <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Movement pitch */}
        <div className="flex flex-col lg:col-span-6">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
              <span className="h-0.5 w-10 bg-accent" aria-hidden />
              Not buying this round?
            </p>
            <h2 className="text-display text-[clamp(2rem,5vw,3.4rem)] text-fg">
              STAY WITH THE
              <br />
              <span className="text-serif-accent text-[clamp(1.55rem,4vw,2.55rem)] text-fg-muted">
                Movement.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
              Can&apos;t take a seat yet — you can still be on the team. Get the
              same pulse as the room: updates, access windows, and the signal
              before the next drop.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-8 space-y-4">
            {perks.map(({ icon: Icon, title, line }) => (
              <div key={title} className="flex gap-4 border-l border-accent/40 pl-4">
                <Icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-fg">
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                    {line}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={140} className="relative mt-10 min-h-[200px] flex-1 overflow-hidden border border-border lg:min-h-[240px]">
            <Image
              src="/assets/legacy/movement-team.jpg"
              alt="Built Different team on stage"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-bg-void/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                The room keeps moving
              </p>
              <p className="mt-1.5 text-sm text-fg">
                Operators. Brotherhood. The next standard.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Join form */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <Reveal delay={100}>
            {submitted ? (
              <div className="border border-accent/35 bg-gradient-to-b from-accent/[0.1] to-bg-card p-8 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                  You&apos;re on the team
                </p>
                <p className="text-display mt-3 text-3xl text-fg">You&apos;re in.</p>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                  Watch your inbox — and follow{" "}
                  <a
                    href={siteConfig.instagram.event}
                    className="text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @builtdifferent.official
                  </a>
                  . DM &quot;{siteConfig.dmKeyword}&quot; anytime you&apos;re
                  ready to lock a seat.
                </p>
              </div>
            ) : (
              <div className="border border-border bg-bg-card">
                <div className="border-b border-border px-6 py-5 md:px-8 md:py-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                    Team list
                  </p>
                  <p className="text-display mt-2 text-2xl text-fg md:text-3xl">
                    Join the circle
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">
                    Free. No ticket required. Just stay close to the movement.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 px-6 py-6 md:px-8 md:py-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                        First name
                      </span>
                      <input
                        required
                        name="firstName"
                        autoComplete="given-name"
                        className="w-full border border-border bg-bg-void px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle/70 focus:border-accent"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                        Email
                      </span>
                      <input
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        className="w-full border border-border bg-bg-void px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle/70 focus:border-accent"
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                      What are you building?{" "}
                      <span className="text-fg-subtle/70">(optional)</span>
                    </span>
                    <input
                      name="building"
                      className="w-full border border-border bg-bg-void px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle/70 focus:border-accent"
                      placeholder="Sales team · clinic · agency · …"
                    />
                  </label>
                  <label className="flex items-start gap-3 text-left">
                    <input
                      required
                      type="checkbox"
                      name="marketingConsent"
                      className="mt-1 h-4 w-4 shrink-0 border border-border bg-bg-void accent-[var(--accent)]"
                    />
                    <span className="text-[11px] leading-relaxed text-fg-subtle">
                      I agree to receive Built Different updates by email and
                      accept the{" "}
                      <a
                        href="/legal/privacy"
                        className="text-fg underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        Privacy Policy
                      </a>
                      . Unsubscribe anytime.
                    </span>
                  </label>
                  <Button type="submit" size="lg" arrow className="w-full">
                    Join the movement
                  </Button>
                  <p className="text-center text-[11px] leading-relaxed text-fg-subtle">
                    No spam. When you&apos;re ready for a seat — we&apos;ll
                    already know your name.
                  </p>
                </form>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
