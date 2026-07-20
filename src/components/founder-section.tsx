import { AssetImage } from "@/components/asset-image";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/section";
import { closeNote, pasqualeArc } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { Award, Building2, TrendingUp, Users } from "lucide-react";

const badges = [
  { icon: Building2, label: "BlueMagic Group · $65M+" },
  { icon: Award, label: "Forbes Australia" },
  { icon: TrendingUp, label: "103+ startup investments" },
  { icon: Users, label: "Minasi Inner Circle" },
] as const;

const PASQUALE_FALLBACK =
  "https://unavatar.io/instagram/iampasqualeminasi?fallback=false";

export function FounderSection() {
  return (
    <Section id="founder" className="border-t border-border">
      <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div
            className="pointer-events-none absolute -right-8 -top-8 select-none text-display text-[12rem] leading-none text-accent/[0.07]"
            aria-hidden
          >
            ≠
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <AssetImage
              src={siteConfig.assets.pasqualeStage}
              fallback={PASQUALE_FALLBACK}
              alt="Pasquale Minasi — founder of Built Different"
              fill
              priority
              className="object-cover object-[center_18%] contrast-[1.06] saturate-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-bg-void/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 border-t border-border/60 bg-bg-void/80 p-5 backdrop-blur-sm">
              <p className="text-display text-2xl text-fg">Pasquale Minasi</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-subtle">
                CEO · BlueMagic Group · Built Different
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="The operator"
            title="HE DIDN'T TEACH"
            titleAccent="Until he built."
          />
          <Reveal delay={60}>
            <div className="space-y-5 border-l-2 border-accent pl-6 text-base leading-relaxed text-fg-muted">
              <p>{pasqualeArc.origin}</p>
              <p>{pasqualeArc.operator}</p>
              <p className="text-fg">{pasqualeArc.promise}</p>
              <p>{pasqualeArc.close}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border border-border bg-bg-card px-4 py-3"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-accent"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-fg-muted">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={180}>
            <blockquote className="mt-12 border border-border bg-bg-elevated p-6 md:p-8">
              <p className="text-lg italic leading-relaxed text-fg">
                &ldquo;{closeNote.text}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="text-display text-lg text-accent">
                  {closeNote.sign}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                  {closeNote.title}
                </p>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
