import { experiences } from "@/content/portfolio"

import { LogoChip } from "@/components/portfolio/logo-chip"
import { SectionHeading } from "@/components/portfolio/section-heading"

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-foreground/10 py-12 sm:py-16"
    >
      <SectionHeading title="Experience" className="mb-8" />

      <div className="divide-y divide-foreground/10 border-t border-foreground/10">
        {experiences.map((experience) => (
          <div key={experience.company} className="divide-y divide-foreground/10">
            <div className="grid gap-4 py-6 sm:grid-cols-[1.1fr_1.3fr_1fr] sm:items-start sm:gap-6">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                  Company
                </p>
                <h3 className="mt-2 text-lg font-medium text-foreground">
                  {experience.company}
                </h3>
                <p className="mt-1 text-sm text-foreground/55">{experience.role}</p>
              </div>
              {experience.summary ? (
                <p className="text-sm leading-7 text-foreground/74 sm:col-span-2">
                  {experience.summary}
                </p>
              ) : (
                <div className="sm:col-span-2" />
              )}
            </div>

            {experience.details.map((detail, index) => (
              <div
                key={detail.name}
                className="grid gap-4 py-6 sm:grid-cols-[1.1fr_1.9fr] sm:items-start sm:gap-6"
              >
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                    Work {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-base font-medium text-foreground">
                    {detail.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-foreground/72">
                    {detail.description}
                  </p>
                  <div className="mt-3">
                    <p className="text-[10px] tracking-[0.2em] text-foreground/45 uppercase">
                      Stack used
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {detail.stack.map((item) => (
                        <LogoChip key={item} name={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
