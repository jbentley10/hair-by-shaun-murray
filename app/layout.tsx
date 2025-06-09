import type React from "react"
import type { Metadata } from "next"
import { Pacifico, Bebas_Neue, Montserrat } from "next/font/google"
import "./globals.css"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Hair by Shaun Murray | Bold & Daring",
  description: "Expert hair styling and color artistry in Palm Springs",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${bebasNeue.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
