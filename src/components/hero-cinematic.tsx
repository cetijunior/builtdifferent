"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/button";
import { VideoPlayer } from "@/components/video-player";
import { heroCopy } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Play, X } from "lucide-react";
import { buttonClassName } from "@/components/button";

export function HeroCinematic() {
  const [watchOpen, setWatchOpen] = useState(false);

  const closeWatch = useCallback(() => setWatchOpen(false), []);

  useEffect(() => {
    if (!watchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeWatch();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [watchOpen, closeWatch]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed cinematic video */}
      <div className="absolute inset-0">
        <VideoPlayer
          variant="background"
          youtubeId={siteConfig.videos.pasquale}
        />
        {/* Scrim layers — also block video interaction */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-void via-bg-void/55 to-bg-void/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg-void/85 via-bg-void/40 to-transparent md:from-bg-void/90 md:via-bg-void/50"
          aria-hidden
        />
      </div>

      {/* Main hero content — Tony-style left anchor */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col px-5 pb-36 pt-28 md:px-8 md:pb-40 md:pt-36 lg:px-12">
        <div className="flex flex-1 flex-col justify-center">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            {heroCopy.badge}
          </p>

          <h1 className="max-w-[14ch] text-[clamp(2.5rem,9vw,5rem)] font-light leading-[1.02] tracking-[-0.02em] text-fg md:max-w-[12ch]">
            {heroCopy.cinematicHeadline}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted md:mt-8 md:text-lg">
            {heroCopy.cinematicSub}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Button href="#pricing" size="lg" arrow className="w-full sm:w-auto">
              {heroCopy.cta}
            </Button>
            <button
              type="button"
              onClick={() => setWatchOpen(true)}
              className={buttonClassName({
                variant: "secondary",
                size: "lg",
                className:
                  "w-full border-fg/25 bg-bg-void/50 normal-case tracking-normal backdrop-blur-sm sm:w-auto",
              })}
            >
              <Play className="h-4 w-4 fill-current" strokeWidth={0} />
              {heroCopy.watch}
            </button>
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
            {heroCopy.micro}
          </p>
        </div>
      </div>

      {/* Bottom event bar — Tony Robbins pattern */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-fg/10 bg-bg-void/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-5 lg:px-12">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-fg-subtle">
              {heroCopy.eventLabel}
            </p>
            <p className="text-display mt-1 text-xl text-fg md:text-2xl">
              Built Different 3.0
            </p>
            <p className="mt-1 text-sm text-fg-muted">
              {siteConfig.event.dates} · {siteConfig.event.venue} ·{" "}
              {siteConfig.event.city}, {siteConfig.event.country}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <a
              href="#agenda"
              className={buttonClassName({
                variant: "secondary",
                size: "md",
              })}
            >
              {heroCopy.eventDetails}
            </a>
            <button
              type="button"
              onClick={() => setWatchOpen(true)}
              className={buttonClassName({
                variant: "primary",
                size: "md",
                className:
                  "border-fg bg-fg text-bg-void hover:border-fg hover:bg-fg hover:opacity-90",
              })}
            >
              <Play className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
              {heroCopy.watch}
            </button>
          </div>
        </div>
      </div>

      {/* Watch lightbox */}
      {watchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-void/95 p-4 md:p-10"
          role="dialog"
          aria-modal
          aria-label="Watch Built Different film"
        >
          <button
            type="button"
            onClick={closeWatch}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-border text-fg transition-colors hover:border-fg/30 md:right-8 md:top-8"
            aria-label="Close video"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <VideoPlayer
              variant="featured"
              youtubeId={siteConfig.videos.pasquale}
              caption="Official Built Different experience film"
              initialPlaying
              useHeroSource
            />
          </div>
          <button
            type="button"
            className="absolute inset-0 -z-10"
            onClick={closeWatch}
            aria-label="Close"
          />
        </div>
      )}
    </section>
  );
}
