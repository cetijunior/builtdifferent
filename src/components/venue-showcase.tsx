import Image from "next/image";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { venue, venueImages } from "@/lib/venue";

export function VenueShowcase() {
  return (
    <Section id="venue" className="!py-16 md:!py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <Reveal>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              Scale proof
            </p>
            <h2 className="text-display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-fg">
              THE EVENT LEVELED UP.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fg-muted md:text-lg">
              {venue.scaleLine}
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-fg-subtle">
              <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
              <span>{venue.name}</span>
              <span aria-hidden>·</span>
              <span>{venue.address}</span>
              <span aria-hidden>·</span>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-wider text-accent hover:text-accent-hover"
              >
                Maps →
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-2 gap-3">
            {venueImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/5] overflow-hidden border border-border bg-bg-card sm:aspect-[3/4]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 45vw, 280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-void/50 to-transparent" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
