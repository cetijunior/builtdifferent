"use client";

import { createContext, useContext } from "react";
import { CookieNotice } from "@/components/cookie-notice";
import { IntroLoader } from "@/components/intro-loader";
import { usePageReady } from "@/hooks/use-page-ready";
import { cn } from "@/lib/utils";

type ShellContextValue = {
  heroPoster: string | null;
};

const ShellContext = createContext<ShellContextValue>({ heroPoster: null });

export function useAppShell() {
  return useContext(ShellContext);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const { ready, progress, heroPoster } = usePageReady();

  return (
    <ShellContext.Provider value={{ heroPoster }}>
      {!ready && <IntroLoader progress={progress} />}
      <div
        className={cn(
          "transition-opacity duration-700 ease-out",
          ready ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!ready}
      >
        {children}
      </div>
      {ready ? <CookieNotice /> : null}
    </ShellContext.Provider>
  );
}
