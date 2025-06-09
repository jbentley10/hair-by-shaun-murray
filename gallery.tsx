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
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] py-16 px-6 relative">
      {/* Circuit-like background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20"
                stroke="#00ffff"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-[#00ffff] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 tracking-wide">
          PORTFOLIO SHOWCASE
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#16213e] overflow-hidden hover:scale-105 transition-all duration-300 border border-[#00ffff]/30 hover:border-[#00ffff] neon-border relative group"
            >
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <img
                src={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(image.query)}`}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00ffff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Index number */}
              <div className="absolute top-4 right-4 text-[#00ffff] font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-transparent text-[#00ffff] px-12 py-4 text-lg font-bold border-2 border-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all duration-300 neon-border transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">VIEW FULL PORTFOLIO</span>
            <div className="absolute inset-0 bg-[#00ffff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
