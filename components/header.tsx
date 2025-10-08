"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header({
  theme = "light",
}: {
  theme?: "light" | "dark"
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className="px-6 py-6 border-b relative"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="Hair by Shaun Murray - Cut and Color Specialists"
              width={420}
              height={420}
              className="w-auto h-24 md:h-28"
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-12">
          <Link
            href="/about"
            className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            Gallery
          </Link>
          <Link
            href="/book-now"
            className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
            style={{ color: "var(--text-secondary)" }}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl p-2 transition-colors duration-300 hover:opacity-80"
          style={{ color: "var(--text-primary)" }}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 z-50 border-b"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border-color)",
          }}
        >
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="/services"
              className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80 py-2"
              style={{ color: "var(--text-secondary)" }}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80 py-2"
              style={{ color: "var(--text-secondary)" }}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/book-now"
              className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80 py-2"
              style={{ color: "var(--text-secondary)" }}
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:opacity-80 py-2"
              style={{ color: "var(--text-secondary)" }}
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
