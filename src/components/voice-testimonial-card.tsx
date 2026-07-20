"use client";

import { VimeoAutoplayEmbed } from "@/components/vimeo-autoplay-embed";
import type { BdVoice } from "@/lib/bd-voices";
import { cn } from "@/lib/utils";

export function VoiceTestimonialCard({
  voice,
  className,
}: {
  voice: BdVoice;
  className?: string;
}) {
  return (
    <div className={cn("shrink-0 sm:shrink", className)}>
      <VimeoAutoplayEmbed
        vimeoId={voice.vimeoId}
        title={`${voice.name} — Built Different testimonial`}
        kicker={voice.name}
        caption={voice.caption}
        aspectClassName="aspect-[9/16] min-h-[220px]"
        compact
        loop
        className="w-[168px] border border-border sm:w-auto"
      />
    </div>
  );
}
