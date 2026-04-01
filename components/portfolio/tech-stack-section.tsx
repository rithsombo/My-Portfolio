import { stackGroups } from "@/content/portfolio"

import { LogoChip } from "@/components/portfolio/logo-chip"
import { SectionHeading } from "@/components/portfolio/section-heading"

export function TechStackSection() {
  return (
    <section id="stack" className="border-t border-foreground/10 py-12 sm:py-16">
      <SectionHeading title="Tech Stack" />

      <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {stackGroups.map((group) => (
          <div key={group.label} className="space-y-4">
            <p className="text-[10px] tracking-[0.28em] text-foreground/42 uppercase">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-4">
              {group.items.map((item) => (
                <LogoChip key={item} name={item} size="md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
