import type React from "react"
import type { Metadata } from "next"
import { Lato, Inter } from "next/font/google"
import "./globals.css"

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hair by Shaun Murray | Luxury Hair Artistry",
  description: "Luxury hair styling and color artistry in Palm Springs",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${inter.variable}`} >
        {children}
      </body>
    </html>
  )
}
