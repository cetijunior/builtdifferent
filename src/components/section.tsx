import { cn } from "@/lib/utils";
import { GrainOverlay } from "@/components/grain-overlay";
import { Reveal } from "@/components/motion/reveal";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "surface" | "elevated";
  withGrain?: boolean;
};

export function Section({
  id,
  className,
  children,
  variant = "default",
  withGrain = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-5 py-24 md:px-8 md:py-32 lg:px-12",
        variant === "surface" && "bg-bg-surface",
        variant === "elevated" && "bg-bg-elevated",
        className,
      )}
    >
      {withGrain && <GrainOverlay />}
      <div className="relative z-10 mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
          <span className="h-0.5 w-10 bg-accent" aria-hidden />
          <span>{eyebrow}</span>
          {align === "center" && (
            <span className="h-0.5 w-10 bg-accent" aria-hidden />
          )}
        </p>
      )}
      <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-fg">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="text-serif-accent text-[clamp(1.5rem,4vw,2.5rem)] text-fg-muted">
              {titleAccent}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-fg-muted md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function SectionDivider() {
  return <div className="section-rule my-4" aria-hidden />;
}
