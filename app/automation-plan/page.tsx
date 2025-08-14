"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles, AlertCircle, CheckCircle, Loader2 } from "lucide-react"

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
  const [debugInfo, setDebugInfo] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setMsg("")
    setDebugInfo("")

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      businessType: form.get("businessType") as string, // Changed from 'drain' to 'businessType'
      currentChallenges: [form.get("businessType") as string], // Use businessType as challenge
      goals: ["improve-efficiency"], // Default goal
      techComfort: "beginner", // Default tech comfort
      budgetRange: "under-500", // Default budget
      timeline: "1-3-months", // Default timeline
      stack: form.get("stack") as string,
      website: form.get("website") as string, // honeypot
    }

    console.log("🚀 Submitting automation plan form with payload:", {
      name: payload.name,
      email: payload.email,
      businessType: payload.businessType,
      hasStack: !!payload.stack,
      isHoneypot: !!payload.website,
    })

    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      console.log("📡 Response status:", res.status)
      console.log("📡 Response headers:", Object.fromEntries(res.headers.entries()))

      const responseText = await res.text()
      console.log("📡 Response text:", responseText)

      if (res.ok) {
        setStatus("ok")
        setMsg(
          "🎉 Your personalized automation plan has been sent! Check your inbox (and spam folder) in the next few minutes.",
        )

        // Try to parse JSON response for additional info
        try {
          const jsonResponse = JSON.parse(responseText)
          if (jsonResponse.userEmailId) {
            setDebugInfo(
              `User Email ID: ${jsonResponse.userEmailId}\nAdmin Email ID: ${jsonResponse.adminEmailId || "N/A"}`,
            )
          }
        } catch (e) {
          console.log("Response wasn't JSON, that's okay")
        }
      } else {
        setStatus("err")
        setMsg("Failed to send your automation plan. Please try again.")
        setDebugInfo(`Status: ${res.status}\nResponse: ${responseText}`)
      }
    } catch (error) {
      console.error("❌ Network error:", error)
      setStatus("err")
      setMsg("Network error occurred. Please check your connection and try again.")
      setDebugInfo(`Network error: ${error instanceof Error ? error.message : "Unknown error"}`)
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
                disabled={status === "sending"}
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
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What type of business do you run? *
              </label>
              <select
                name="businessType"
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                disabled={status === "sending"}
              >
                <option value="">Choose your business type...</option>
                <option value="e-commerce">E-commerce & Online Store</option>
                <option value="consulting">Consulting & Professional Services</option>
                <option value="creative-services">Creative Services & Design</option>
                <option value="coaching">Coaching & Course Creation</option>
                <option value="health-wellness">Health & Wellness Services</option>
                <option value="education">Education & Training</option>
                <option value="service-based">Other Service-Based Business</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your main tool stack *</label>
              <input
                name="stack"
                placeholder="e.g., Notion, Gmail, Shopify, Slack, Canva..."
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                disabled={status === "sending"}
              />
              <p className="text-xs text-gray-500 mt-1">List the main apps/tools you use daily</p>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Your Plan...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Send Me My Automation Plan
                </>
              )}
            </button>

            {status !== "idle" && (
              <div
                className={`p-4 rounded-lg ${
                  status === "ok"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : status === "err"
                      ? "bg-red-50 border border-red-200 text-red-800"
                      : "bg-gray-50 border border-gray-200 text-gray-600"
                }`}
              >
                <div className="flex items-start gap-3">
                  {status === "ok" ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : status === "err" ? (
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  ) : null}
                  <div className="flex-1">
                    <p className="font-medium">{msg}</p>
                    {status === "ok" && (
                      <div className="mt-2 space-y-1">
                        <p className="text-sm">✅ Check your inbox (and spam folder)</p>
                        <p className="text-sm">✅ Look for an email from hello@aiupscalesisters.com</p>
                        <p className="text-sm">✅ If you don't see it in 10 minutes, contact us</p>
                        <p className="text-sm">✅ Admin notification sent to Natasha</p>
                      </div>
                    )}
                    {status === "err" && (
                      <div className="mt-2">
                        <p className="text-sm">Please try again or contact support:</p>
                        <p className="text-sm">
                          <a
                            href="mailto:natasha.manning@riseandthrivefamilies.com"
                            className="underline hover:no-underline"
                          >
                            natasha.manning@riseandthrivefamilies.com
                          </a>
                        </p>
                      </div>
                    )}
                    {debugInfo && (
                      <details className="mt-2">
                        <summary className="text-xs cursor-pointer">Debug Info</summary>
                        <pre className="text-xs mt-1 bg-gray-100 p-2 rounded overflow-auto whitespace-pre-wrap">
                          {debugInfo}
                        </pre>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            )}
          </form>

          {status === "idle" && (
            <div className="mt-8 p-4 bg-pink-50 border border-pink-200 rounded-lg">
              <h3 className="font-semibold text-pink-800 mb-2">What you'll get:</h3>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• Personalized AI tool recommendations for your business type</li>
                <li>• Step-by-step implementation roadmap</li>
                <li>• Custom automation ideas tailored to your workflow</li>
                <li>• Next steps for a free 15-minute consultation</li>
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
