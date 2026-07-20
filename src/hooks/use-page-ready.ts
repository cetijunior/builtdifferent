"use client";

import { useEffect, useState } from "react";
import { preloadCriticalAssets } from "@/lib/preload";

const MIN_LOADER_MS = 1400;

export function usePageReady() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [heroPoster, setHeroPoster] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const started = performance.now();

    (async () => {
      try {
        const result = await preloadCriticalAssets((pct) => {
          if (!cancelled) setProgress(pct);
        });

        const elapsed = performance.now() - started;
        if (elapsed < MIN_LOADER_MS) {
          await new Promise((r) => setTimeout(r, MIN_LOADER_MS - elapsed));
        }

        if (!cancelled) {
          setHeroPoster(result.heroPoster);
          setProgress(100);
          requestAnimationFrame(() => {
            if (!cancelled) setReady(true);
          });
        }
      } catch {
        if (!cancelled) {
          setProgress(100);
          setReady(true);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { ready, progress, heroPoster };
}
