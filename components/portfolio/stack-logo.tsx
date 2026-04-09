import Image from "next/image"

import {
  lightChipLogos,
  stackLogoMap,
  themeAdaptiveLogos,
} from "@/content/portfolio"
import { cn } from "@/lib/utils"

import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark"
import { MongodbIconLight } from "@/components/ui/svgs/mongodbIconLight"

type StackLogoProps = {
  name: string
  size?: "sm" | "md"
}

export function StackLogo({ name, size = "sm" }: StackLogoProps) {
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

  if (name === "MySQL") {
    const iconClass =
      size === "md" ? "h-10 w-10 object-contain" : "h-5 w-5 object-contain"

    return (
      <>
        <Image
          src="https://svgl.app/library/mysql-icon-light.svg"
          alt="MySQL logo"
          className={cn(iconClass, "dark:hidden")}
          width={size === "md" ? 40 : 20}
          height={size === "md" ? 40 : 20}
          loading="lazy"
          unoptimized
        />
        <Image
          src="https://svgl.app/library/mysql-icon-dark.svg"
          alt="MySQL logo"
          className={cn(iconClass, "hidden dark:block")}
          width={size === "md" ? 40 : 20}
          height={size === "md" ? 40 : 20}
          loading="lazy"
          unoptimized
        />
      </>
    )
  }

  const src = stackLogoMap[name]

  if (!src) {
    return null
  }

  const adaptiveClass = themeAdaptiveLogos.has(name)
    ? "brightness-0 dark:invert"
    : ""

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      className={cn(
        size === "md" ? "h-10 w-10 object-contain" : "h-5 w-5 object-contain",
        adaptiveClass,
        lightChipLogos.has(name)
          ? size === "md"
            ? "rounded-full bg-background p-2 ring-1 ring-foreground/10"
            : "rounded-full bg-background p-1 ring-1 ring-foreground/10"
          : ""
      )}
      width={size === "md" ? 40 : 20}
      height={size === "md" ? 40 : 20}
      loading="lazy"
      unoptimized
    />
  )
}
