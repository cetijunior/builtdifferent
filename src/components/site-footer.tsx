import Link from "next/link";
import { Button } from "@/components/button";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionDivider } from "@/components/section";
import { InstagramIcon } from "@/components/instagram-icon";
import { TikTokIcon } from "@/components/tiktok-icon";
import { legalNav, primaryNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <Section className="text-center">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">
          {siteConfig.event.dates} · {siteConfig.event.city},{" "}
          {siteConfig.event.country}
        </p>
        <h2 className="text-display mx-auto mt-5 max-w-4xl text-[clamp(2.25rem,6vw,4rem)] text-fg">
          1,000+ TICKETS.
          <br />
          <span className="text-serif-accent text-[clamp(1.5rem,4.5vw,2.75rem)] text-accent">
            Zero excuses left.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-fg-muted">
          You&apos;ve seen the proof. You know who built this room. Buy the
          ticket or watch from the sidelines — but don&apos;t pretend you
          didn&apos;t have the chance.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="#pricing" size="lg" arrow>
            Buy your ticket now
          </Button>
          <Button
            href={siteConfig.instagram.event}
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 normal-case tracking-normal"
          >
            <InstagramIcon className="h-4 w-4" />
            DM &quot;{siteConfig.dmKeyword}&quot;
          </Button>
        </div>
      </Reveal>
      <SectionDivider />
    </Section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { legal, event, email, instagram, tiktok } = siteConfig;

  return (
    <footer className="border-t border-border bg-bg-void">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="/#" className="inline-flex items-center gap-3">
              <span className="text-display text-3xl text-accent">≠</span>
              <span className="flex flex-col">
                <span className="text-display text-lg tracking-[0.18em] text-fg">
                  BUILT DIFFERENT
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-fg-subtle">
                  {event.name}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
              {event.dates} · {event.venue}, {event.city}. Operator-grade live
              event by {legal.organizer}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={instagram.event}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-border text-fg-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={tiktok.event}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-border text-fg-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${email}`}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-subtle transition-colors hover:text-accent"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Site nav */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
              Navigate
            </p>
            <nav
              className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1"
              aria-label="Footer"
            >
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-subtle transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Legal">
              {legalNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-subtle transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Commerce notice */}
          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
              Payments
            </p>
            <p className="mt-4 text-xs leading-relaxed text-fg-muted">
              Tickets are sold under our{" "}
              <Link href="/legal/terms" className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent">
                Terms of Sale
              </Link>
              . Cards processed by {legal.paymentProcessor}. Emails only with
              consent — see{" "}
              <Link href="/legal/privacy" className="text-fg underline decoration-border underline-offset-4 hover:decoration-accent">
                Privacy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1 text-xs leading-relaxed text-fg-subtle">
              <p>
                © {year} {legal.brand}. Operated by {legal.entity}.
              </p>
              <p>
                {legal.address} · Support:{" "}
                <a
                  href={`mailto:${legal.supportEmail}`}
                  className="text-fg-muted transition-colors hover:text-accent"
                >
                  {legal.supportEmail}
                </a>
              </p>
            </div>
            <p className="max-w-md text-[11px] leading-relaxed text-fg-subtle md:text-right">
              By purchasing you agree to the Terms of Sale and Refund Policy. By
              joining the list you agree to receive updates and to our Privacy
              Policy. Unsubscribe anytime.
            </p>
          </div>
          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
            Made by{" "}
            <a
              href="https://rritjesade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted transition-colors hover:text-accent"
            >
              Rritje Sade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
