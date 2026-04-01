import { educationItems } from "@/content/portfolio"

import { SectionHeading } from "@/components/portfolio/section-heading"

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-t border-foreground/10 py-12 sm:py-16"
    >
      <SectionHeading title="Education" className="mb-8" />

      <div className="divide-y divide-foreground/10 border-t border-foreground/10">
        {educationItems.map((item) => (
          <div
            key={`${item.school}-${item.program}`}
            className="grid gap-4 py-6 sm:grid-cols-[1.2fr_1fr] sm:items-start sm:gap-6"
          >
            <div>
              <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                School
              </p>
              <h3 className="mt-2 text-lg font-medium text-foreground">
                {item.school}
              </h3>
            </div>
            <div>
              <p className="text-sm leading-7 text-foreground/72">{item.program}</p>
              <p className="mt-1 text-sm text-foreground/55">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
