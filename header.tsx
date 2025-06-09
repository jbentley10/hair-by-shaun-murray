import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a2e] px-6 py-4 border-b border-[#00ffff]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="logo-text text-[#00ffff] text-5xl md:text-6xl font-bold leading-none neon-glow">hair</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#00ffff] text-sm font-light">by</span>
              <span className="text-[#00ffff] text-lg font-light tracking-wide">Shaun Murray</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-white text-lg font-medium hover:text-[#00ffff] transition-colors relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff] transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="text-white text-lg font-medium hover:text-[#00ffff] transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff] transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/book-now"
            className="text-white text-lg font-medium hover:text-[#00ffff] transition-colors relative group"
          >
            Book Now
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff] transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/gallery"
            className="text-white text-lg font-medium hover:text-[#00ffff] transition-colors relative group"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff] transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </header>
  )
}
