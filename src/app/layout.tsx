import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hair by Shaun Murray",
  description: "Professional hair styling services by Shaun Murray",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold text-purple-600">
              Hair by Shaun Murray
            </Link>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-purple-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-purple-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-700 hover:text-purple-600">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-700 hover:text-purple-600">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-purple-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://booking.hairbyshaun.com"
                    target="_blank"
                    className="rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}

