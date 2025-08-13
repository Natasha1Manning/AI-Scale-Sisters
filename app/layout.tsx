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
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Hide all v0 related elements */
            [data-v0-t], 
            .v0-watermark,
            .v0-banner,
            .v0-popup,
            .v0-attribution,
            [class*="v0-"],
            [id*="v0-"],
            .vercel-banner,
            .vercel-popup,
            [data-vercel],
            [data-v0],
            .build-with-v0,
            .powered-by-v0,
            .made-with-v0 {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              position: absolute !important;
              left: -9999px !important;
              width: 0 !important;
              height: 0 !important;
              overflow: hidden !important;
            }
            
            /* Hide any floating elements that might be v0 related */
            div[style*="position: fixed"][style*="bottom"],
            div[style*="position: fixed"][style*="top"],
            div[style*="position: absolute"][style*="bottom"],
            div[style*="z-index: 999"],
            div[style*="z-index: 9999"] {
              display: none !important;
            }
            
            /* Ensure no v0 branding appears */
            *:before,
            *:after {
              content: none !important;
            }
            
            /* Hide any iframe that might contain v0 content */
            iframe[src*="v0"],
            iframe[src*="vercel"] {
              display: none !important;
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Wrap the whole app so a client crash never blanks the screen */}
        <ErrorBoundary>{children}</ErrorBoundary>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Remove any v0 related elements that load dynamically
            function removeV0Elements() {
              const selectors = [
                '[data-v0-t]',
                '.v0-watermark',
                '.v0-banner', 
                '.v0-popup',
                '.v0-attribution',
                '[class*="v0-"]',
                '[id*="v0-"]',
                '.vercel-banner',
                '.vercel-popup',
                '[data-vercel]',
                '[data-v0]',
                '.build-with-v0',
                '.powered-by-v0',
                '.made-with-v0'
              ];
              
              selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                  if (el) {
                    el.remove();
                  }
                });
              });
              
              // Remove any elements containing v0 text
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                if (el.textContent && (
                  el.textContent.toLowerCase().includes('built with v0') ||
                  el.textContent.toLowerCase().includes('powered by v0') ||
                  el.textContent.toLowerCase().includes('made with v0') ||
                  el.textContent.toLowerCase().includes('v0.dev')
                )) {
                  el.remove();
                }
              });
            }
            
            // Run immediately
            removeV0Elements();
            
            // Run when DOM is loaded
            document.addEventListener('DOMContentLoaded', removeV0Elements);
            
            // Run periodically to catch dynamically loaded content
            setInterval(removeV0Elements, 1000);
            
            // Run on any DOM mutations
            if (typeof MutationObserver !== 'undefined') {
              const observer = new MutationObserver(removeV0Elements);
              observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true
              });
            }
          `,
          }}
        />
      </body>
    </html>
  )
}
