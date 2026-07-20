import { siteConfig } from "@/lib/site-config";
import { resolveBestYoutubePoster, youtubePosterUrl } from "@/lib/youtube";

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed: ${src}`));
    img.src = src;
  });
}

async function preloadOptionalImage(src: string): Promise<void> {
  try {
    await preloadImage(src);
  } catch {
    /* optional asset */
  }
}

/** Buffer enough of the hero MP4 to start — cap wait so loader stays snappy. */
function preloadHeroVideo(src: string): Promise<void> {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      video.removeAttribute("src");
      video.load();
      resolve();
    };

    video.addEventListener("canplay", finish, { once: true });
    video.addEventListener("error", finish, { once: true });
    // Never hold the intro longer than ~2.8s for video alone
    setTimeout(finish, 2800);
    video.src = src;
    video.load();
  });
}

export async function preloadAndyVimeoPoster(vimeoId: string): Promise<void> {
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${vimeoId}`)}`,
    );
    if (!res.ok) return;
    const data = (await res.json()) as { thumbnail_url?: string };
    if (data.thumbnail_url) {
      const hd = data.thumbnail_url.replace(/_\d+(x\d+)?\./, "_1280.");
      await preloadOptionalImage(hd);
    }
  } catch {
    /* vimeo optional at preload */
  }
}

/** Critical assets — resolves when everything the first paint needs is ready. */
export async function preloadCriticalAssets(
  onProgress: (pct: number) => void,
): Promise<{ heroPoster: string }> {
  const videoId = siteConfig.videos.pasquale;
  let heroPoster = youtubePosterUrl(videoId, "hqdefault");

  const steps: { weight: number; run: () => Promise<void> }[] = [
    {
      weight: 15,
      run: async () => {
        if (typeof document !== "undefined" && document.fonts?.ready) {
          await document.fonts.ready;
        }
      },
    },
    {
      weight: 35,
      run: async () => {
        await new Promise<void>((resolve) => {
          if (document.readyState === "complete") resolve();
          else window.addEventListener("load", () => resolve(), { once: true });
        });
      },
    },
    {
      weight: 30,
      run: async () => {
        const mp4 = siteConfig.videos.heroMp4;
        if (mp4) {
          await preloadHeroVideo(mp4);
          heroPoster = youtubePosterUrl(videoId, "maxresdefault");
        } else {
          heroPoster = await resolveBestYoutubePoster(videoId);
          await preloadImage(heroPoster);
        }
      },
    },
    {
      weight: 10,
      run: () => preloadOptionalImage(siteConfig.assets.pasqualeHero),
    },
    {
      weight: 10,
      run: () => preloadAndyVimeoPoster(siteConfig.videos.andyVimeo),
    },
  ];

  let done = 0;
  const total = steps.reduce((s, x) => s + x.weight, 0);

  for (const step of steps) {
    await step.run();
    done += step.weight;
    onProgress(Math.min(100, Math.round((done / total) * 100)));
  }

  onProgress(100);
  return { heroPoster };
}
