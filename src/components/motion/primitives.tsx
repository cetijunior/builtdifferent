"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { type ReactNode, useRef } from "react";

export function KineticWords({
  text,
  className,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-flex overflow-hidden">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.85,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function HeroSpotlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-800);
  const my = useMotionValue(-800);
  const reduceMotion = useReducedMotion();
  const sx = useSpring(mx, { stiffness: 140, damping: 22, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 140, damping: 22, mass: 0.4 });
  const mask = useMotionTemplate`radial-gradient(280px 280px at ${sx}px ${sy}px, #000 0%, transparent 72%)`;

  function onMove(e: React.MouseEvent) {
    if (reduceMotion || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(-800);
        my.set(-800);
      }}
    >
      {children}
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[3] dot-grid opacity-60"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
          aria-hidden
        />
      )}
    </div>
  );
}
