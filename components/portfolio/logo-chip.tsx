import { cn } from "@/lib/utils"

import { StackLogo } from "@/components/portfolio/stack-logo"

type LogoChipProps = {
  name: string
  size?: "sm" | "md"
  className?: string
}

export function LogoChip({
  name,
  size = "sm",
  className,
}: LogoChipProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center",
        size === "md" ? "h-10 w-10" : "h-8 w-8",
        className
      )}
    >
      <StackLogo name={name} size={size} />
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-full border border-foreground/10 bg-background px-3 py-1 text-[10px] tracking-[0.2em] whitespace-nowrap text-foreground/80 uppercase opacity-0 transition group-hover:opacity-100">
        {name}
      </span>
    </div>
  )
}
