import { FolderKanban } from "lucide-react"

import { projects } from "@/content/portfolio"

import { SectionHeading } from "@/components/portfolio/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-foreground/10 py-12 sm:py-16">
      <SectionHeading title="Selected Work" icon={<FolderKanban className="h-4 w-4" />} />

      <Accordion
        type="single"
        collapsible
        defaultValue={projects[0]?.name}
        className="mt-8 border-t border-foreground/10"
      >
        {projects.map((project, index) => (
          <AccordionItem
            key={project.name}
            value={project.name}
            className="border-b border-foreground/10"
          >
            <AccordionTrigger className="py-6 text-left hover:no-underline sm:py-7 [&>[data-slot=accordion-trigger-icon]]:mt-1 [&>[data-slot=accordion-trigger-icon]]:h-8 [&>[data-slot=accordion-trigger-icon]]:w-8 [&>[data-slot=accordion-trigger-icon]]:rounded-full [&>[data-slot=accordion-trigger-icon]]:border [&>[data-slot=accordion-trigger-icon]]:border-foreground/10 [&>[data-slot=accordion-trigger-icon]]:p-2 [&>[data-slot=accordion-trigger-icon]]:text-foreground/45">
              <div className="grid flex-1 gap-4 pr-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-foreground/38 uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-medium text-foreground">
                    {project.name}
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-foreground/62">
                  {project.summary}
                </p>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-6 text-sm sm:pb-7">
              <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <div aria-hidden="true" />
                <div className="max-w-2xl">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-foreground/10 px-3 py-1.5 text-[11px] tracking-[0.18em] text-foreground/55 uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm text-foreground/55 no-underline transition hover:text-foreground"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
