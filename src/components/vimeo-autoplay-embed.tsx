"use client";

import { useInView } from "@/hooks/use-in-view";
import { vimeoEmbedUrl } from "@/lib/vimeo";
import { cn } from "@/lib/utils";

type VimeoAutoplayEmbedProps = {
  vimeoId: string;
  title: string;
  /** Visible caption under the player */
  caption?: string;
  kicker?: string;
  className?: string;
  aspectClassName?: string;
  compact?: boolean;
  loop?: boolean;
};

export function VimeoAutoplayEmbed({
  vimeoId,
  title,
  caption,
  kicker,
  className,
  aspectClassName = "aspect-video",
  compact = false,
  loop = false,
}: VimeoAutoplayEmbedProps) {
  const { ref, inView } = useInView(0.15);

  return (
    <figure className={cn("flex flex-col", className)}>
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-black",
          aspectClassName,
          compact && "min-h-[200px]",
        )}
      >
        {inView ? (
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={vimeoEmbedUrl(vimeoId, {
              autoplay: true,
              muted: true,
              loop,
              textTrack: "en",
            })}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        )}
      </div>

      {(kicker || caption) && (
        <figcaption
          className={cn(
            "border border-t-0 border-border bg-bg-card",
            compact ? "px-3 py-2.5" : "px-4 py-3 md:px-5 md:py-4",
          )}
        >
          {kicker && (
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-accent md:text-[10px]">
              {kicker}
            </p>
          )}
          {caption && (
            <p
              className={cn(
                "leading-relaxed text-fg-muted",
                kicker ? "mt-1.5" : "",
                compact ? "text-[11px]" : "text-xs md:text-sm",
              )}
            >
              {caption}
            </p>
          )}
          <p className="mt-2 font-mono text-[8px] uppercase tracking-wider text-fg-subtle md:text-[9px]">
            {loop
              ? "Autoplay · loops · tap player for sound · captions when available"
              : "Autoplay · tap player for sound · captions when available"}
          </p>
        </figcaption>
      )}
    </figure>
  );
}
