import { certificates } from "@/content/portfolio"

import { SectionHeading } from "@/components/portfolio/section-heading"

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="border-t border-foreground/10 py-12 sm:py-16"
    >
      <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:items-start">
        <SectionHeading title="Certificates" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.title}
            className="flex aspect-[4/3] flex-col justify-between border border-foreground/10 p-5 sm:p-6"
          >
            <div>
              <p className="text-[10px] tracking-[0.28em] text-foreground/38 uppercase">
                {certificate.title}
              </p>
              <h3 className="mt-3 text-lg font-medium text-foreground">
                {certificate.meta}
              </h3>
            </div>

            <p className="text-sm text-foreground/50">{certificate.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
