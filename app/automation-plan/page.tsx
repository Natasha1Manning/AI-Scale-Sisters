"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

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

export default function AutomationPlanPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle")
  const [msg, setMsg] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setMsg("")
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      drain: form.get("drain") as string,
      stack: form.get("stack") as string,
      hp: form.get("website") as string, // honeypot
    }
    const res = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      setStatus("ok")
      setMsg("Plan received! Check your inbox in the next few minutes.")
    } else {
      setStatus("err")
      setMsg((await res.text()) || "Something went wrong. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <BrandLogo size="w-12 h-12" />
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
          <div className="flex justify-center mb-6">
            <div className="relative">
              <BrandLogo size="w-20 h-20" />
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-lg -z-10"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Get Your Free Automation Plan
          </h1>
          <p className="text-lg text-gray-600 mb-2">No spam, no tech-speak. We'll reply with a simple 1-page plan.</p>
          <p className="text-sm text-pink-600 font-medium">Personalised recommendations in minutes ✨</p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-2xl p-8 shadow-lg">
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Honeypot - hidden from users but visible to bots */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">What drains your time most? *</label>
              <select
                name="drain"
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
                name="stack"
                placeholder="e.g., Notion, Gmail, Shopify, Slack..."
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">List the main apps/tools you use daily</p>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              {status === "sending" ? "Sending Your Plan..." : "Send Me My Automation Plan"}
            </button>

            {status !== "idle" && (
              <div
                className={`p-4 rounded-lg text-center ${
                  status === "ok"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : status === "err"
                      ? "bg-red-50 border border-red-200 text-red-800"
                      : "bg-gray-50 border border-gray-200 text-gray-600"
                }`}
              >
                <p className="font-medium">{msg}</p>
                {status === "ok" && (
                  <p className="text-sm mt-2">Check your spam folder if you don't see it in a few minutes.</p>
                )}
              </div>
            )}
          </form>

          {status === "idle" && (
            <div className="mt-8 p-4 bg-pink-50 border border-pink-200 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">What you'll get:</h3>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• 3 specific automation ideas for your workflow</li>
                <li>• Tailored to your exact tools and pain points</li>
                <li>• Next steps for a free 15-minute fit call</li>
                <li>• No sales pressure, just helpful recommendations</li>
              </ul>
            </div>
          )}
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
