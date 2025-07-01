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
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[#bce1ed] text-3xl md:text-4xl font-light text-center mb-16">Portfolio</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden group cursor-pointer">
              <img
                src={`/hair-${image.id}.webp?height=400&width=400&query=${encodeURIComponent(image.query)}`}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-[#bce1ed] text-black px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-[#a5d4e1] transition-colors duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
