"use client";

import { VimeoAutoplayEmbed } from "@/components/vimeo-autoplay-embed";
import { cn } from "@/lib/utils";

type VimeoPlayerProps = {
  vimeoId: string;
  caption?: string;
  kicker?: string;
  variant?: "default" | "featured";
  className?: string;
  label?: string;
};

export function VimeoPlayer({
  vimeoId,
  caption,
  kicker,
  variant = "default",
  className,
  label = "Video testimonial",
}: VimeoPlayerProps) {
  const isFeatured = variant === "featured";

  return (
    <div className={cn(isFeatured && "relative", className)}>
      {isFeatured && (
        <>
          <span
            className="pointer-events-none absolute left-0 top-0 z-10 h-10 w-10 border-l-2 border-t-2 border-accent"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute bottom-0 right-0 z-10 h-10 w-10 border-b-2 border-r-2 border-accent"
            aria-hidden
          />
        </>
      )}
      <VimeoAutoplayEmbed
        vimeoId={vimeoId}
        title={label}
        caption={caption}
        kicker={kicker ?? (isFeatured ? "Andy Elliott · Testimonial" : undefined)}
        aspectClassName={
          isFeatured ? "aspect-video lg:aspect-[16/10]" : "aspect-video"
        }
      />
    </div>
  );
}
