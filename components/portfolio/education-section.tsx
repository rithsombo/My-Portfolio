import { educationItems } from "@/content/portfolio"
import { cn } from "@/lib/utils"

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
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-24 shrink-0 items-center justify-center overflow-hidden bg-foreground/[0.03] px-3">
                {item.logo ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.logo}
                      alt={`${item.school} logo`}
                      className={cn(
                        "h-full w-full object-contain",
                        item.logoClassName
                      )}
                    />
                  </>
                ) : (
                  <span className="text-sm font-medium tracking-[0.2em] text-foreground/45 uppercase">
                    {item.school
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                )}
              </div>

              <div>
                <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                  School
                </p>
                <h3 className="mt-2 text-lg font-medium text-foreground">
                  {item.school}
                </h3>
              </div>
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
