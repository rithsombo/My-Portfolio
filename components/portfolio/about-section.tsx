import { activityWeeks, aboutSummary } from "@/content/portfolio"

import { GitHubActivityGrid } from "@/components/portfolio/github-activity-grid"
import { SectionHeading } from "@/components/portfolio/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="border-t border-foreground/10 py-12 sm:py-16">
      <SectionHeading title="About Me" />
      <p className="mt-6 text-justify text-sm leading-8 text-foreground/72 sm:text-base">
        {aboutSummary}
      </p>

      <div className="mt-8 border border-foreground/10 p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title="GitHub Activity" />

          <a
            href="https://github.com/rithsombo"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-foreground/55 transition hover:text-foreground"
          >
            github.com/rithsombo
          </a>
        </div>

        <GitHubActivityGrid weeks={activityWeeks} />
      </div>
    </section>
  )
}
