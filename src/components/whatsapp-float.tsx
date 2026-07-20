"use client";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { MessageCircle } from "lucide-react";

export function WhatsappFloat() {
  if (!siteConfig.whatsapp) return null;

  return (
    <a
      href={whatsappUrl(
        `Hi — I'm interested in Built Different 3.0 (${siteConfig.event.dates}).`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center border border-[#25D366]/40 bg-[#128C7E] text-white shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 md:bottom-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
    </a>
  );
}
