"use client";

type IntroLoaderProps = {
  progress: number;
};

export function IntroLoader({ progress }: IntroLoaderProps) {
  return (
    <div
      className="intro-loader fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg-void"
      role="status"
      aria-live="polite"
      aria-label="Loading Built Different"
    >
      <div className="intro-loader-grain absolute inset-0 opacity-30" aria-hidden />

      <div className="relative flex flex-col items-center px-6 text-center">
        <span
          className="intro-loader-pulse text-display text-6xl text-accent md:text-7xl"
          aria-hidden
        >
          ≠
        </span>

        <p className="text-display mt-6 text-2xl tracking-[0.2em] text-fg md:text-3xl">
          BUILT DIFFERENT
        </p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.32em] text-fg-subtle">
          By Pasquale Minasi
        </p>

        <div className="mt-12 w-56 border border-border md:w-64">
          <div
            className="h-0.5 bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-fg-muted">
          Loading experience
          <span className="intro-loader-dots" aria-hidden />
        </p>
        <p className="mt-2 font-mono text-[10px] tabular-nums text-fg-subtle">
          {progress}%
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
    </div>
  );
}
