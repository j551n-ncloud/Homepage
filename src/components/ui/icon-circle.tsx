import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconCircleVariants = "default" | "subtle";

type IconCircleSize = "sm" | "md" | "lg";

const variantClasses: Record<IconCircleVariants, string> = {
  default: "bg-tech-500/12 text-tech-700",
  subtle: "bg-tech-500/8 text-tech-600 border border-tech-500/20",
};

const sizeClasses: Record<IconCircleSize, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const iconSizes: Record<IconCircleSize, string> = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
};

interface IconCircleProps {
  icon: LucideIcon;
  variant?: IconCircleVariants;
  size?: IconCircleSize;
  className?: string;
  iconClassName?: string;
}

export function IconCircle({
  icon: Icon,
  variant = "default",
  size = "md",
  className,
  iconClassName,
}: IconCircleProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <Icon className={cn("shrink-0", iconSizes[size], iconClassName)} strokeWidth={1.75} />
    </span>
  );
}
