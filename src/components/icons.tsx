import {
  Dumbbell,
  Snowflake,
  TrendingUp,
  Crown,
  Crosshair,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type ExperienceIconKey =
  | "workout"
  | "cold-plunge"
  | "sales"
  | "leadership"
  | "marketing"
  | "networking";

const iconMap: Record<ExperienceIconKey, LucideIcon> = {
  workout: Dumbbell,
  "cold-plunge": Snowflake,
  sales: TrendingUp,
  leadership: Crown,
  marketing: Crosshair,
  networking: Users,
};

export function ExperienceIcon({
  name,
  className,
  size = 22,
}: {
  name: ExperienceIconKey;
  className?: string;
  size?: number;
}) {
  const Icon = iconMap[name];
  return (
    <Icon
      className={cn("shrink-0", className)}
      size={size}
      strokeWidth={1.5}
      aria-hidden
    />
  );
}

export function IconRing({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("icon-ring", className)} aria-hidden>
      {children}
    </div>
  );
}
