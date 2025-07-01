import Link from "next/link"
import { Facebook, Star, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Logo */}
          <div className="flex flex-col">
            <h2 className="logo-text text-[#84d4db] text-4xl md:text-5xl leading-none">hair</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 text-xs font-light uppercase tracking-wider">by</span>
              <span className="text-gray-400 text-sm font-light tracking-wide">Shaun Murray</span>
            </div>
          </div>

          {/* Right Side - Navigation, Social, Address */}
          <div className="space-y-12">
            {/* Navigation Menu */}
            <nav className="flex flex-wrap gap-8 justify-start lg:justify-end">
              <Link
                href="/services"
                className="text-gray-300 text-sm font-medium uppercase tracking-wider hover:text-[#84d4db] transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-300 text-sm font-medium uppercase tracking-wider hover:text-[#84d4db] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/book"
                className="text-gray-300 text-sm font-medium uppercase tracking-wider hover:text-[#84d4db] transition-colors duration-300"
              >
                Book Now
              </Link>
              <Link
                href="/gallery"
                className="text-gray-300 text-sm font-medium uppercase tracking-wider hover:text-[#84d4db] transition-colors duration-300"
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
                className="text-gray-400 hover:text-[#84d4db] transition-colors duration-300"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#84d4db] transition-colors duration-300"
                aria-label="Visit our Yelp page"
              >
                <Star size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#84d4db] transition-colors duration-300"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} />
              </Link>
            </div>

            {/* Address */}
            <div className="text-gray-400 text-right">
              <p className="text-sm font-light">333 S Indian Canyon Dr</p>
              <p className="text-sm font-light">Suite J</p>
              <p className="text-sm font-light">Palm Springs, CA 92262</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Credits */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-light">© 2025 Hair by Shaun Murray</p>
            <p className="text-gray-500 text-xs font-light">
              Site by{" "}
              <Link href="https://palmspringswebdesign.net" target="_blank">
                <span className="text-gray-400 hover:text-[#84d4db] transition-colors duration-300">
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
