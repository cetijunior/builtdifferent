"use client";

import { useEffect, useState } from "react";
import { event } from "@/lib/event";

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: false,
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center border-r border-border py-2 last:border-r-0">
      <span className="font-mono text-2xl font-medium tabular-nums tracking-tight text-fg md:text-3xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-fg-subtle">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const target = new Date(event.datesIso);
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (time.ended) {
    return (
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        Event in progress
      </p>
    );
  }

  return (
    <div className="flex overflow-hidden rounded-md border border-border bg-bg-void/50">
      <Unit value={time.days} label="Days" />
      <Unit value={time.hours} label="Hours" />
      <Unit value={time.minutes} label="Min" />
      <Unit value={time.seconds} label="Sec" />
    </div>
  );
}
