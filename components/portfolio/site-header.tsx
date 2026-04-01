import { sectionLinks } from "@/content/portfolio"

import { HeaderActions } from "@/components/header-actions"

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 text-xs tracking-[0.28em] text-foreground/60 uppercase sm:flex-row sm:items-center sm:justify-between">
      <span>Rith Sombo</span>
      <HeaderActions sections={sectionLinks} />
    </header>
  )
}
