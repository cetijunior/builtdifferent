import { cn } from "@/lib/utils";

export function SlashDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-4 py-2", className)}
      aria-hidden
    >
      <span className="h-px flex-1 bg-border" />
      <span className="text-display text-lg text-accent">/</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export function RedKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
      <span className="h-0.5 w-10 bg-accent" aria-hidden />
      {children}
    </p>
  );
}
