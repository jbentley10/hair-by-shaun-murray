import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#2d2d2d] px-6 py-4 border-b-4 border-[#ff6b35]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="logo-text text-[#ff6b35] text-5xl md:text-6xl font-bold leading-none">hair</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#ff6b35] text-sm font-light">by</span>
              <span className="text-[#ff6b35] text-lg font-light tracking-wide">Shaun Murray</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-white text-lg font-semibold hover:text-[#ff6b35] transition-colors duration-200"
          >
            SERVICES
          </Link>
          <Link
            href="/about"
            className="text-white text-lg font-semibold hover:text-[#ff6b35] transition-colors duration-200"
          >
            ABOUT
          </Link>
          <Link
            href="/book-now"
            className="text-white text-lg font-semibold hover:text-[#ff6b35] transition-colors duration-200"
          >
            BOOK NOW
          </Link>
          <Link
            href="/gallery"
            className="text-white text-lg font-semibold hover:text-[#ff6b35] transition-colors duration-200"
          >
            GALLERY
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </header>
  )
}
