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
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16" style={{ color: "var(--accent-primary)" }}>
          Client Testimonials
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-10 p-3 transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-16">
            <div className="text-center">
              <p
                className="text-xl md:text-2xl leading-relaxed font-light italic"
                style={{ color: "var(--text-secondary)" }}
              >
                "{testimonials[currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-10 p-3 transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-muted)" }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-2 h-2 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: index === currentIndex ? "var(--accent-primary)" : "var(--text-muted)",
                opacity: index === currentIndex ? 1 : 0.5,
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
