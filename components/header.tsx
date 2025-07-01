import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white px-6 py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="logo-text text-black text-4xl md:text-5xl leading-none">hair</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-600 text-xs font-light uppercase tracking-wider">by</span>
              <span className="text-gray-600 text-sm font-light tracking-wide">Shaun Murray</span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-12">
          <Link
            href="/services"
            className="text-gray-800 text-sm font-medium uppercase tracking-wider hover:text-black transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-800 text-sm font-medium uppercase tracking-wider hover:text-black transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/book-now"
            className="text-gray-800 text-sm font-medium uppercase tracking-wider hover:text-black transition-colors duration-300"
          >
            Book Now
          </Link>
          <Link
            href="/gallery"
            className="text-gray-800 text-sm font-medium uppercase tracking-wider hover:text-black transition-colors duration-300"
          >
            Gallery
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black text-xl">☰</button>
      </div>
    </header>
  )
}
