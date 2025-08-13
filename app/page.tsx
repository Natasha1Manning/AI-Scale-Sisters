"use client"

import Link from "next/link"
import { CheckCircle, Sparkles, Users, Zap } from "lucide-react"
import { useState, useEffect } from "react"

const inspirationalQuotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Sara Blakely, Founder of Spanx",
  },
  {
    quote: "Don't be intimidated by what you don't know. That can be your greatest strength.",
    author: "Whitney Wolfe Herd, Founder of Bumble",
  },
  {
    quote: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder, Founder of Estée Lauder Companies",
  },
]

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Personalised Tool Recommendations",
    description: "Curated specifically for your project type and skill level",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Beginner-Friendly Explanations",
    description: "Every tool explained in simple, non-technical language",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Direct Links to Try Tools",
    description: "Click through to start using each recommended tool immediately",
  },
]

// Brand Logo Component - Fixed to use actual image
const BrandLogo = ({ size = "w-8 h-8" }: { size?: string }) => (
  <div className={`${size} flex items-center justify-center`}>
    <img
      src="/images/ai-upscale-sisters-logo.png"
      alt="AI UP-SCALE Sisters Logo"
      className={`${size} object-contain`}
      onError={(e) => {
        // Fallback if image doesn't load
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

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(inspirationalQuotes[0])

  useEffect(() => {
    setMounted(true)
    setCurrentQuote(inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)])
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-xl">AS</span>
          </div>
          <p className="text-gray-600">Loading AI UP-SCALE SISTERS...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BrandLogo size="w-12 h-12" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  AI UP-SCALE SISTERS
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <BrandLogo size="w-40 h-40 md:w-48 md:h-48" />
                <div className="absolute -inset-3 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-lg -z-10"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
              Ready to Find Your Perfect AI Tools?
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              It takes less than 2 minutes to get your personalised recommendations from 250+ AI tools
            </p>

            {/* Centered Attribution Text */}
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <p className="text-lg text-pink-600 font-semibold mb-1">Built by a Sister, for All my Sisters</p>
                <p className="text-sm text-purple-600 font-medium">Inspired by Agnes Agyepong - Goddess Table</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200 shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium text-gray-800">100% Free</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200 shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium text-gray-800">No Sign-up Required</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200 shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium text-gray-800">Instant Results</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200 shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-medium text-gray-800">250+ AI Tools</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/questionnaire">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto">
                <Sparkles className="w-5 h-5" />
                Get My Personalised Tools
              </button>
            </Link>
            <Link href="/results?showAll=true">
              <button className="bg-white/90 backdrop-blur-sm border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto">
                <Users className="w-5 h-5" />
                Browse All 250+ Tools
              </button>
            </Link>
          </div>

          {/* Built by Women Section */}
          <div className="mt-16 p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-pink-200 shadow-lg">
            <div className="text-center mb-6">
              <p className="text-lg text-pink-600 font-semibold mb-1">Built by a Sister, for All my Sisters</p>
              <p className="text-sm text-purple-600 font-medium">Inspired by Agnes Agyepong - Goddess Table</p>
            </div>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <BrandLogo size="w-20 h-20" />
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-lg -z-10"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-2 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Diverse</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-2 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Innovative</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-2 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Experienced</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mb-2 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Empowered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4">
                  <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Copy-Paste Prompts</h3>
              <p className="text-gray-600">Ready-made prompts to get started with each AI tool</p>
              <div className="mt-4">
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
              </div>
            </div>

            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Regional Availability</h3>
              <p className="text-gray-600">Filter tools by region: UK, USA, China, and Global options</p>
              <div className="mt-4">
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
              </div>
            </div>

            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Optional VC Network Access</h3>
              <p className="text-gray-600">Share your idea with investors and mentors (completely optional)</p>
              <div className="mt-4">
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-20">
              <BrandLogo size="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold mb-4">Wise Words from Successful Women</h3>
            <blockquote className="text-2xl font-light italic mb-4">"{currentQuote.quote}"</blockquote>
            <cite className="text-pink-200 font-medium">— {currentQuote.author}</cite>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BrandLogo size="w-10 h-10" />
            <div>
              <span className="text-xl font-bold">AI UP-SCALE Sisters</span>
            </div>
          </div>
          <p className="text-gray-400 mb-6">Empowering women entrepreneurs with AI tools</p>

          {/* Professional Services Section */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">Custom AI Automations & Private Agents</h3>
            <p className="text-gray-300 mb-4">
              Get in touch if you want Natasha to build Custom AI automations & private agents, built to your voice and
              tools—save hours, keep the magic
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/automation-plan"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                ✨ Get My Automation Plan
              </Link>
              <a
                href="https://www.linkedin.com/in/natasha-manning-7bb914205/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 justify-center"
              >
                💼 Connect on LinkedIn
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-2">
            © 2024 AI UP-SCALE Sisters. Built with ❤️ for women entrepreneurs.
          </p>
          <p className="text-sm text-gray-400">
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/natasha-manning-7bb914205/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline font-medium"
            >
              Natasha Manning
            </a>{" "}
            - Contact: natasha.manning@riseandthrivefamilies.com
          </p>
        </div>
      </footer>
    </div>
  )
}
