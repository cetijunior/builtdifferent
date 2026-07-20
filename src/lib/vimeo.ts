export function vimeoEmbedUrl(
  id: string,
  opts: {
    autoplay?: boolean;
    muted?: boolean;
    textTrack?: string;
    controls?: boolean;
    loop?: boolean;
  } = {},
) {
  const params = new URLSearchParams({
    title: "0",
    byline: "0",
    portrait: "0",
    dnt: "1",
    transparent: "0",
    ...(opts.controls === false ? { controls: "0" } : {}),
    ...(opts.autoplay && { autoplay: "1" }),
    ...(opts.muted && { muted: "1" }),
    ...(opts.loop && { loop: "1" }),
    ...(opts.textTrack && { texttrack: opts.textTrack }),
  });
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

export async function fetchVimeoThumbnail(
  id: string,
): Promise<string | null> {
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${id}`)}`,
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      thumbnail_url?: string;
      thumbnail_url_with_play_button?: string;
    };
    const url = data.thumbnail_url ?? data.thumbnail_url_with_play_button;
    if (!url) return null;
    // Request largest thumbnail Vimeo exposes in the CDN path
    return url.replace(/_\d+(x\d+)?\./, "_1280.");
  } catch {
    return null;
  }
}

export function vimeoWatchUrl(id: string) {
  return `https://vimeo.com/${id}`;
}
