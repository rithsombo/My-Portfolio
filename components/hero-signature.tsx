"use client"

import { animate } from "animejs"
import { useEffect, useRef } from "react"

import { SignatureMark } from "@/components/signature-mark"

export function HeroSignature() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const root = svgRef.current

    if (!root) {
      return
    }

    const paths = Array.from(root.querySelectorAll<SVGPathElement>("path"))

    paths.forEach((path) => {
      const length = path.getTotalLength()

      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
    })

    const drawAnimation = animate(paths, {
      strokeDashoffset: 0,
      easing: "inOutSine",
      duration: 1800,
      delay: (_, index) => index * 300,
      alternate: true,
      loop: true,
    })

    return () => {
      drawAnimation.revert()
    }
  }, [])

  return (
    <div className="pointer-events-none relative z-0 mx-auto mt-8 w-full max-w-[300px] opacity-70 sm:mt-10 sm:max-w-[420px] lg:absolute lg:-right-3  lg:-bottom-4 lg:mx-0 lg:mt-0 lg:w-[520px] lg:max-w-none lg:translate-x-16 lg:translate-y-8">
      <SignatureMark
        ref={svgRef}
        className="line-drawing-demo h-auto w-full text-foreground/40"
      />
    </div>
  )
}
