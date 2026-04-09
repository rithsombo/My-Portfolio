"use client"

import { useEffect, useState } from "react"

import { IntroOverlay } from "@/components/intro-overlay"
import { cn } from "@/lib/utils"

const INTRO_SEEN_KEY = "rith-portfolio:intro-seen"

export function PageIntroShell({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [showIntro, setShowIntro] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const hasSeenIntro = window.sessionStorage.getItem(INTRO_SEEN_KEY) === "true"
    const frameId = window.requestAnimationFrame(() => {
      if (prefersReducedMotion || hasSeenIntro) {
        setIsReady(true)
        return
      }

      setShowIntro(true)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  function handleIntroComplete() {
    window.sessionStorage.setItem(INTRO_SEEN_KEY, "true")
    setShowIntro(false)
    requestAnimationFrame(() => {
      setIsReady(true)
    })
  }

  return (
    <>
      {showIntro ? <IntroOverlay onComplete={handleIntroComplete} /> : null}

      <div
        className={cn(
          "transition-[opacity,filter] duration-700 ease-out",
          isReady
            ? "opacity-100 blur-0"
            : "pointer-events-none opacity-0 blur-[8px]",
        )}
      >
        {children}
      </div>
    </>
  )
}
