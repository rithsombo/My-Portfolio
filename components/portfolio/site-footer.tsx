import { footerCopy } from "@/content/portfolio"

import { RetroGrid } from "@/components/ui/retro-grid"

export function SiteFooter() {
  return (
    <div
      aria-hidden="true"
      className="relative z-20 h-28 border-t border-foreground/10"
    >
      <RetroGrid
        className="absolute inset-0 opacity-45"
        angle={55}
        cellSize={42}
        lightLineColor="rgba(15, 23, 42, 0.35)"
        darkLineColor="rgba(255, 255, 255, 0.3)"
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1 px-6 py-5 text-center text-[10px] tracking-[0.24em] text-foreground/52 uppercase sm:px-10">
        <p>{footerCopy.copyright}</p>
        <p className="text-foreground/38">{footerCopy.detail}</p>
      </div>
    </div>
  )
}
