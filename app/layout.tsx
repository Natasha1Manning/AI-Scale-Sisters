import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ErrorBoundary } from "@/components/ErrorBoundary"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "AI UP-SCALE SISTERS - AI Tools for Women Entrepreneurs",
  description: "Discover the perfect AI tools to scale your business",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Minimal CSS to hide v0 elements without breaking layout */}
        <style>{`
          [data-v0-t],
          .v0-watermark,
          .build-with-v0,
          .powered-by-v0 {
            display: none !important;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {/* Wrap the whole app so a client crash never blanks the screen */}
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  )
}
