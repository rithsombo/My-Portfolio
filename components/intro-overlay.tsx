"use client"

import { animate } from "animejs"
import { useEffect, useRef, useState } from "react"

import { SignatureMark } from "@/components/signature-mark"

export function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const markWrapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const overlay = overlayRef.current
    const markWrap = markWrapRef.current
    const root = svgRef.current

    if (!overlay || !markWrap || !root) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) {
      const fadeAnimation = animate(overlay, {
        opacity: [1, 0],
        duration: 250,
        ease: "outQuad",
        onComplete: () => {
          document.body.style.overflow = previousOverflow
          setIsVisible(false)
        },
      })

      return () => {
        document.body.style.overflow = previousOverflow
        fadeAnimation.revert()
      }
    }

    const paths = Array.from(root.querySelectorAll<SVGPathElement>("path"))

    paths.forEach((path) => {
      const length = path.getTotalLength()

      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
      path.style.opacity = "0.22"
    })

    const markAnimation = animate(markWrap, {
      opacity: [0, 1],
      scale: [1.55, 1],
      filter: ["blur(14px)", "blur(0px)"],
      duration: 1100,
      ease: "outExpo",
    })

    const drawAnimation = animate(paths, {
      strokeDashoffset: 0,
      opacity: [0.22, 1],
      easing: "inOutSine",
      duration: 1350,
      delay: (_, index) => index * 120,
      onComplete: () => {
        animate(markWrap, {
          scale: [1, 0.72],
          filter: ["blur(0px)", "blur(6px)"],
          opacity: [1, 0],
          duration: 440,
          ease: "inExpo",
        })

        animate(overlay, {
          opacity: [1, 0],
          duration: 420,
          delay: 40,
          ease: "outQuad",
          onComplete: () => {
            document.body.style.overflow = previousOverflow
            setIsVisible(false)
          },
        })
      },
    })

    return () => {
      document.body.style.overflow = previousOverflow
      markAnimation.revert()
      drawAnimation.revert()
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background px-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-size-[20px_20px] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_48%,rgba(2,6,23,0.06)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,transparent_48%,rgba(255,255,255,0.05)_100%)]" />

      <div ref={markWrapRef} className="relative w-full max-w-[720px]">
        <SignatureMark
          ref={svgRef}
          className="relative w-full max-w-[720px] text-foreground/75"
        />
      </div>
    </div>
  )
}
