import Image from "next/image"
import {
  BriefcaseBusiness,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  UserRound,
  type LucideIcon,
} from "lucide-react"

import {
  contactItems,
  currentRole,
  socialLinks,
  type ContactIcon,
  type ContactItem,
  type SocialIcon,
} from "@/content/portfolio"

import { HeroSignature } from "@/components/hero-signature"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const contactIconMap: Record<ContactIcon, LucideIcon> = {
  "briefcase-business": BriefcaseBusiness,
  "git-branch": GitBranch,
  mail: Mail,
  "map-pin": MapPin,
  phone: Phone,
  "user-round": UserRound,
}

const socialIconMap: Record<SocialIcon, string> = {
  facebook: "https://cdn.jsdelivr.net/npm/simple-icons/icons/facebook.svg",
  telegram: "https://cdn.jsdelivr.net/npm/simple-icons/icons/telegram.svg",
  linkedin: "https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg",
  x: "https://cdn.jsdelivr.net/npm/simple-icons/icons/x.svg",
}

function ContactCard({ item }: { item: ContactItem }) {
  const Icon = contactIconMap[item.icon]
  const className =
    "flex items-center gap-3 border border-foreground/10 bg-foreground/[0.03] px-4 py-3 transition hover:bg-foreground/[0.06]"
  const content = (
    <>
      <Icon className="h-4 w-4 shrink-0 text-foreground/55" />
      <span>{item.label}</span>
    </>
  )

  if (!item.href) {
    return <div className={className}>{content}</div>
  }

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  )
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative grid flex-1 items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="relative z-10 space-y-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="size-20 border border-foreground/10 ring-4 ring-foreground/[0.04] sm:size-24">
                <AvatarImage src="/img/logo.png" alt="Profile photo" />
                <AvatarFallback className="text-lg font-medium">RS</AvatarFallback>
              </Avatar>
              <div className="absolute top-0 left-0 -translate-x-2 -translate-y-2 overflow-hidden border border-foreground/10 shadow-sm">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg"
                  alt="Cambodia flag"
                  width={28}
                  height={18}
                  className="h-[18px] w-[28px] object-cover sm:h-5 sm:w-8"
                  unoptimized
                />
              </div>
            </div>
            <a
              href={currentRole.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-sky-500/20 bg-sky-500/8 px-4 py-2 text-sm text-foreground/80 transition hover:bg-sky-500/12"
            >
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute h-3 w-3 rounded-full bg-sky-400/35 blur-[2px]" />
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-sky-400/45" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-sky-500" />
              </span>
              <span>{currentRole.label}</span>
            </a>
          </div>

          <div className="grid max-w-2xl gap-3 text-sm text-foreground/78 sm:grid-cols-2">
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-foreground/80">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 transition hover:bg-foreground/10"
              aria-label={link.label}
            >
              <Image
                src={socialIconMap[link.icon]}
                alt=""
                width={18}
                height={18}
                className="invert-0 dark:invert"
                unoptimized
              />
            </a>
          ))}
        </div>
      </div>

      <HeroSignature />
    </section>
  )
}
