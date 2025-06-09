import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="logo-text text-[#ff3e9d] text-5xl md:text-6xl font-bold leading-none">hair</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#ff3e9d] text-sm font-light">by</span>
              <span className="text-[#ff3e9d] text-lg font-light tracking-wide">Shaun Murray</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-white text-lg font-medium hover:text-[#ff3e9d] transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-white text-lg font-medium hover:text-[#ff3e9d] transition-colors">
            About
          </Link>
          <Link href="/book-now" className="text-white text-lg font-medium hover:text-[#ff3e9d] transition-colors">
            Book Now
          </Link>
          <Link href="/gallery" className="text-white text-lg font-medium hover:text-[#ff3e9d] transition-colors">
            Gallery
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </header>
  )
}
