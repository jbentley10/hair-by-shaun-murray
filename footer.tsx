import Link from "next/link"
import { Facebook, Star, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1c3b5f] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Logo */}
          <div className="flex flex-col">
            <h2 className="text-[#e8d7a0] text-5xl md:text-6xl font-bold italic leading-none">hair</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#e8d7a0] text-sm font-light">by</span>
              <span className="text-[#e8d7a0] text-lg font-light tracking-wide">Shaun Murray</span>
            </div>
          </div>

          {/* Right Side - Navigation, Social, Address */}
          <div className="space-y-8">
            {/* Navigation Menu */}
            <nav className="flex flex-wrap gap-6 md:gap-8 justify-start lg:justify-end">
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

            {/* Social Media Icons */}
            <div className="flex gap-6 justify-start lg:justify-end">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8d7a0] hover:opacity-80 transition-opacity"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={32} />
              </Link>
              <Link
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8d7a0] hover:opacity-80 transition-opacity"
                aria-label="Visit our Yelp page"
              >
                <Star size={32} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8d7a0] hover:opacity-80 transition-opacity"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={32} />
              </Link>
            </div>

            {/* Address */}
            <div className="text-[#e8d7a0] text-right">
              <p className="text-lg font-light">333 S Indian Canyon Dr</p>
              <p className="text-lg font-light">Suite J</p>
              <p className="text-lg font-light">Palm Springs, CA 92262</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Credits */}
        <div className="mt-12 pt-8 border-t border-[#e8d7a0]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#e8d7a0] text-sm font-light">Copyright 2025</p>
            <p className="text-[#e8d7a0] text-sm font-light">
              Site by <span className="font-medium">Palm Springs Web Design</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
