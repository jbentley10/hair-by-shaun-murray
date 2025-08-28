import Link from "next/link"

export default function Gallery(props: { hasButton?: boolean; limit?: number }) {
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

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16" style={{ color: "var(--accent-primary)" }}>
          Portfolio
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayImages.map((image) => (
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
    </section>
  )
}
