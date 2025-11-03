import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeTone = "tech" | "neutral" | "muted";
type IconBadgeSize = "sm" | "md" | "lg";

interface IconBadgeProps {
  icon: LucideIcon;
  tone?: IconBadgeTone;
  size?: IconBadgeSize;
  className?: string;
  iconClassName?: string;
}

const toneClasses: Record<IconBadgeTone, string> = {
  tech: "bg-tech-500/12 text-tech-700 border-tech-500/25 dark:bg-tech-500/24 dark:text-tech-100 dark:border-tech-400/40",
  neutral: "bg-tech-500/12 text-tech-700 border-tech-500/25 dark:bg-tech-500/24 dark:text-tech-100 dark:border-tech-400/40",
  muted: "bg-tech-500/12 text-tech-700 border-tech-500/25 dark:bg-tech-500/24 dark:text-tech-100 dark:border-tech-400/40",
};

const sizeClasses: Record<IconBadgeSize, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const iconSizes: Record<IconBadgeSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function IconBadge({
  icon: Icon,
  tone = "tech",
  size = "md",
  className,
  iconClassName,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-sm border font-medium tracking-tight transition-colors",
        toneClasses[tone],
        sizeClasses[size],
        className
      )}
    >
      <Icon
        className={cn("shrink-0", iconSizes[size], iconClassName)}
        strokeWidth={1.75}
      />
    </span>
  );
}
