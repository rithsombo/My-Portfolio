import { stackItems } from "@/content/portfolio"

import { LogoChip } from "@/components/portfolio/logo-chip"
import { SectionHeading } from "@/components/portfolio/section-heading"

export function TechStackSection() {
  return (
    <section id="stack" className="border-t border-foreground/10 py-12 sm:py-16">
      <SectionHeading title="Tech Stack" />

      <div className="mt-8 flex flex-wrap gap-4">
        {stackItems.map((item) => (
          <LogoChip key={item.name} name={item.name} size="md" />
        ))}
      </div>
    </section>
  )
}
