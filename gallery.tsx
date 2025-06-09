import Link from "next/link"

export default function Gallery() {
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
  ]

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[#ff3e9d] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">GALLERY SAMPLE</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square bg-[#1a1a1a] overflow-hidden hover:opacity-90 transition-opacity duration-200 border-2 border-[#ff3e9d]"
            >
              <img
                src={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(image.query)}`}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-transparent text-[#ff3e9d] px-12 py-4 text-lg font-bold border-2 border-[#ff3e9d] hover:bg-[#ff3e9d] hover:text-white transition-colors duration-200"
          >
            VIEW OUR GALLERY
          </Link>
        </div>
      </div>
    </section>
  )
}
