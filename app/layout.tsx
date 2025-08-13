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
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  )
}
