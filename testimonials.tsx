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
    <section className="bg-[#2d2d2d] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[#0a2463] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          WHAT OUR CUSTOMERS SAY
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-10 p-4 text-white hover:text-[#0a2463] transition-colors duration-200 bg-[#2d2d2d] border-2 border-white hover:border-[#0a2463]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-20">
            <div className="relative">
              {/* Shadow/Border Effect */}
              <div className="absolute inset-0 bg-[#0a2463] transform translate-x-4 translate-y-4"></div>

              {/* Main Card */}
              <div className="relative bg-white p-12 md:p-16 text-center border-4 border-[#2d2d2d]">
                <p className="text-[#2d2d2d] text-xl md:text-2xl lg:text-3xl leading-relaxed font-semibold">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-10 p-4 text-white hover:text-[#0a2463] transition-colors duration-200 bg-[#2d2d2d] border-2 border-white hover:border-[#0a2463]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 transition-colors duration-200 border-2 ${
                index === currentIndex
                  ? "bg-[#0a2463] border-[#0a2463]"
                  : "bg-transparent border-white hover:border-[#0a2463]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
