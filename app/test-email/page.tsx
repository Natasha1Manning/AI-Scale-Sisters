"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

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

export default function TestEmailPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [debugInfo, setDebugInfo] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setMessage("")
    setDebugInfo("")

    try {
      console.log("🧪 Testing email with custom environment variables...")

      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const responseText = await response.text()
      console.log("📧 Test email response:", responseText)

      if (response.ok) {
        setStatus("success")
        setMessage("Test email sent successfully! Check your inbox (and spam folder).")

        try {
          const jsonResponse = JSON.parse(responseText)
          if (jsonResponse.emailId) {
            setDebugInfo(`Email ID: ${jsonResponse.emailId}`)
          }
        } catch (e) {
          // Response wasn't JSON, that's okay
        }
      } else {
        setStatus("error")
        setMessage("Failed to send test email. Please check the configuration.")
        setDebugInfo(`Status: ${response.status}, Response: ${responseText}`)
      }
    } catch (error) {
      console.error("❌ Test email error:", error)
      setStatus("error")
      setMessage("Network error occurred while sending test email.")
      setDebugInfo(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
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
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-2xl px-4 py-16">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-lg -z-10"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Test Email System
          </h1>
          <p className="text-lg text-gray-600 mb-2">Verify your email configuration is working correctly</p>
          <p className="text-sm text-pink-600 font-medium">Using custom environment variables ✨</p>
        </div>

        <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Test Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="your@email.com"
                disabled={status === "sending"}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || !email}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Test Email...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Send Test Email
                </>
              )}
            </button>

            {status !== "idle" && (
              <div
                className={`p-4 rounded-lg ${
                  status === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : status === "error"
                      ? "bg-red-50 border border-red-200 text-red-800"
                      : "bg-gray-50 border border-gray-200 text-gray-600"
                }`}
              >
                <div className="flex items-start gap-3">
                  {status === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : status === "error" ? (
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  ) : null}
                  <div className="flex-1">
                    <p className="font-medium">{message}</p>
                    {status === "success" && (
                      <div className="mt-2 space-y-1">
                        <p className="text-sm">✅ Email service is working correctly</p>
                        <p className="text-sm">✅ Custom environment variables are configured</p>
                        <p className="text-sm">✅ Your automation plan form is ready to use</p>
                      </div>
                    )}
                    {status === "error" && (
                      <div className="mt-2">
                        <p className="text-sm">❌ Email service configuration issue</p>
                        <p className="text-sm">Check your environment variables in Vercel</p>
                      </div>
                    )}
                    {debugInfo && (
                      <details className="mt-2">
                        <summary className="text-xs cursor-pointer">Debug Information</summary>
                        <pre className="text-xs mt-1 bg-gray-100 p-2 rounded overflow-auto">{debugInfo}</pre>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            )}
          </form>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Environment Variables Being Used:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>
                • <code>RESEND_API_KEY_EMAILS_OUTPUT</code> - Your Resend API key
              </li>
              <li>
                • <code>FROM_EMAILOUTPUT_FORM</code> - hello@aiupscalesisters.com
              </li>
              <li>
                • <code>ADMIN_EMAIL_OUTPUT</code> - natasha.manning@riseandthrivefamilies.com
              </li>
              <li>
                • <code>REPLY_TO_EMAIL_OUTPUT</code> - natasha.manning@riseandthrivefamilies.com
              </li>
              <li>
                • <code>SITE_URL_OUTPUT</code> - https://aiupscalesisters.com
              </li>
            </ul>
          </div>

          {status === "success" && (
            <div className="mt-6 text-center">
              <Link
                href="/automation-plan"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5" />
                Test Automation Plan Form
              </Link>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Need help? Email{" "}
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
