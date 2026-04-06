import { AboutSection } from "@/components/portfolio/about-section"
import { CertificatesSection } from "@/components/portfolio/certificates-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import { IntroOverlay } from "@/components/intro-overlay"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { SiteHeader } from "@/components/portfolio/site-header"
import { TechStackSection } from "@/components/portfolio/tech-stack-section"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <IntroOverlay />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-background bg-[radial-gradient(circle,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-size-[20px_20px] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-300">
        <div className="flex min-h-screen flex-col px-6 py-8 sm:px-10 sm:py-10">
          <SiteHeader />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <TechStackSection />
          <ExperienceSection />
          <EducationSection />
          <CertificatesSection />
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
