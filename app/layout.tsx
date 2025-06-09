import type React from "react"
import type { Metadata } from "next"
import { Pacifico, Oswald, Inter } from "next/font/google"
import "./globals.css"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
})

const oswald = Oswald({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hair by Shaun Murray | Electric Urban",
  description: "Cutting-edge hair styling and color artistry in Palm Springs",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${oswald.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
