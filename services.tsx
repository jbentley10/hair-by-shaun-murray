import Link from "next/link"

export default function Services() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              {/* Before/After Image with Geometric Divider */}
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
                  className="w-full h-auto object-cover rounded-lg"
                />

                {/* Geometric Arrow Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 opacity-80 w-16 h-1 transform rotate-45"></div>
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 opacity-80 w-1 h-16 transform -rotate-45 -ml-8"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-[#1c3b5f] text-4xl md:text-5xl lg:text-6xl font-bold italic leading-tight">
              Expert Color Artistry
            </h2>

            <p className="text-[#333333] text-lg md:text-xl leading-relaxed">
              Master colorists specializing in balayage, foiling, and dimensional techniques that enhance your natural
              beauty. We blend art and science for stunning, long-lasting results.
            </p>

            <Link
              href="/services"
              className="inline-block bg-[#e8d7a0] text-[#1c3b5f] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#dcc888] transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
