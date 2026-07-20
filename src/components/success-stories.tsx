import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/section";
import { successStories } from "@/lib/content";

export function SuccessStories() {
  return (
    <Section id="wins" variant="elevated">
      <SectionHeader
        eyebrow="Ecosystem wins"
        title="BUILT DIFFERENT"
        titleAccent="Is bigger than one face."
        description="Pasquale built the room. The room keeps producing — operators, teams, and businesses that compound after the weekend."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {successStories.map((story, i) => (
          <Reveal key={story.title} delay={i * 60}>
            <article className="h-full border border-border bg-bg-card p-7 md:p-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                {story.tag}
              </span>
              <h3 className="text-display mt-3 text-xl text-fg md:text-2xl">
                {story.title}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-fg-subtle">
                {story.subject}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {story.story}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
