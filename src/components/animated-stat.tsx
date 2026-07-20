"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { formatStatValue, parseStatValue } from "@/lib/parse-stat-value";
import { cn } from "@/lib/utils";

type AnimatedStatProps = {
  value: string;
  className?: string;
  delay?: number;
  onComplete?: () => void;
};

export function AnimatedStat({
  value,
  className,
  delay = 0,
  onComplete,
}: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5, margin: "0px 0px -10% 0px" });
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const [display, setDisplay] = useState(() => formatStatValue(0, parsed));
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, parsed.target, {
      duration: 1.75,
      delay: delay / 1000,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(formatStatValue(v, parsed)),
      onComplete: () => {
        setDone(true);
        onComplete?.();
      },
    });

    return () => controls.stop();
  }, [delay, inView, onComplete, parsed]);

  return (
    <span
      ref={ref}
      className={cn(
        "tabular-nums transition-colors duration-300",
        done && "text-fg",
        className,
      )}
    >
      {display}
    </span>
  );
}
