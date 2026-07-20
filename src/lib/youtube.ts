import { siteConfig } from "@/lib/site-config";

const YOUTUBE_POSTER_SIZES = [
  "maxresdefault",
  "sddefault",
  "hqdefault",
] as const;

export function youtubePosterUrl(
  id: string,
  size: (typeof YOUTUBE_POSTER_SIZES)[number] = "maxresdefault",
) {
  return `https://img.youtube.com/vi/${id}/${size}.jpg`;
}

export function youtubeEmbedUrl(
  id: string,
  opts: {
    autoplay?: boolean;
    mute?: boolean;
    loop?: boolean;
    controls?: boolean;
    hd?: boolean;
    background?: boolean;
    captions?: boolean;
  } = {},
) {
  const {
    autoplay = false,
    mute = false,
    loop = false,
    controls = true,
    hd = true,
    background = false,
    captions = false,
  } = opts;

  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    ...(autoplay && { autoplay: "1" }),
    ...(mute && { mute: "1" }),
    ...(loop && { loop: "1", playlist: id }),
    ...(controls === false && { controls: "0" }),
    ...(hd && { vq: "hd1080" }),
    ...(captions && { cc_load_policy: "1", cc_lang_pref: "en" }),
    ...(background && {
      controls: "0",
      disablekb: "1",
      fs: "0",
      iv_load_policy: "3",
      cc_load_policy: "0",
      enablejsapi: "0",
    }),
  });

  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export async function resolveBestYoutubePoster(id: string): Promise<string> {
  for (const size of YOUTUBE_POSTER_SIZES) {
    const url = youtubePosterUrl(id, size);
    const minWidth = size === "maxresdefault" ? 1200 : 640;
    const ok = await probeImage(url, minWidth);
    if (ok) return url;
  }
  return youtubePosterUrl(id, "hqdefault");
}

function probeImage(src: string, minWidth: number): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img.naturalWidth >= minWidth);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

export function getHeroVideoSource() {
  const mp4 = siteConfig.videos.heroMp4;
  if (mp4) return { type: "mp4" as const, src: mp4 };
  return {
    type: "youtube" as const,
    id: siteConfig.videos.pasquale,
  };
}
