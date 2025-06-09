"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    text: "Shaun is not only a lovely person to be around, but a phenomenal colorist and stylist!",
  },
  {
    id: 2,
    text: "Amazing experience! Shaun transformed my hair beyond my expectations. Highly recommend!",
  },
  {
    id: 3,
    text: "The best hair stylist in Palm Springs! Professional, creative, and such a joy to work with.",
  },
  {
    id: 4,
    text: "Shaun has an incredible eye for color and style. I always leave feeling absolutely gorgeous!",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className="bg-gradient-to-r from-[#16213e] via-[#1a1a2e] to-[#0a0a0a] py-16 px-6 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00ffff] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#00ffff] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#00ffff] rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-[#00ffff] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 tracking-wide">
          CLIENT TESTIMONIALS
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-10 p-3 text-white hover:text-[#00ffff] transition-colors duration-200 border border-[#00ffff]/30 hover:border-[#00ffff] rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-16">
            <div className="relative">
              {/* Geometric background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] transform skew-y-1"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] p-12 md:p-16 text-center border border-[#00ffff]/30 neon-border">
                <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-[#00ffff]"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-[#00ffff]"></div>

                <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-10 p-3 text-white hover:text-[#00ffff] transition-colors duration-200 border border-[#00ffff]/30 hover:border-[#00ffff] rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 transition-all duration-200 ${
                index === currentIndex ? "bg-[#00ffff] neon-glow transform scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
