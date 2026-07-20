import Image from "next/image";
import { ExperienceIcon } from "@/components/icons";
import { InstagramIcon } from "@/components/instagram-icon";
import {
  experienceMediaHref,
  type ExperienceVisual,
} from "@/lib/experience-visuals";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

type ExperienceVisualCardProps = {
  item: ExperienceVisual;
  className?: string;
};

export function ExperienceVisualCard({
  item,
  className,
}: ExperienceVisualCardProps) {
  const href = experienceMediaHref(item);
  const isYoutube = Boolean(item.youtubeId && !item.igShortcode);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-full min-h-[320px] flex-col overflow-hidden border border-border bg-bg-card",
        item.featured && "min-h-[360px] md:min-h-[420px]",
        className,
      )}
    >
      <div className="relative min-h-[200px] flex-1 overflow-hidden md:min-h-[220px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-[transform,filter] duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-bg-void/35 to-bg-void/10" />

        <div className="absolute left-4 top-4 flex items-center gap-2 border border-border/70 bg-bg-void/75 px-2.5 py-1.5 backdrop-blur-sm">
          <span className="flex h-8 w-8 items-center justify-center border border-border bg-bg-void/80 text-fg-muted">
            <ExperienceIcon name={item.icon} className="h-4 w-4" />
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
            {item.proof}
          </span>
        </div>

        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-border/70 bg-bg-void/75 backdrop-blur-sm transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          {isYoutube ? (
            <Play className="ml-0.5 h-4 w-4 fill-current" strokeWidth={0} />
          ) : (
            <InstagramIcon className="h-4 w-4" />
          )}
        </div>
      </div>

      <div className="relative border-t border-border bg-bg-card p-5 md:p-6">
        <h3 className="text-display text-xl text-fg md:text-2xl">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          {item.description}
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle transition-colors group-hover:text-accent">
          Watch the clip →
        </p>
      </div>
    </a>
  );
}
