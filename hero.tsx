import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-[#1c3b5f] text-5xl md:text-6xl lg:text-7xl font-bold italic leading-tight">
              Expert Styling for
              <br />
              Your Signature Look
            </h1>

            <p className="text-[#333333] text-lg md:text-xl leading-relaxed max-w-lg">
              Hair artistry in Palm Springs, where style meets personalized care.
            </p>

            <Link
              href="/book"
              className="inline-block bg-[#e8d7a0] text-[#1c3b5f] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#dcc888] transition-colors duration-200"
            >
              Book Your Appointment
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#333333] rounded-lg transform rotate-2"></div>
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Professional hair styling example showing a woman with beautifully styled brown hair with highlights"
                className="relative rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
