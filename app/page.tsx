import Image from "next/image"
import {
  BriefcaseBusiness,
  FolderKanban,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react"

import { HeaderActions } from "@/components/header-actions"
import { HeroSignature } from "@/components/hero-signature"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RetroGrid } from "@/components/ui/retro-grid"
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark"
import { MongodbIconLight } from "@/components/ui/svgs/mongodbIconLight"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Page() {
  const projects = [
    {
      name: "Skincare Shop",
      href: "https://github.com/rithsombo/skincare-shop",
      summary:
        "An ecommerce storefront shaped around browsing comfort, product discovery, and a cart flow that stays lightweight instead of noisy.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Skincare Shop Portal",
      href: "https://github.com/rithsombo/skincare-shop-portal",
      summary:
        "An admin portal for operational data, sortable views, and dashboards where dense information still needs to feel easy to scan.",
      stack: ["Next.js", "React", "TypeScript", "Supabase"],
    },
    {
      name: "Small Parking System",
      href: "https://github.com/rithsombo/small-parking-system",
      summary:
        "A full-stack parking workflow that combines backend management with a practical interface for day-to-day operational use.",
      stack: ["Laravel", "Tailwind CSS", "SQL Server"],
    },
  ]

  const activityWeeks = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 4, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 3, 3, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]

  const certificates = [
    {
      title: "Certificate 01",
      meta: "Management Information System (MIS)",
      detail: "2026 at Setec Institute",
    },
    {
      title: "Certificate 02",
      meta: "ACE",
      detail: "completed all 12 levels of the General English Program in 2023.",
    },
    {
      title: "Certificate 03",
      meta: "IELTS",
      detail: "Achieved band score of 5.5 in 2023",
    },
    ,
    {
      title: "Certificate 04",
      meta: "BACII",
      detail: "Received Grade B in the BAC II examination, 2021",
    },
  ]

  const stack = [
    {
      name: "Next.js",
      logo: "https://svgl.app/library/nextjs_icon_dark.svg",
    },
    {
      name: "React",
      logo: "https://svgl.app/library/react_dark.svg",
    },
    {
      name: "TypeScript",
      logo: "https://svgl.app/library/typescript.svg",
    },
    {
      name: "Supabase",
      logo: "https://svgl.app/library/supabase.svg",
    },
    {
      name: "Laravel",
      logo: "https://svgl.app/library/laravel.svg",
    },
    {
      name: "Express.js",
      logo: "https://svgl.app/library/expressjs_dark.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://svgl.app/library/tailwindcss.svg",
    },
    {
      name: "Flutter",
      logo: "https://svgl.app/library/flutter.svg",
    },
    {
      name: "React Native",
      logo: "https://svgl.app/library/react_dark.svg",
    },
    {
      name: "TanStack Query",
      logo: "https://svgl.app/library/tanstack.svg",
    },
    {
      name: "Vue",
      logo: "https://svgl.app/library/vue.svg",
    },
    {
      name: "Pinia",
      logo: "https://svgl.app/library/pinia.svg",
    },
    {
      name: "Shopify",
      logo: "https://svgl.app/library/shopify.svg",
    },
    {
      name: "Vercel",
      logo: "https://svgl.app/library/vercel.svg",
    },
    {
      name: "Netlify",
      logo: "https://svgl.app/library/netlify.svg",
    },
    {
      name: "Flask",
      logo: "https://svgl.app/library/flask-dark.svg",
    },
    {
      name: "Python",
      logo: "https://svgl.app/library/python.svg",
    },
    {
      name: "PHP",
      logo: "https://svgl.app/library/php.svg",
    },
    {
      name: ".NET",
      logo: "https://svgl.app/library/dotnet.svg",
    },
    {
      name: "Convex",
      logo: "https://svgl.app/library/convex.svg",
    },
    {
      name: "SQL Server",
      logo: "https://svgl.app/library/sql-server.svg",
    },
    {
      name: "Motion",
      logo: "https://svgl.app/library/motion_dark.svg",
    },
    {
      name: "Codex",
      logo: "https://svgl.app/library/codex_dark.svg",
    },
    {
      name: "shadcn/ui",
      logo: "https://svgl.app/library/shadcn-ui_dark.svg",
    },
    {
      name: "SWR",
      logo: "https://svgl.app/library/swr-dark.svg",
    },
    {
      name: "Zustand",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEVHcEwdGhYdGhcODAuabFoAAAAREg8PDQrEfGgiHhrSiXUGBQSLXEokIh+wc18dGBR8XlJbVktURTtdWlFEPjhCPDY5NS89OTMtKiVJQTpxYlczMCt1ZlokIBxPRj9hVUtZT0UTExFoXFJ9UUCSg3N/dWqeYEbOVyqlPB4jT27bAAAAFHRSTlMAqIox/gk+cvrp+lj+zPoe4Oa0gtfDlpAAAAGJSURBVCiRlZLXcuMwDEXVbBU7tpMFUdglueT/v3BJKbGc2bws+KABz6DwXhXFf8ZHiPVLWu9eEsEZ37b0oqXK3/O+PhcVdcORn+xPYKa2evcxChk3d12zwXdz6tBEUeIViBi8H7e26IehQyUCIOABwPBhg3HojgogVQIQKQXUPmFJ3T3dKA/KhNvNenRm/w17mhHACwhdb1prO7Hgbr88r/JEsIS56knfQ6bmOlwyXQmNooLV8fEIqVbFrjslmQ5rlTJA6VpP0Vqtg+uGS15nLUz1OGlrbQhutNqZj9z1LTNsGgIzWTfyOI5sJ7e+ps89Q3M6GoraJTR6rSPjBudT0xgiO8lnuFptDeIi0tKWmqOA4mjDY07LeofmnGH7XAjIxekz2MywX/TZmfUtWXRiTs44RjRf6pYqG5VYmk1o0lGI7kvaHSe6hleSDFAK3VP4AyefIDsp2RkhdJtlRetQKBtJiiDNe2Xp7+sZ0zxIB4H7ffEzKueY2TC7/lD8G3VblWXZ1r+gX+MvRD0sQ1ZcHdsAAAAASUVORK5CYII=",
    },
    {
      name: "Redux",
      logo: "https://svgl.app/library/redux.svg",
    },
    {
      name: "Sentry",
      logo: "https://svgl.app/library/sentry.svg",
    },
    {
      name: "Zod",
      logo: "https://svgl.app/library/zod.svg",
    },
    {
      name: "Git",
      logo: "https://svgl.app/library/git.svg",
    },
    {
      name: "MongoDB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1280px-MongoDB_Logo.svg",
    },
    {
      name: "Prisma",
      logo: "https://svgl.app/library/prisma.svg",
    },
    {
      name: "Drizzle",
      logo: "https://svgl.app/library/drizzle-orm_dark.svg",
    },
  ]

  const stackGroups = [
    {
      label: "Frontend",
      items: ["Next.js", "React", "Vue", "TypeScript", "Tailwind CSS"],
    },
    {
      label: "Backend",
      items: ["Laravel", "PHP", "Express.js", "Flask", "Python", ".NET"],
    },
    {
      label: "Mobile",
      items: ["React Native", "Flutter"],
    },
    {
      label: "State & Data",
      items: [
        "TanStack Query",
        "SWR",
        "Pinia",
        "Zustand",
        "Redux",
        "Prisma",
        "Drizzle",
        "Zod",
      ],
    },
    {
      label: "Database & Platform",
      items: [
        "MongoDB",
        "SQL Server",
        "Supabase",
        "Convex",
        "Shopify",
        "Vercel",
        "Netlify",
      ],
    },
    {
      label: "UI & Tools",
      items: ["shadcn/ui", "Motion", "Sentry", "Git", "Codex"],
    },
  ]

  const experiences = [
    {
      company: "Sea Ventures",
      role: "Frontend Developer",
      summary: "",
      details: [
        {
          name: "Camboticket App",
          description:
            "Focused on mobile booking flows, notifications, profile updates, booking history, checkout, and activity search.",
          stack: [
            "React Native",
            "TanStack Query",
            "Motion",
            "shadcn/ui",
            "Zustand",
          ],
        },
        {
          name: "Haystack Global",
          description:
            "Worked on web product improvements in navigation and interface behavior.",
          stack: ["Next.js", "React", "Tailwind CSS", "Motion"],
        },
        {
          name: "Camboticket Website",
          description:
            "Contributed to adding Sentry into the Next.js website to improve error tracking and production debugging.",
          stack: ["Next.js", "React", "TypeScript", "Sentry"],
        },
      ],
    },
    {
      company: "Wonderpass",
      role: "Frontend Developer",
      summary: "",
      details: [
        {
          name: "Go.Transport",
          description:
            "Focused on booking and pass-related flows inside a mini app hosted within bank apps such as Wing, communicating through a bridge.",
          stack: [
            "Vue",
            "TypeScript",
            "Tailwind CSS",
            "Motion",
            "shadcn/ui",
            "Pinia",
          ],
        },
        {
          name: "Go.Ticket",
          description:
            "Focused on ticket booking flows, including search, selection, and checkout, inside mini apps hosted within Wing, Bakong, U-Pay, and Phillip.",
          stack: [
            "Vue",
            "TypeScript",
            "Tailwind CSS",
            "Motion",
            "shadcn/ui",
            "Pinia",
          ],
        },
        {
          name: "Go.Cinema",
          description:
            "Focused on cinema booking experiences in collaboration with Legend Cinema and Prime Cinema, inside mini apps hosted within Wing, Bakong, U-Pay, and Phillip.",
          stack: [
            "Vue",
            "TypeScript",
            "Tailwind CSS",
            "Motion",
            "shadcn/ui",
            "Pinia",
          ],
        },
        {
          name: "Cigardash",
          description:
            "Built a complete ecommerce website for selling cigars, covering the full flow from product selection to checkout.",
          stack: [
            "Next.js",
            "TypeScript",
            "shadcn/ui",
            "SWR",
            "Zod",
            "Zustand",
          ],
        },
        {
          name: "Live.",
          description:
            "Contributed to redesigning the event details page and checkout page.",
          stack: ["Next.js", "TypeScript"],
        },
      ],
    },
    {
      company: "International University",
      role: "Full-stack Developer",
      summary: "",
      details: [
        {
          name: "IU APP",
          description:
            "Built a complete full-stack mobile app for student requests, including leave permission, general request flows, tuition payment with ABA, and Firebase-powered notifications.",
          stack: ["React Native", "Expo", ".NET", "SQL Server", "Redux"],
        },
      ],
    },
  ]

  const education = [
    {
      school: "Hun Sen SereyPheab High School",
      program: "Grade 10-12",
      year: "2018-2021",
    },
    {
      school: "Australian Centre for Education (ACE)",
      program: "General English Program",
      year: "2021-2023",
    },
    {
      school: "Australian Centre for Education (ACE)",
      program: "IELTS",
      year: "2023",
    },
    {
      school: "SETEC Institute",
      program: "Management Information Systems",
      year: "2022-Present",
    },
  ]

  const stackLogoMap = Object.fromEntries(
    stack.map((item) => [item.name, item.logo])
  )
  const lightChipLogos = new Set(["Expo"])
  const themeAdaptiveLogos = new Set([
    "Next.js",
    "Express.js",
    "Flask",
    "Motion",
    "Codex",
    "PHP",
    "shadcn/ui",
    "SWR",
    "Drizzle",
    "Prisma",
    "Vercel",
  ])
  const sectionLinks = [
    {
      id: "hero",
      label: "Hero",
    },
    {
      id: "about",
      label: "About Me",
    },
    {
      id: "work",
      label: "Selected Work",
    },
    {
      id: "stack",
      label: "Tech Stack",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "education",
      label: "Education",
    },
    {
      id: "certificates",
      label: "Certificates",
    },
  ]

  const renderLogo = (name: string, size: "sm" | "md" = "sm") => {
    if (name === "MongoDB") {
      const iconClass = size === "md" ? "h-10 w-auto" : "h-5 w-auto"

      return (
        <>
          <MongodbIconLight className={`${iconClass} dark:hidden`} />
          <MongodbIconDark className={`${iconClass} hidden dark:block`} />
        </>
      )
    }

    if (name === "Next.js") {
      const iconClass =
        size === "md" ? "h-10 w-10 object-contain" : "h-5 w-5 object-contain"

      return (
        <Image
          src="https://svgl.app/library/nextjs_icon_dark.svg"
          alt="Next.js logo"
          className={iconClass}
          width={size === "md" ? 40 : 20}
          height={size === "md" ? 40 : 20}
          loading="lazy"
          unoptimized
        />
      )
    }

    const src = stackLogoMap[name]

    if (!src) {
      return null
    }

    const adaptiveClass = themeAdaptiveLogos.has(name)
      ? "brightness-0 dark:invert"
      : ""

    if (size === "md") {
      return (
        <Image
          src={src}
          alt={`${name} logo`}
          className={`h-10 w-10 object-contain ${adaptiveClass} ${lightChipLogos.has(name) ? "rounded-full bg-background p-2 ring-1 ring-foreground/10" : ""}`}
          width={40}
          height={40}
          loading="lazy"
          unoptimized
        />
      )
    }

    return (
      <Image
        src={src}
        alt={`${name} logo`}
        className={`h-5 w-5 object-contain ${adaptiveClass} ${lightChipLogos.has(name) ? "rounded-full bg-background p-1 ring-1 ring-foreground/10" : ""}`}
        width={20}
        height={20}
        loading="lazy"
        unoptimized
      />
    )
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-background bg-[radial-gradient(circle,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1200px]">
        <div className="flex min-h-screen flex-col px-6 py-8 sm:px-10 sm:py-10">
          <header className="flex flex-col gap-4 text-xs tracking-[0.28em] text-foreground/60 uppercase sm:flex-row sm:items-center sm:justify-between">
            <span>Rith Sombo</span>
            <HeaderActions sections={sectionLinks} />
          </header>

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
                      <AvatarFallback className="text-lg font-medium">
                        RS
                      </AvatarFallback>
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
                    href="https://haystack-solutions.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-sky-500/20 bg-sky-500/8 px-4 py-2 text-sm text-foreground/80 transition hover:bg-sky-500/12"
                  >
                    <span className="relative flex h-3 w-3 items-center justify-center">
                      <span className="absolute h-3 w-3 rounded-full bg-sky-400/35 blur-[2px]" />
                      <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-sky-400/45" />
                      <span className="relative h-2.5 w-2.5 rounded-full bg-sky-500" />
                    </span>
                    <span>Currently at Haystack Labs</span>
                  </a>
                </div>

                <div className="grid max-w-2xl gap-3 text-sm text-foreground/78 sm:grid-cols-2">
                  <a
                    href="https://maps.google.com/?q=Kien+Svay,+Kandal,+Cambodia"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-foreground/10 bg-foreground/[0.03] px-4 py-3 transition hover:bg-foreground/[0.06]"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-foreground/55" />
                    <span>Kien Svay, Kandal, Cambodia</span>
                  </a>
                  <a
                    href="tel:+855967596681"
                    className="flex items-center gap-3 border border-foreground/10 bg-foreground/[0.03] px-4 py-3 transition hover:bg-foreground/[0.06]"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-foreground/55" />
                    <span>+855 967596681</span>
                  </a>
                  <a
                    href="mailto:rith.sombo.22@gmail.com"
                    className="flex items-center gap-3 border border-foreground/10 bg-foreground/[0.03] px-4 py-3 transition hover:bg-foreground/[0.06]"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-foreground/55" />
                    <span>rith.sombo.22@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/rithsombo"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-foreground/10 bg-foreground/[0.03] px-4 py-3 transition hover:bg-foreground/[0.06]"
                  >
                    <GitBranch className="h-4 w-4 shrink-0 text-foreground/55" />
                    <span>github.com/rithsombo</span>
                  </a>
                  <div className="flex items-center gap-3 border border-foreground/10 bg-foreground/[0.03] px-4 py-3 transition hover:bg-foreground/[0.06]">
                    <UserRound className="h-4 w-4 shrink-0 text-foreground/55" />
                    <span>he/him</span>
                  </div>
                  <div className="flex items-center gap-3 border border-foreground/10 bg-foreground/[0.03] px-4 py-3 transition hover:bg-foreground/[0.06]">
                    <BriefcaseBusiness className="h-4 w-4 shrink-0 text-foreground/55" />
                    <span>Open to practical work</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-foreground/80">
                <a
                  href="https://www.facebook.com/profile.php?id=100067997441906&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 transition hover:bg-foreground/10"
                  aria-label="Facebook"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons/icons/facebook.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="invert-0 dark:invert"
                    unoptimized
                  />
                </a>
                <a
                  href="https://t.me/l3m0nad3"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 transition hover:bg-foreground/10"
                  aria-label="Telegram"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons/icons/telegram.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="invert-0 dark:invert"
                    unoptimized
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/rith-sombo-1811a0265"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 transition hover:bg-foreground/10"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="invert-0 dark:invert"
                    unoptimized
                  />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 transition hover:bg-foreground/10"
                  aria-label="X"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons/icons/x.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="invert-0 dark:invert"
                    unoptimized
                  />
                </a>
              </div>
            </div>

            <HeroSignature />
          </section>

          <section
            id="about"
            className="border-t border-foreground/10 py-12 sm:py-16"
          >
            <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
              About Me
            </p>
            <p className="mt-6 text-justify text-sm leading-8 text-foreground/72 sm:text-base">
              Hello, I&apos;m Rith Sombo, a developer focused on building
              practical web and mobile products with clear flows, maintainable
              structure, and interfaces that feel simple to use. Over the past
              few years, I&apos;ve worked across frontend and full-stack product
              development on ecommerce platforms, booking experiences, internal
              dashboards, APIs, and mobile apps using tools like Next.js, React,
              Vue, React Native, Laravel, Supabase, and TypeScript. My
              experience spans product work at companies such as Sea Ventures,
              Wonderpass, and International University, where I contributed to
              booking systems, admin tools, mini apps, ecommerce platforms, and
              student-facing mobile products. Outside day-to-day delivery, I
              enjoy exploring better frontend patterns, building useful tools,
              and turning ideas into working products with the right level of
              complexity.
            </p>

            <div className="mt-8 border border-foreground/10 p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                    GitHub Activity
                  </p>
                </div>

                <a
                  href="https://github.com/rithsombo"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/55 transition hover:text-foreground"
                >
                  github.com/rithsombo
                </a>
              </div>

              <div className="mt-6 w-full">
                <div
                  className="grid w-full gap-0.5"
                  style={{
                    gridTemplateColumns: `repeat(${activityWeeks.length}, minmax(0, 1fr))`,
                  }}
                >
                  {activityWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-rows-7 gap-0.5">
                      {week.map((level, dayIndex) => {
                        const toneClass = [
                          "bg-transparent",
                          "bg-foreground/[0.08]",
                          "bg-foreground/[0.18]",
                          "bg-foreground/[0.32]",
                          "bg-foreground/[0.92]",
                        ][level]

                        return (
                          <span
                            key={`${weekIndex}-${dayIndex}`}
                            className={`aspect-square w-full border border-foreground/8 ${toneClass}`}
                            aria-hidden="true"
                          />
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="work"
            className="border-t border-foreground/10 py-12 sm:py-16"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 text-foreground/55">
                  <FolderKanban className="h-4 w-4" />
                </span>
                <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                  Selected Work
                </p>
              </div>
            </div>

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

          <section
            id="stack"
            className="border-t border-foreground/10 py-12 sm:py-16"
          >
            <div>
              <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                Tech Stack
              </p>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {stackGroups.map((group) => (
                <div key={group.label} className="space-y-4">
                  <p className="text-[10px] tracking-[0.28em] text-foreground/42 uppercase">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="group relative flex h-10 w-10 items-center justify-center"
                      >
                        {renderLogo(item, "md")}
                        <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-full border border-foreground/10 bg-background px-3 py-1 text-[10px] tracking-[0.2em] whitespace-nowrap text-foreground/80 uppercase opacity-0 transition group-hover:opacity-100">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="border-t border-foreground/10 py-12 sm:py-16"
          >
            <p className="mb-8 text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
              Experience
            </p>

            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
              {experiences.map((experience) => (
                <div
                  key={experience.company}
                  className="divide-y divide-foreground/10"
                >
                  <div className="grid gap-4 py-6 sm:grid-cols-[1.1fr_1.3fr_1fr] sm:items-start sm:gap-6">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                        Company
                      </p>
                      <h3 className="mt-2 text-lg font-medium text-foreground">
                        {experience.company}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/55">
                        {experience.role}
                      </p>
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
                              <div
                                key={item}
                                className="group relative flex h-8 w-8 items-center justify-center"
                              >
                                {renderLogo(item)}
                                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-full border border-foreground/10 bg-background px-3 py-1 text-[10px] tracking-[0.2em] whitespace-nowrap text-foreground/80 uppercase opacity-0 transition group-hover:opacity-100">
                                  {item}
                                </span>
                              </div>
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

          <section
            id="education"
            className="border-t border-foreground/10 py-12 sm:py-16"
          >
            <p className="mb-8 text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
              Education
            </p>

            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
              {education.map((item) => (
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
                    <p className="text-sm leading-7 text-foreground/72">
                      {item.program}
                    </p>
                    <p className="mt-1 text-sm text-foreground/55">
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="certificates"
            className="border-t border-foreground/10 py-12 sm:py-16"
          >
            <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:items-start">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                  Certificates
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {certificates.map((certificate) => (
                <div
                  key={certificate?.title}
                  className="flex aspect-[4/3] flex-col justify-between border border-foreground/10 p-5 sm:p-6"
                >
                  <div>
                    <p className="text-[10px] tracking-[0.28em] text-foreground/38 uppercase">
                      {certificate?.title}
                    </p>
                    <h3 className="mt-3 text-lg font-medium text-foreground">
                      {certificate?.meta}
                    </h3>
                  </div>

                  <p className="text-sm text-foreground/50">
                    {certificate?.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="relative z-20 h-28 border-t border-foreground/10"
      >
        <RetroGrid
          className="absolute inset-0 opacity-45"
          angle={55}
          cellSize={42}
          lightLineColor="rgba(15, 23, 42, 0.35)"
          darkLineColor="rgba(255, 255, 255, 0.3)"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1 px-6 py-5 text-center text-[10px] tracking-[0.24em] text-foreground/52 uppercase sm:px-10">
          <p>© 2026 Rith Sombo</p>
          <p className="text-foreground/38">
            Built with Next.js, shadcn/ui, and Magic UI
          </p>
        </div>
      </div>
    </main>
  )
}
