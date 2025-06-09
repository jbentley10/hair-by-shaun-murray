import Link from "next/link"
import { Facebook, Star, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#0a0a0a] to-[#1a1a2e] px-6 py-12 border-t border-[#00ffff]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Logo */}
          <div className="flex flex-col">
            <h2 className="logo-text text-[#00ffff] text-5xl md:text-6xl font-bold leading-none neon-glow">hair</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#00ffff] text-sm font-light">by</span>
              <span className="text-[#00ffff] text-lg font-light tracking-wide">Shaun Murray</span>
            </div>
          </div>

          {/* Right Side - Navigation, Social, Address */}
          <div className="space-y-8">
            {/* Navigation Menu */}
            <nav className="flex flex-wrap gap-6 md:gap-8 justify-start lg:justify-end">
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
                href="/book"
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

            {/* Social Media Icons */}
            <div className="flex gap-6 justify-start lg:justify-end">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00ffff] transition-colors p-2 border border-[#00ffff]/30 hover:border-[#00ffff] hover:neon-border"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00ffff] transition-colors p-2 border border-[#00ffff]/30 hover:border-[#00ffff] hover:neon-border"
                aria-label="Visit our Yelp page"
              >
                <Star size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00ffff] transition-colors p-2 border border-[#00ffff]/30 hover:border-[#00ffff] hover:neon-border"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={24} />
              </Link>
            </div>

            {/* Address */}
            <div className="text-gray-300 text-right">
              <p className="text-lg font-light">333 S Indian Canyon Dr</p>
              <p className="text-lg font-light">Suite J</p>
              <p className="text-lg font-light">Palm Springs, CA 92262</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Credits */}
        <div className="mt-12 pt-8 border-t border-[#00ffff]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm font-light">Copyright 2025</p>
            <p className="text-gray-300 text-sm font-light">
              Site by <span className="font-medium text-[#00ffff]">Palm Springs Web Design</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
