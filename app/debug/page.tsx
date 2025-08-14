"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bug, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

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

export default function DebugPage() {
  const [envData, setEnvData] = useState<any>(null)
  const [envStatus, setEnvStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [envMessage, setEnvMessage] = useState("")

  const [email, setEmail] = useState("")
  const [testStatus, setTestStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [testMessage, setTestMessage] = useState("")
  const [testData, setTestData] = useState<any>(null)

  const checkEnvironment = async () => {
    setEnvStatus("loading")
    setEnvMessage("")
    setEnvData(null)

    try {
      const response = await fetch("/api/debug-env")
      const data = await response.json()

      if (response.ok) {
        setEnvStatus("success")
        setEnvMessage("Environment variables loaded successfully")
        setEnvData(data.environment)
      } else {
        setEnvStatus("error")
        setEnvMessage(data.error || "Failed to check environment")
      }
    } catch (error) {
      setEnvStatus("error")
      setEnvMessage("Network error checking environment")
      console.error("Environment check error:", error)
    }
  }

  const runSimpleTest = async () => {
    if (!email) {
      setTestMessage("Please enter an email address")
      return
    }

    setTestStatus("loading")
    setTestMessage("")
    setTestData(null)

    try {
      const response = await fetch("/api/simple-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setTestStatus("success")
        setTestMessage("Simple test email sent successfully!")
        setTestData(data)
      } else {
        setTestStatus("error")
        setTestMessage(data.error || "Simple test failed")
        setTestData(data)
      }
    } catch (error) {
      setTestStatus("error")
      setTestMessage("Network error during simple test")
      console.error("Simple test error:", error)
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

      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <Bug className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-lg -z-10"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Email System Debug
          </h1>
          <p className="text-lg text-gray-600">Diagnose email configuration issues</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Environment Variables Check */}
          <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Environment Variables</h2>
            <p className="text-gray-600 mb-4">Check if all required environment variables are configured</p>

            <button
              onClick={checkEnvironment}
              disabled={envStatus === "loading"}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
            >
              {envStatus === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <Bug className="w-5 h-5" />
                  Check Environment
                </>
              )}
            </button>

            {envStatus !== "idle" && (
              <div
                className={`p-4 rounded-lg mb-4 ${
                  envStatus === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : envStatus === "error"
                      ? "bg-red-50 border border-red-200 text-red-800"
                      : "bg-gray-50 border border-gray-200 text-gray-600"
                }`}
              >
                <div className="flex items-start gap-3">
                  {envStatus === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : envStatus === "error" ? (
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  ) : null}
                  <div className="flex-1">
                    <p className="font-medium">{envMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {envData && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Environment Variables Status:</h3>
                <div className="space-y-2 text-sm">
                  {Object.entries(envData).map(([key, value]: [string, any]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="font-mono text-xs">{key}:</span>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          value.exists ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {value.exists ? "✅ Set" : "❌ Missing"}
                      </span>
                    </div>
                  ))}
                </div>
                {envData && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-medium">Raw Data</summary>
                    <pre className="text-xs mt-2 bg-gray-100 p-2 rounded overflow-auto">
                      {JSON.stringify(envData, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            )}
          </div>

          {/* Simple Email Test */}
          <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Simple Email Test</h2>
            <p className="text-gray-600 mb-4">Send a basic test email to verify the system works</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Test Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-pink-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="your@email.com"
                  disabled={testStatus === "loading"}
                />
              </div>

              <button
                onClick={runSimpleTest}
                disabled={testStatus === "loading" || !email}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {testStatus === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Test...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Simple Test
                  </>
                )}
              </button>

              {testStatus !== "idle" && (
                <div
                  className={`p-4 rounded-lg ${
                    testStatus === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : testStatus === "error"
                        ? "bg-red-50 border border-red-200 text-red-800"
                        : "bg-gray-50 border border-gray-200 text-gray-600"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {testStatus === "success" ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : testStatus === "error" ? (
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    ) : null}
                    <div className="flex-1">
                      <p className="font-medium">{testMessage}</p>
                      {testStatus === "success" && testData && (
                        <div className="mt-2 text-sm">
                          <p>✅ Email ID: {testData.emailId}</p>
                          <p>✅ From: {testData.from}</p>
                          <p>✅ To: {testData.to}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {testData && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium">Test Response Data</summary>
                  <pre className="text-xs mt-2 bg-gray-100 p-2 rounded overflow-auto">
                    {JSON.stringify(testData, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-2">🔍 Troubleshooting Steps:</h3>
          <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
            <li>First, check that all environment variables are properly set</li>
            <li>Run the simple email test to verify basic functionality</li>
            <li>Check your spam folder for test emails</li>
            <li>Verify your domain is properly configured in Resend</li>
            <li>If simple test works but automation plan doesn't, check the form data</li>
          </ol>
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
