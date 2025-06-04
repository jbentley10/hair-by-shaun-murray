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
    <section className="bg-[#f8f8f8] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[#1c3b5f] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-10 p-3 text-[#1c3b5f] hover:text-[#2a4a6b] transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-16">
            <div className="relative">
              {/* Shadow/Border Effect */}
              <div className="absolute inset-0 bg-[#1c3b5f] rounded-3xl transform translate-x-2 translate-y-2"></div>

              {/* Main Card */}
              <div className="relative bg-[#e8d7a0] rounded-3xl p-12 md:p-16 text-center">
                <p className="text-[#1c3b5f] text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-10 p-3 text-[#1c3b5f] hover:text-[#2a4a6b] transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={48} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-[#1c3b5f]" : "bg-[#1c3b5f]/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
