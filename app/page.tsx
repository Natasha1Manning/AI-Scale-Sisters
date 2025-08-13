"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, Users, TrendingUp, Zap, Star, Heart } from "lucide-react"

// Brand Logo Component
const BrandLogo = ({ size = "w-8 h-8" }: { size?: string }) => (
  <div className={`${size} flex items-center justify-center`}>
    <img
      src="/images/ai-upscale-sisters-logo.png"
      alt="AI UP-SCALE Sisters Logo"
      className={`${size} object-contain`}
    />
  </div>
)

export default function HomePage() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@aiupscalesisters.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BrandLogo size="w-12 h-12" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  AI UP-SCALE SISTERS
                </span>
                <p className="text-sm text-gray-600">Empowering Women Entrepreneurs with AI</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/services" className="text-gray-700 hover:text-pink-600 transition-colors">
                Services
              </Link>
              <Link href="/results?showAll=true" className="text-gray-700 hover:text-pink-600 transition-colors">
                All Tools
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Scale Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover the perfect AI tools to grow your business, save time, and increase revenue. Built specifically
              for women entrepreneurs who are ready to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/questionnaire"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Find My AI Tools
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/results?showAll=true"
                className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                Browse All 250+ Tools
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-pink-600 mb-2">250+</div>
              <div className="text-gray-700">AI Tools Curated</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-700">Women Entrepreneurs Helped</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-pink-600 mb-2">95%</div>
              <div className="text-gray-700">Report Increased Productivity</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose AI UP-SCALE SISTERS?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We understand the unique challenges women entrepreneurs face. Our platform is designed with you in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Personalized Recommendations</h3>
              <p className="text-gray-700 leading-relaxed">
                Our smart questionnaire understands your business stage, goals, and challenges to recommend the perfect
                AI tools for your unique journey.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready-to-Use Prompts</h3>
              <p className="text-gray-700 leading-relaxed">
                Skip the learning curve with our pre-written, personalized prompts that get you results immediately.
                Just copy, paste, and watch the magic happen.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Proven Results</h3>
              <p className="text-gray-700 leading-relaxed">
                Join thousands of successful women entrepreneurs who have scaled their businesses using our curated AI
                tools and strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business with AI?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful women entrepreneurs who are already using AI to grow their businesses faster
            than ever before.
          </p>
          <Link
            href="/questionnaire"
            className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Start Your AI Journey Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Built by Women Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Enhanced Attribution Design */}
            <div className="relative max-w-3xl mx-auto mb-8">
              <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 border-2 border-pink-200 rounded-2xl p-8 shadow-lg">
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 text-pink-300">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="absolute top-4 right-4 text-purple-300">
                  <Sparkles className="w-6 h-6" />
                </div>

                {/* Main attribution text */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    Built by a Sister, for All my Sisters
                  </h3>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-400"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-pink-400 to-transparent"></div>
                  </div>

                  {/* Inspiration text */}
                  <div className="bg-white/70 rounded-lg p-4 border border-pink-100">
                    <p className="text-lg text-gray-700 font-medium mb-1">Inspired by</p>
                    <p className="text-xl font-bold text-purple-700">Agnes Agyepong - Goddess Table</p>
                    <div className="mt-2 flex justify-center">
                      <div className="flex items-center space-x-1 text-pink-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <BrandLogo size="w-24 h-24" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Diverse</h3>
              <p className="text-gray-600">Celebrating women from all backgrounds and industries</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Innovative</h3>
              <p className="text-gray-600">Cutting-edge AI solutions for modern entrepreneurs</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Experienced</h3>
              <p className="text-gray-600">Built by entrepreneurs who understand your journey</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Empowered</h3>
              <p className="text-gray-600">Supporting women to achieve their biggest dreams</p>
            </div>
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
