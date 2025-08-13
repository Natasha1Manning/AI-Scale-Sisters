"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

// Brand Logo Component
const BrandLogo = ({ size = "w-8 h-8" }: { size?: string }) => (
  <div className={`${size} flex items-center justify-center`}>
    <img
      src="/images/ai-upscale-sisters-logo.png"
      alt="AI UP-SCALE Sisters Logo"
      className={`${size} object-contain`}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement
        target.style.display = "none"
        const parent = target.parentElement
        if (parent) {
          parent.innerHTML = `<div class="${size} bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center"><span class="text-white font-bold text-lg">AS</span></div>`
        }
      }}
    />
  </div>
)

export default function FallbackAutomationPlanPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    drain: "",
    stack: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create email content
    const subject = `Automation Plan Request from ${formData.name}`
    const body = `Hi Natasha,

I'd like to get my free automation plan!

Name: ${formData.name}
Email: ${formData.email}
What drains my time most: ${formData.drain}
My main tool stack: ${formData.stack}

Please send me my personalized automation recommendations.

Thanks!
${formData.name}`

    // Open email client
    const mailtoLink = `mailto:natasha.manning@riseandthrivefamilies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <BrandLogo size="w-10 h-10" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  AI UP-SCALE SISTERS
                </span>
              </div>
            </Link>
            <Link
              href="/"
              className="text-pink-600 hover:text-pink-700 font-medium transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-2xl px-4 py-16">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BrandLogo size="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Get Your Free Automation Plan
          </h1>
          <p className="text-lg text-gray-600 mb-2">Fill out the form below and we'll send your plan via email</p>
          <p className="text-sm text-pink-600 font-medium">Personalized recommendations in minutes ✨</p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What drains your time most? *</label>
              <select
                value={formData.drain}
                onChange={(e) => setFormData((prev) => ({ ...prev, drain: e.target.value }))}
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="">Choose one...</option>
                <option>Inbox & Email Replies</option>
                <option>Leads & DMs / Follow-ups</option>
                <option>Content Repurposing</option>
                <option>Ops/Admin & CRM Hygiene</option>
                <option>Customer Support / FAQs</option>
                <option>Research & Briefs</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your main tool stack *</label>
              <input
                value={formData.stack}
                onChange={(e) => setFormData((prev) => ({ ...prev, stack: e.target.value }))}
                placeholder="e.g., Notion, Gmail, Shopify, Slack..."
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">List the main apps/tools you use daily</p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email Request
            </button>

            <p className="text-sm text-gray-600 text-center">
              This will open your email client with a pre-filled message to Natasha
            </p>
          </form>

          <div className="mt-8 p-4 bg-pink-50 border border-pink-200 rounded-lg">
            <h3 className="font-semibold text-pink-800 mb-2">What you'll get:</h3>
            <ul className="text-sm text-pink-700 space-y-1">
              <li>• 3 specific automation ideas for your workflow</li>
              <li>• Tailored to your exact tools and pain points</li>
              <li>• Next steps for a free 15-minute fit call</li>
              <li>• No sales pressure, just helpful recommendations</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Questions? Email{" "}
            <a
              href="mailto:natasha.manning@riseandthrivefamilies.com"
              className="text-pink-600 hover:text-pink-700 underline"
            >
              natasha.manning@riseandthrivefamilies.com
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
