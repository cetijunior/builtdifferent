"use client";

import { Button } from "@/components/button";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg-void/90 p-4 backdrop-blur-xl md:hidden">
      <Button href="#pricing" size="lg" arrow className="w-full">
        Secure Your Seat
      </Button>
    </div>
  );
}
