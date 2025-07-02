import Link from "next/link"

export default function Header() {
  return (
    <header
      className="px-6 py-6 border-b"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="logo-text text-4xl md:text-5xl leading-none" style={{ color: "var(--accent-primary)" }}>
              hair
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-light uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                by
              </span>
              <span className="text-sm font-light tracking-wide" style={{ color: "var(--text-secondary)" }}>
                Shaun Murray
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-12">
          <Link
            href="/services"
            className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            About
          </Link>
          <Link
            href="/book-now"
            className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            Book Now
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            Gallery
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" style={{ color: "var(--text-primary)" }}>
          ☰
        </button>
      </div>
    </header>
  )
}
