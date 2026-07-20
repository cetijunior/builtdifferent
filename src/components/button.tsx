import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  arrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "relative inline-flex items-center justify-center gap-2.5 border font-semibold uppercase tracking-[0.1em] transition-[background-color,border-color,color] duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "border-accent bg-accent text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border-border bg-bg-elevated/90 text-fg hover:border-fg/25 hover:bg-bg-elevated",
  ghost:
    "border-transparent bg-transparent text-fg-muted hover:border-transparent hover:bg-transparent hover:text-fg",
};

const sizes = {
  md: "min-h-11 px-7 py-2.5 text-xs",
  lg: "min-h-12 px-9 py-3.5 text-sm",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
} = {}) {
  return cn(base, variants[variant!], sizes[size!], className);
}

export function Button({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
  target,
  rel,
  onClick,
  arrow = false,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = buttonClassName({ variant, size, className });
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2} />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={classes}
    >
      {content}
    </button>
  );
}
