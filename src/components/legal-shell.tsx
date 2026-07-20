import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { legalNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

type LegalShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function LegalShell({ title, description, children }: LegalShellProps) {
  return (
    <div className="min-h-screen bg-bg-void">
      <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-subtle transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Back to Built Different
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
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
            <p className="mt-8 text-xs leading-relaxed text-fg-subtle">
              Updated {siteConfig.legal.lastUpdated}
              <br />
              {siteConfig.legal.entity}
            </p>
          </aside>

          <article>
            <h1 className="text-display text-4xl text-fg md:text-5xl">{title}</h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
                {description}
              </p>
            ) : null}
            <div className="legal-prose mt-10 space-y-6 text-base leading-relaxed text-fg-muted [&_a]:text-fg [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 hover:[&_a]:decoration-accent [&_h2]:pt-4 [&_h2]:font-mono [&_h2]:text-[11px] [&_h2]:uppercase [&_h2]:tracking-[0.22em] [&_h2]:text-accent [&_li]:mt-2 [&_strong]:font-medium [&_strong]:text-fg [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {children}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
