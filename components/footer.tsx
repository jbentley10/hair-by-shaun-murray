import Link from "next/link"
import { Facebook, Star, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="px-6 py-16" style={{ backgroundColor: "var(--bg-tertiary)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Logo */}
          <div className="flex flex-col">
            <h2 className="logo-text text-4xl md:text-5xl leading-none" style={{ color: "var(--accent-primary)" }}>
              hair
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs font-light uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                by
              </span>
              <span className="text-sm font-light tracking-wide" style={{ color: "var(--text-muted)" }}>
                Shaun Murray
              </span>
            </div>
          </div>

          {/* Right Side - Navigation, Social, Address */}
          <div className="space-y-12">
            {/* Navigation Menu */}
            <nav className="flex flex-wrap gap-8 justify-start lg:justify-end">
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
                href="/book"
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

            {/* Social Media Icons */}
            <div className="flex gap-6 justify-start lg:justify-end">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:opacity-80"
                style={{ color: "var(--text-muted)" }}
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:opacity-80"
                style={{ color: "var(--text-muted)" }}
                aria-label="Visit our Yelp page"
              >
                <Star size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:opacity-80"
                style={{ color: "var(--text-muted)" }}
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </Link>
            </div>

            {/* Address */}
            <div className="text-right" style={{ color: "var(--text-muted)" }}>
              <p className="text-sm font-light">333 S Indian Canyon Dr</p>
              <p className="text-sm font-light">Suite J</p>
              <p className="text-sm font-light">Palm Springs, CA 92262</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Credits */}
        <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border-color)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light" style={{ color: "var(--text-primary)" }}>
              © 2025 Hair by Shaun Murray
            </p>
            <p className="text-xs font-light" style={{ color: "var(--text-primary)" }}>
              Site by{" "}
              <Link href="https://palmspringswebdesign.net" target="_blank">
                <span
                  className="transition-colors duration-300 hover:opacity-80"
                  style={{ color: "var(--text-muted)" }}
                >
                  Palm Springs Web Design
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
