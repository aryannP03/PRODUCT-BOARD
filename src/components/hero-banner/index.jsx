"use client"
import { SLIDES } from "./constant/slides"
import { useEffect, useState } from "react"


export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const slide = SLIDES[current]

  return (
    <div className="w-full">
      <div
        className={`bg-linear-to-r ${slide.bg} text-white transition-all duration-700 flex items-center`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-34 h-95 sm:h-105 lg:h-112.5 flex items-center">
            <div className="max-w-lg">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {slide.title}
                </h2>

                <p className="mt-4 text-base sm:text-lg text-white/90">
                {slide.subtitle}
                </p>

                <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                {slide.button}
                </button>
            </div>
            </div>
      </div>
    </div>
  )
}