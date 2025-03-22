import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Zilla_Slab } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const zillaSlab = Zilla_Slab({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"], 
  variable: '--font-zilla-slab'
})

export const metadata: Metadata = {
  title: "Community Landing Page",
  description: "Bringing your community together",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${zillaSlab.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'