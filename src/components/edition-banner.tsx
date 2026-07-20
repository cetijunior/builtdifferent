"use client";

import { AssetImage } from "@/components/asset-image";
import { cn } from "@/lib/utils";

const PORTRAIT_FALLBACK =
  "https://img.youtube.com/vi/KWyb_lM3YR4/maxresdefault.jpg";

const TEAM_FALLBACK = "/assets/experience/networking.jpg";

type EditionBannerProps = {
  id: string;
  headline: string;
  headlineLabel: string;
  portrait: string;
  portraitPosition?: string;
  bannerKind?: "portrait" | "team";
  active?: boolean;
  className?: string;
};

const bannerConfig: Record<string, { tag: string }> = {
  "1.0": { tag: "Origin" },
  "2.0": { tag: "2× the room" },
  "3.0": { tag: "Scale jump" },
};

export function EditionBanner({
  id,
  headline,
  headlineLabel,
  portrait,
  portraitPosition = "center",
  bannerKind = "portrait",
  active,
  className,
}: EditionBannerProps) {
  const config = bannerConfig[id] ?? bannerConfig["1.0"];
  const editionClass = id.replace(".", "-");
  const isTeam = bannerKind === "team";

  return (
    <div
      className={cn(
        "edition-banner relative aspect-[4/3] overflow-hidden",
        `edition-banner--${editionClass}`,
        isTeam && "edition-banner--team",
        active && "edition-banner--active",
        className,
      )}
    >
      <div className="edition-banner__portrait" style={{ ["--portrait-pos" as string]: portraitPosition }}>
        <AssetImage
          src={portrait}
          fallback={isTeam ? TEAM_FALLBACK : PORTRAIT_FALLBACK}
          alt=""
          fill
          className={cn(
            "object-cover contrast-[1.06]",
            isTeam ? "saturate-[0.95] brightness-[0.92]" : "grayscale-[15%] contrast-[1.08] saturate-[0.85]",
          )}
        />
      </div>
      <div className="edition-banner__scrim" aria-hidden />

      <div className="edition-banner__stripes" />
      <div className="edition-banner__grain" />
      <div className="edition-banner__glow" />

      <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
            {config.tag}
          </span>
          <span className="text-display text-5xl leading-none text-fg/15 md:text-6xl">
            {id}
          </span>
        </div>

        <div>
          <p
            className={cn(
              "text-display leading-none text-fg drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]",
              id === "3.0" ? "text-5xl text-accent md:text-6xl" : "text-4xl md:text-5xl",
            )}
          >
            {headline}
          </p>
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            {headlineLabel}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-accent/80" />
    </div>
  );
}
