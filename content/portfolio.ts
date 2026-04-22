export type SectionLink = {
  id: string
  label: string
}

export type Project = {
  name: string
  href: string
  summary: string
  stack: string[]
}

export type Certificate = {
  title: string
  meta: string
  detail: string
}

export type StackItem = {
  name: string
  logo: string
}

export type StackGroup = {
  label: string
  items: string[]
}

export type ExperienceDetail = {
  name: string
  description: string
  stack: string[]
}

export type Experience = {
  company: string
  logo?: string
  role: string
  summary: string
  details: ExperienceDetail[]
}

export type EducationItem = {
  school: string
  logo?: string
  logoClassName?: string
  program: string
  year: string
}

export type ContactIcon =
  | "map-pin"
  | "phone"
  | "mail"
  | "git-branch"
  | "user-round"
  | "briefcase-business"

export type ContactItem = {
  label: string
  icon: ContactIcon
  href?: string
  external?: boolean
}

export type SocialIcon = "facebook" | "telegram" | "linkedin" | "x"

export type SocialLink = {
  label: string
  href: string
  icon: SocialIcon
}

export const sectionLinks: SectionLink[] = [
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

export const currentRole = {
  href: "https://haystack-solutions.com/",
  label: "Currently at Haystack Labs",
}

export const contactItems: ContactItem[] = [
  {
    label: "Kien Svay, Kandal, Cambodia",
    icon: "map-pin",
    href: "https://maps.google.com/?q=Kien+Svay,+Kandal,+Cambodia",
    external: true,
  },
  {
    label: "+855 967596681",
    icon: "phone",
    href: "tel:+855967596681",
  },
  {
    label: "rith.sombo.22@gmail.com",
    icon: "mail",
    href: "mailto:rith.sombo.22@gmail.com",
  },
  {
    label: "github.com/rithsombo",
    icon: "git-branch",
    href: "https://github.com/rithsombo",
    external: true,
  },
  {
    label: "he/him",
    icon: "user-round",
  },
  {
    label: "Open to practical work",
    icon: "briefcase-business",
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100067997441906&mibextid=LQQJ4d",
    icon: "facebook",
  },
  {
    label: "Telegram",
    href: "https://t.me/rsombo",
    icon: "telegram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rith-sombo-1811a0265",
    icon: "linkedin",
  },
]

export const aboutSummary =
  "Hello, I'm Rith Sombo, a developer focused on building practical web and mobile products with clear flows, maintainable structure, and interfaces that feel simple to use. Over the past few years, I've worked across frontend and full-stack product development on ecommerce platforms, booking experiences, internal dashboards, APIs, and mobile apps using tools like Next.js, React, Vue, React Native, Laravel, Supabase, and TypeScript. My experience spans product work at companies such as Sea Ventures, Wonderpass, and International University, where I contributed to booking systems, admin tools, mini apps, ecommerce platforms, and student-facing mobile products. Outside day-to-day delivery, I enjoy exploring better frontend patterns, building useful tools, and turning ideas into working products with the right level of complexity."

export const projects: Project[] = [
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

export const activityWeeks = [
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
] as const

export const certificates: Certificate[] = [
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
  {
    title: "Certificate 04",
    meta: "BACII",
    detail: "Received Grade B in the BAC II examination, 2021",
  },
]

export const stackItems: StackItem[] = [
  {
    name: "Next.js",
    logo: "https://svgl.app/library/nextjs_icon_dark.svg",
  },
  {
    name: "Remix",
    logo: "https://svgl.app/library/remix_dark.svg",
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
    name: "Google Analytics",
    logo: "https://svgl.app/library/google-analytics.svg",
  },
  {
    name: "Meta Pixel",
    logo: "https://lh3.googleusercontent.com/8wZz-WY-qmpxhaZGAEYQTmzQdqeGVagOLGSGanX-JT3etH2snxbDmUMi-YCnUwXULs31wLGeLQjCvyRryNQA76i-72w=s120",
  },
  {
    name: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1280px-MongoDB_Logo.svg",
  },
  {
    name: "MySQL",
    logo: "https://svgl.app/library/mysql-icon-dark.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://svgl.app/library/postgresql.svg",
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

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    items: ["Next.js", "Remix", "React", "Vue", "TypeScript", "Tailwind CSS"],
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
      "MySQL",
      "PostgreSQL",
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
    items: [
      "shadcn/ui",
      "Motion",
      "Sentry",
      "Google Analytics",
      "Meta Pixel",
      "Git",
      "Codex",
    ],
  },
]

export const experiences: Experience[] = [
  {
    company: "Sea Ventures",
    logo: "https://avatars.githubusercontent.com/u/236361117?s=200&v=4",
    role: "Frontend Developer",
    summary: "",
    details: [
      {
        name: "J.Keydge",
        description:
          "Built and maintained a headless Shopify storefront for J.Keydge focused on selling jackets and apparel, including branded marketing pages, customer account flows, newsletter/contact integrations, analytics tracking, and a wholesale-only ordering experience with custom pricing.",
        stack: [
          "Shopify",
          "Remix",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Google Analytics",
          "Meta Pixel",
        ],
      },
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
    logo: "https://wonderpass.asia/images/wonderpass.svg",
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
        stack: ["Next.js", "TypeScript", "shadcn/ui", "SWR", "Zod", "Zustand"],
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
    logo: "",
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

export const educationItems: EducationItem[] = [
  {
    school: "Hun Sen SereyPheab High School",
    logo: "",
    program: "Grade 10-12",
    year: "2018-2021",
  },
  {
    school: "Australian Centre for Education (ACE)",
    logo: "",
    program: "General English Program",
    year: "2021-2023",
  },
  {
    school: "Australian Centre for Education (ACE)",
    logo: "",
    program: "IELTS",
    year: "2023",
  },
  {
    school: "SETEC Institute",
    logo: "https://www.setecu.com/images/sampledata/icetheme/logo.png",
    logoClassName: "scale-125",
    program: "Management Information Systems",
    year: "2022-Present",
  },
]

export const footerCopy = {
  copyright: "© 2026 Rith Sombo",
  detail: "Built with Next.js, shadcn/ui, and Magic UI",
}

export const stackLogoMap = Object.fromEntries(
  stackItems.map((item) => [item.name, item.logo])
)

export const lightChipLogos = new Set(["Expo"])

export const themeAdaptiveLogos = new Set([
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
  "Remix",
  "Vercel",
])
