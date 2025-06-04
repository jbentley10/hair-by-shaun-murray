import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#1c3b5f] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <h1 className="text-[#e8d7a0] text-5xl md:text-6xl font-bold italic leading-none">hair</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#e8d7a0] text-sm font-light">by</span>
            <span className="text-[#e8d7a0] text-lg font-light tracking-wide">Shaun Murray</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-[#e8d7a0] text-lg font-light hover:opacity-80 transition-opacity">
            Services
          </Link>
          <Link href="/about" className="text-[#e8d7a0] text-lg font-light hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link href="/book" className="text-[#e8d7a0] text-lg font-light hover:opacity-80 transition-opacity">
            Book Now
          </Link>
          <Link href="/gallery" className="text-[#e8d7a0] text-lg font-light hover:opacity-80 transition-opacity">
            Gallery
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#e8d7a0] text-2xl">☰</button>
      </div>
    </header>
  )
}
