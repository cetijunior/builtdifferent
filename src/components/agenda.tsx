import { Reveal } from "@/components/motion/reveal";
import { Section, SectionDivider, SectionHeader } from "@/components/section";
import {
  agenda,
  agendaTagLabels,
  type AgendaDay,
  type AgendaSlot,
  type AgendaSlotTag,
} from "@/lib/event";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const tagStyles: Record<AgendaSlotTag, string> = {
  discipline: "border-accent/40 bg-accent/10 text-accent",
  session: "border-border bg-bg-elevated text-fg-muted",
  break: "border-border/60 bg-bg-card text-fg-subtle",
  networking: "border-accent/30 bg-accent/5 text-accent",
  vip: "border-amber-500/40 bg-amber-500/10 text-amber-200",
};

function AgendaMetaStrip() {
  return (
    <Reveal delay={40}>
      <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
        <div className="flex items-start gap-3 bg-bg-card px-5 py-4 md:px-6 md:py-5">
          <CalendarDays
            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
            strokeWidth={1.75}
            aria-hidden
          />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-subtle">
              Dates
            </p>
            <p className="mt-1 text-sm font-medium text-fg">
              {siteConfig.event.dates}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-bg-card px-5 py-4 md:px-6 md:py-5">
          <Clock
            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
            strokeWidth={1.75}
            aria-hidden
          />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-subtle">
              Daily hours
            </p>
            <p className="mt-1 text-sm font-medium text-fg">
              06:30 check-in · last session ~21:00
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-bg-card px-5 py-4 md:px-6 md:py-5">
          <MapPin
            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
            strokeWidth={1.75}
            aria-hidden
          />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-subtle">
              Venue
            </p>
            <p className="mt-1 text-sm font-medium text-fg">
              {siteConfig.event.venue}
            </p>
            <p className="mt-0.5 text-xs text-fg-muted">
              {siteConfig.event.city}, {siteConfig.event.country}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function AgendaSlotRow({
  slot,
  isLast,
}: {
  slot: AgendaSlot;
  isLast: boolean;
}) {
  return (
    <li className="relative grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-1 sm:grid-cols-[5.5rem_1fr] sm:gap-x-5">
      <div className="relative pt-0.5">
        <p className="font-mono text-[11px] tabular-nums leading-none text-fg">
          {slot.start}
        </p>
        <p className="mt-1 font-mono text-[10px] tabular-nums text-fg-subtle">
          {slot.end}
        </p>
        {!isLast && (
          <span
            className="absolute left-[1.35rem] top-7 hidden h-[calc(100%+0.5rem)] w-px bg-border sm:block"
            aria-hidden
          />
        )}
      </div>

      <div className="relative border-b border-border pb-5 last:border-0 last:pb-0">
        <span
          className="absolute -left-[1.65rem] top-1.5 hidden h-2 w-2 rounded-full border border-accent/50 bg-bg-void sm:block"
          aria-hidden
        />
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h4 className="text-sm font-medium leading-snug text-fg sm:text-[15px]">
            {slot.title}
          </h4>
          <span
            className={cn(
              "shrink-0 border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em]",
              tagStyles[slot.tag],
            )}
          >
            {agendaTagLabels[slot.tag]}
          </span>
        </div>
        {slot.detail && (
          <p className="mt-1.5 text-xs leading-relaxed text-fg-muted sm:text-sm">
            {slot.detail}
          </p>
        )}
      </div>
    </li>
  );
}

function AgendaDayCard({ day, index }: { day: AgendaDay; index: number }) {
  return (
    <Reveal delay={80 + index * 80}>
      <article className="card-premium flex h-full flex-col overflow-hidden">
        <header className="border-b border-border bg-bg-elevated/40 px-6 py-6 md:px-8 md:py-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  {day.day}
                </p>
                <span className="font-mono text-[10px] text-fg-subtle">·</span>
                <p className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                  {day.weekday}, {day.date}
                </p>
              </div>
              <h3 className="text-display mt-2 text-2xl text-fg md:text-3xl">
                {day.title}
              </h3>
            </div>
            <div className="icon-ring shrink-0">
              <CalendarDays size={20} strokeWidth={1.5} />
            </div>
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
            {day.hours} · Europe/Tirana (CEST)
          </p>
        </header>

        <div className="flex-1 px-6 py-6 md:px-8 md:py-7">
          <div className="mb-4 hidden grid-cols-[5.5rem_1fr] gap-x-5 border-b border-border pb-3 sm:grid">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-subtle">
              Time
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg-subtle">
              Session
            </p>
          </div>
          <ol className="space-y-0">
            {day.slots.map((slot, i) => (
              <AgendaSlotRow
                key={`${slot.start}-${slot.title}`}
                slot={slot}
                isLast={i === day.slots.length - 1}
              />
            ))}
          </ol>
        </div>
      </article>
    </Reveal>
  );
}

export function Agenda() {
  return (
    <Section id="agenda">
      <SectionHeader
        eyebrow="Agenda"
        title="TWO DAYS."
        titleAccent="Zero excuses."
        description="Sunrise discipline meets business frameworks — a schedule built for operators who refuse average."
      />
      <SectionDivider />
      <AgendaMetaStrip />
      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
        {agenda.map((day, i) => (
          <AgendaDayCard key={day.day} day={day} index={i} />
        ))}
      </div>
      <Reveal delay={220}>
        <p className="mt-8 text-center text-xs leading-relaxed text-fg-subtle">
          Schedule subject to refinement as speakers confirm. VIP networking dinner
          is a separate evening block for VIP &amp; Elite ticket holders.
        </p>
      </Reveal>
    </Section>
  );
}
