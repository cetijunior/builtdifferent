"use client";

import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useAppShell } from "@/components/app-shell";
import { event } from "@/lib/event";
import {
  getHeroVideoSource,
  youtubeEmbedUrl,
  youtubePosterUrl,
} from "@/lib/youtube";
import { cn } from "@/lib/utils";
import { Play, Volume2 } from "lucide-react";

type VideoPlayerProps = {
  youtubeId?: string;
  caption?: string;
  variant?: "default" | "background" | "featured" | "cinematic";
  className?: string;
  initialPlaying?: boolean;
  posterUrl?: string;
  /** Use local 1080p hero MP4 when available (hero + watch lightbox) */
  useHeroSource?: boolean;
  /** Muted autoplay when scrolled into view (featured / moments) */
  autoplayOnView?: boolean;
};

export function VideoPlayer({
  youtubeId,
  caption = "Official experience film — 100+ entrepreneurs, cold plunges, brotherhood",
  variant = "default",
  className,
  initialPlaying = false,
  posterUrl: posterUrlProp,
  useHeroSource = false,
  autoplayOnView = false,
}: VideoPlayerProps) {
  const { heroPoster } = useAppShell();
  const [playing, setPlaying] = useState(initialPlaying || autoplayOnView);
  const id = youtubeId ?? event.vslYoutubeId;
  const poster =
    posterUrlProp ?? heroPoster ?? youtubePosterUrl(id, "maxresdefault");
  const heroSource = getHeroVideoSource();
  const { ref: inViewRef, inView } = useInView(0.15);
  const hero = useHeroSource ? heroSource : null;

  if (autoplayOnView && variant === "featured") {
    const ready = inView;
    return (
      <figure className={cn("flex flex-col", className)}>
        <div
          ref={inViewRef}
          className={cn(
            "relative w-full overflow-hidden bg-black",
            "aspect-video lg:aspect-[16/10]",
          )}
        >
          {ready && hero?.type === "mp4" ? (
            <video
              className="absolute inset-0 h-full w-full object-contain"
              src={hero.src}
              autoPlay
              muted
              playsInline
              controls
            />
          ) : ready ? (
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src={youtubeEmbedUrl(id, {
                autoplay: true,
                mute: true,
                hd: true,
                captions: true,
              })}
              title="Built Different official video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${poster})` }}
            />
          )}
        </div>
        {caption && (
          <figcaption className="border border-t-0 border-border bg-bg-card px-4 py-3 md:px-5 md:py-4">
            <p className="text-xs leading-relaxed text-fg-muted md:text-sm">{caption}</p>
            <p className="mt-2 font-mono text-[8px] uppercase tracking-wider text-fg-subtle md:text-[9px]">
              Autoplay · tap player for sound · captions when available
            </p>
          </figcaption>
        )}
      </figure>
    );
  }

  if (variant === "background") {
    return (
      <div
        className={cn("absolute inset-0 overflow-hidden bg-black", className)}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />

        {heroSource.type === "mp4" ? (
          <video
            className="video-cover video-cover--bg pointer-events-none absolute select-none"
            src={heroSource.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          />
        ) : (
          <iframe
            className="video-cover video-cover--bg pointer-events-none absolute border-0 select-none"
            src={youtubeEmbedUrl(id, {
              autoplay: true,
              mute: true,
              loop: true,
              controls: false,
              hd: true,
              background: true,
            })}
            title=""
            allow="autoplay; encrypted-media"
            tabIndex={-1}
          />
        )}

        {/* Blocks all clicks/hover from reaching the embed */}
        <div
          className="absolute inset-0 z-[1] cursor-default"
          aria-hidden
        />
      </div>
    );
  }

  if (playing) {
    const hero = useHeroSource ? getHeroVideoSource() : null;

    if (hero?.type === "mp4") {
      return (
        <div
          className={cn(
            "relative w-full overflow-hidden bg-black",
            variant === "featured" || variant === "cinematic"
              ? "aspect-video lg:aspect-[16/10]"
              : "aspect-video",
            className,
          )}
        >
          <video
            className="absolute inset-0 h-full w-full object-contain bg-black"
            src={hero.src}
            controls
            autoPlay
            playsInline
          />
        </div>
      );
    }

    return (
      <div
        className={cn(
          "relative w-full overflow-hidden bg-black",
          variant === "featured" || variant === "cinematic"
            ? "aspect-video lg:aspect-[16/10]"
            : "aspect-video",
          className,
        )}
      >
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={youtubeEmbedUrl(id, { autoplay: true, hd: true, captions: true })}
          title="Built Different official video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const isFeatured = variant === "featured";
  const showHeroPoster = useHeroSource && heroSource.type === "mp4";

  if (showHeroPoster && isFeatured && !playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className={cn(
          "group relative w-full overflow-hidden bg-bg-elevated text-left",
          "aspect-video lg:aspect-[16/10]",
          className,
        )}
        aria-label="Play Built Different official video"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroSource.src}
          muted
          playsInline
          preload="metadata"
          poster={poster}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-void/90 via-bg-void/25 to-bg-void/10" />
        <span
          className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-accent"
          aria-hidden
        />
        <span
          className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-accent"
          aria-hidden
        />
        <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.24em] text-fg/80">
          Official film · 1080p
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center border border-fg/25 bg-bg-void/70 text-fg backdrop-blur-sm transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white md:h-20 md:w-20">
            <Play className="ml-1 h-7 w-7 fill-current" strokeWidth={0} />
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 md:p-7">
          <p className="max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
            {caption}
          </p>
          <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle sm:flex">
            <Volume2 className="h-3.5 w-3.5" strokeWidth={2} />
            Tap to play
          </span>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={cn(
        "group relative w-full overflow-hidden bg-bg-elevated text-left",
        isFeatured ? "aspect-video lg:aspect-[16/10]" : "aspect-video",
        className,
      )}
      aria-label="Play Built Different official video"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url(${poster})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-void/90 via-bg-void/25 to-bg-void/10" />

      {isFeatured && (
        <>
          <span
            className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-accent"
            aria-hidden
          />
          <span
            className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-accent"
            aria-hidden
          />
          <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.24em] text-fg/80">
            Official film · Built Different
          </span>
        </>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={cn(
            "flex items-center justify-center border border-fg/25 bg-bg-void/70 text-fg backdrop-blur-sm transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white",
            isFeatured
              ? "h-16 w-16 md:h-20 md:w-20"
              : "h-[4.5rem] w-[4.5rem] md:h-20 md:w-20",
          )}
        >
          <Play className="ml-1 h-7 w-7 fill-current" strokeWidth={0} />
        </span>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 md:p-6",
          isFeatured && "md:p-7",
        )}
      >
        <p
          className={cn(
            "max-w-md leading-relaxed text-fg-muted",
            isFeatured ? "text-sm md:text-base" : "text-xs md:text-sm",
          )}
        >
          {caption}
        </p>
        {isFeatured && (
          <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle sm:flex">
            <Volume2 className="h-3.5 w-3.5" strokeWidth={2} />
            Tap to play
          </span>
        )}
      </div>
    </button>
  );
}
