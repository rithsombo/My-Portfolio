import { type ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  title: string
  icon?: ReactNode
  className?: string
}

export function SectionHeading({
  title,
  icon,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(icon ? "flex items-center gap-3" : "", className)}>
      {icon ? (
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 text-foreground/55">
          {icon}
        </span>
      ) : null}
      <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
        {title}
      </p>
    </div>
  )
}
