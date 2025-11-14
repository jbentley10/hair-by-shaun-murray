"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Gallery(props: { hasButton?: boolean; limit?: number; isGrid?: boolean }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const galleryImages = [
    {
      id: 1,
      alt: "Hair styling transformation - blonde highlights",
      query: "professional hair styling blonde highlights",
    },
    {
      id: 2,
      alt: "Hair color transformation - brunette balayage",
      query: "brunette balayage hair color transformation",
    },
    {
      id: 3,
      alt: "Hair styling - curly hair treatment",
      query: "curly hair styling and treatment",
    },
    {
      id: 4,
      alt: "Hair color - vibrant red transformation",
      query: "vibrant red hair color transformation",
    },
    {
      id: 5,
      alt: "Hair styling - sleek straight hair",
      query: "sleek straight hair styling",
    },
    {
      id: 6,
      alt: "Hair color - dimensional highlights",
      query: "dimensional hair highlights color work",
    },
    {
      id: 7,
      alt: "Hair styling transformation - blonde highlights",
      query: "professional hair styling blonde highlights",
    },
    {
      id: 8,
      alt: "Hair color transformation - brunette balayage",
      query: "brunette balayage hair color transformation",
    },
    {
      id: 9,
      alt: "Hair styling - curly hair treatment",
      query: "curly hair styling and treatment",
    },
    {
      id: 10,
      alt: "Hair color - vibrant red transformation",
      query: "vibrant red hair color transformation",
    },
    {
      id: 11,
      alt: "Hair styling - sleek straight hair",
      query: "sleek straight hair styling",
    },
    {
      id: 12,
      alt: "Hair color - dimensional highlights",
      query: "dimensional hair highlights color work",
    },
  ]

  // Use slice to limit the number of images if limit prop is provided
  const displayImages = props.limit ? galleryImages.slice(0, props.limit) : galleryImages

  const openModal = (index: number) => {
    if (props.isGrid) {
      setSelectedImageIndex(index)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImageIndex(null)
  }

  const navigateNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % displayImages.length)
    }
  }

  const navigatePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + displayImages.length) % displayImages.length)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      } else if (e.key === "ArrowRight") {
        navigateNext()
      } else if (e.key === "ArrowLeft") {
        navigatePrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, selectedImageIndex])

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16" style={{ color: "var(--accent-primary)" }}>
          Portfolio
        </h2>

        {/* Gallery Grid */}
        <div className={`grid gap-8 mb-16 ${props.isGrid ? "grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          {displayImages.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={`/hair-${image.id}.webp?height=400&width=400&query=${encodeURIComponent(image.query)}`}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        {props.hasButton && (
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "var(--bg-primary)",
              }}
            >
              View Full Gallery
            </Link>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl font-light hover:opacity-70 transition-opacity z-10"
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigatePrev()
            }}
            className="absolute left-4 text-white text-5xl font-light hover:opacity-70 transition-opacity z-10"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          {/* Image Container */}
          <div
            className="max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/hair-${displayImages[selectedImageIndex].id}.webp?height=1200&width=1200&query=${encodeURIComponent(
                displayImages[selectedImageIndex].query
              )}`}
              alt={displayImages[selectedImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateNext()
            }}
            className="absolute right-4 text-white text-5xl font-light hover:opacity-70 transition-opacity z-10"
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}
