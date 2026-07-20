"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { headerNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg-void/92 py-3 backdrop-blur-xl"
          : "bg-gradient-to-b from-bg-void/95 to-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8 lg:px-12">
        <a href="#" className="group flex items-center gap-3">
          <span className="text-display text-3xl text-accent transition-transform duration-200 group-hover:scale-105">
            ≠
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="text-display text-sm tracking-[0.18em] text-fg">
              BUILT DIFFERENT
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-fg-subtle">
              Pasquale Minasi · 3.0
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {headerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="/#pricing" size="md" className="hidden sm:inline-flex">
          Get tickets
        </Button>
      </div>
    </header>
  );
}
