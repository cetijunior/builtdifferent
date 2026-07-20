"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/section";
import { VideoPlayer } from "@/components/video-player";
import { VimeoPlayer } from "@/components/vimeo-player";
import { Button } from "@/components/button";
import {
  MOMENTS_PHOTO_INITIAL_VISIBLE,
  momentPhotos,
  momentTestimonials,
  momentVideos,
  momentWins,
  type MomentPhoto,
} from "@/lib/moments-showcase";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { InstagramIcon } from "@/components/instagram-icon";
import { TikTokIcon } from "@/components/tiktok-icon";
import { ChevronDown, ExternalLink, Quote } from "lucide-react";

function PhotoTile({ photo }: { photo: MomentPhoto }) {
  const isTikTok = photo.source === "tiktok";

  return (
    <a
      href={photo.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block min-h-[220px] overflow-hidden border border-border bg-bg-card sm:min-h-[260px]",
        photo.featured && "sm:min-h-[280px]",
      )}
    >
      <Image
        src={photo.image}
        alt={photo.label}
        fill
        className="object-cover transition-[transform,filter] duration-700 group-hover:scale-[1.04] group-hover:brightness-110"
        sizes={
          photo.featured
            ? "(max-width: 768px) 100vw, 66vw"
            : "(max-width: 768px) 50vw, 33vw"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-bg-void/45 to-bg-void/10" />
      <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center border border-border/60 bg-bg-void/70 backdrop-blur-sm transition-colors group-hover:border-accent group-hover:bg-accent">
        {isTikTok ? (
          <TikTokIcon className="h-3.5 w-3.5" />
        ) : (
          <InstagramIcon className="h-3.5 w-3.5" />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
          {photo.label}
        </p>
        <p className="mt-1.5 text-sm leading-snug text-fg">{photo.caption}</p>
      </div>
    </a>
  );
}

function MomentsPhotoGrid() {
  const [expanded, setExpanded] = useState(false);
  const hasMore = momentPhotos.length > MOMENTS_PHOTO_INITIAL_VISIBLE;
  const visiblePhotos = expanded
    ? momentPhotos
    : momentPhotos.slice(0, MOMENTS_PHOTO_INITIAL_VISIBLE);
  const hiddenCount = momentPhotos.length - MOMENTS_PHOTO_INITIAL_VISIBLE;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {visiblePhotos.map((photo, i) => (
          <Reveal
            key={photo.id}
            delay={120 + i * 40}
            className={cn("relative", photo.featured && "sm:col-span-2")}
          >
            <PhotoTile photo={photo} />
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {!expanded ? (
            <Button
              variant="secondary"
              size="md"
              onClick={() => setExpanded(true)}
              className="gap-2"
            >
              View more
              <span className="font-mono text-[10px] tracking-wider text-fg-muted">
                +{hiddenCount}
              </span>
              <ChevronDown className="h-4 w-4" strokeWidth={2} />
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="md"
              onClick={() => setExpanded(false)}
              className="gap-2"
            >
              Show less
              <ChevronDown className="h-4 w-4 rotate-180" strokeWidth={2} />
            </Button>
          )}
          <a
            href={siteConfig.tiktok.event}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-fg-muted transition-colors hover:text-accent"
          >
            <TikTokIcon className="h-3.5 w-3.5" />
            @builtdifferent.official2
            <ExternalLink className="h-3 w-3" strokeWidth={2} />
          </a>
        </div>
      )}
    </>
  );
}

export function MomentsGallery() {
  return (
    <Section id="moments" variant="surface" className="border-y border-border">
      <SectionHeader
        eyebrow="Moments"
        title="THIS IS BUILT DIFFERENT."
        titleAccent="See it. Hear it. Feel it."
        description="Stage. Ice. Brotherhood. Andy Elliott on camera. The room on Instagram. Proof you can watch — not promises in a slide deck."
        align="center"
      />

      {/* Featured videos */}
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <Reveal className="lg:col-span-7">
          <div className="border border-border bg-bg-card p-1.5 md:p-2">
            <VideoPlayer
              variant="featured"
              youtubeId={momentVideos.official.youtubeId}
              caption={momentVideos.official.caption}
              useHeroSource
              autoplayOnView
            />
            <p className="border-t border-border px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
              {momentVideos.official.title}
            </p>
          </div>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-5">
          <div className="h-full border border-border bg-bg-card p-1.5 md:p-2">
            <VimeoPlayer
              vimeoId={momentVideos.andy.vimeoId || siteConfig.videos.andyVimeo}
              variant="featured"
              kicker="Andy Elliott · Testimonial"
              caption={momentVideos.andy.caption}
              label="Andy Elliott testimonial"
            />
            <p className="border-t border-border px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
              {momentVideos.andy.title}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Photo grid */}
      <Reveal delay={100} className="mt-10">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            From the room
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.instagram.event}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-fg-muted transition-colors hover:text-accent"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              @builtdifferent.official
              <ExternalLink className="h-3 w-3" strokeWidth={2} />
            </a>
            <a
              href={siteConfig.tiktok.event}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-fg-muted transition-colors hover:text-accent"
            >
              <TikTokIcon className="h-3.5 w-3.5" />
              @builtdifferent.official2
              <ExternalLink className="h-3 w-3" strokeWidth={2} />
            </a>
          </div>
        </div>
        <MomentsPhotoGrid />
      </Reveal>

      {/* Testimonials */}
      <Reveal delay={160} className="mt-14">
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          Voices from the room
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {momentTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={180 + i * 50}>
              <blockquote className="flex h-full flex-col border border-border bg-bg-card p-6 md:p-7">
                <Quote
                  className="mb-4 h-6 w-6 text-accent/55"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="flex-1 text-sm leading-relaxed text-fg md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-4">
                  <cite className="not-italic text-xs font-medium uppercase tracking-wider text-fg">
                    {t.name}
                  </cite>
                  <p className="mt-1 text-xs text-fg-muted">{t.role}</p>
                  <p className="mt-2 font-mono text-[10px] text-accent">{t.result}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Wins strip */}
      <Reveal delay={220} className="mt-10">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {momentWins.map((win) => (
            <div key={win.title} className="bg-bg-card px-5 py-5 md:px-6 md:py-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                {win.tag}
              </p>
              <p className="text-display mt-2 text-base text-fg md:text-lg">{win.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-fg-muted">{win.line}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
