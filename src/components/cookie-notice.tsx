"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "bd-cookie-consent";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-bg-void/95 p-4 backdrop-blur-xl md:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-xs leading-relaxed text-fg-muted md:text-sm">
          We use essential cookies for security and checkout (Stripe). Embedded
          video or social content may set their own cookies when loaded. See our{" "}
          <Link
            href="/legal/cookies"
            className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent"
          >
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/legal/privacy"
            className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 border border-accent bg-accent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-hover"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
