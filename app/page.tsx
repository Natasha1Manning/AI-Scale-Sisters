"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Users, TrendingUp, Heart, Star, Zap, Target, Globe } from "lucide-react"
import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "E-commerce Founder",
    content:
      "This platform helped me discover AI tools that automated my customer service and increased sales by 40%. Game-changer!",
    avatar: "/placeholder.svg?height=40&width=40&text=SC",
  },
  {
    name: "Maria Rodriguez",
    role: "Marketing Consultant",
    content:
      "I found the perfect AI writing assistant that cut my content creation time in half. Now I can focus on strategy instead of writing.",
    avatar: "/placeholder.svg?height=40&width=40&text=MR",
  },
  {
    name: "Jessica Kim",
    role: "Tech Startup CEO",
    content:
      "The personalised recommendations were spot-on. I implemented 3 AI tools that transformed how my team works.",
    avatar: "/placeholder.svg?height=40&width=40&text=JK",
  },
]

const categories = [
  {
    name: "Writing & Content",
    icon: "✍️",
    description: "AI writers, editors, and content creators",
    toolCount: "45+ tools",
  },
  {
    name: "Image & Design",
    icon: "🎨",
    description: "AI image generators and design tools",
    toolCount: "35+ tools",
  },
  {
    name: "Video & Avatars",
    icon: "🎬",
    description: "AI video creation and avatar tools",
    toolCount: "25+ tools",
  },
  {
    name: "Social Media",
    icon: "📱",
    description: "Social media management and marketing",
    toolCount: "30+ tools",
  },
  {
    name: "Customer Support",
    icon: "💬",
    description: "AI chatbots and support systems",
    toolCount: "15+ tools",
  },
  {
    name: "E-commerce & Sales",
    icon: "🛒",
    description: "Online store and sales optimization",
    toolCount: "20+ tools",
  },
  {
    name: "Automation",
    icon: "⚡",
    description: "Workflow automation and productivity",
    toolCount: "40+ tools",
  },
  {
    name: "Analytics & Data",
    icon: "📊",
    description: "Business intelligence and insights",
    toolCount: "12+ tools",
  },
  {
    name: "Email Marketing",
    icon: "📧",
    description: "Email campaigns and automation",
    toolCount: "25+ tools",
  },
  {
    name: "Website Building",
    icon: "🌐",
    description: "AI-powered website creators",
    toolCount: "20+ tools",
  },
  {
    name: "Finance & Accounting",
    icon: "💰",
    description: "Financial management and tracking",
    toolCount: "15+ tools",
  },
  {
    name: "Research & Learning",
    icon: "🔍",
    description: "AI research assistants and learning",
    toolCount: "20+ tools",
  },
]

export default function HomePage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <BrandLogo />
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/questionnaire" className="text-gray-600 hover:text-purple-600 transition-colors">
              Find Tools
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-purple-600 transition-colors">
              Services
            </Link>
            <Link href="/automation-plan" className="text-gray-600 hover:text-purple-600 transition-colors">
              Get Automation Plan
            </Link>
          </nav>
          <Link href="/questionnaire">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              250+ AI Tools Curated for Women Entrepreneurs
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            Find Your Perfect AI Tools in Minutes
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stop wasting time searching through endless AI tools. Get personalised recommendations based on your
            business needs, skill level, and goals. Built by women entrepreneurs, for women entrepreneurs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/questionnaire">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
              >
                Take the 2-Minute Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg bg-transparent"
              >
                View Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
              <div className="text-gray-600">Report Increased Productivity</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>
              <div className="text-gray-600">AI Tools Curated</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Heart className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600">Built for Women</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              AI Tools for Every Part of Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From content creation to customer support, we've curated the best AI tools across all business categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-pink-50/50 to-purple-50/50 border-pink-200/50 ${
                  hoveredCategory === category.name ? "ring-2 ring-purple-500 shadow-lg" : ""
                }`}
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full border-2 border-pink-200/60 flex items-center justify-center">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <CardTitle className="text-lg text-gray-800">{category.name}</CardTitle>
                  <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 text-xs">
                    {category.toolCount}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm text-gray-600">{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/questionnaire">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Find Your Perfect Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get personalised AI tool recommendations in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Take the Quiz</h3>
              <p className="text-gray-600">Answer a few questions about your business, goals, and skill level</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-100 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalised AI tool suggestions with beginner-friendly explanations
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Growing</h3>
              <p className="text-gray-600">Implement the tools and watch your business productivity soar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how other women entrepreneurs are transforming their businesses with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges women entrepreneurs face
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalised Recommendations</h3>
              <p className="text-gray-600 text-sm">Get tools matched to your specific business needs and skill level</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-100 to-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Built by Women</h3>
              <p className="text-gray-600 text-sm">Created by women entrepreneurs who understand your journey</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Beginner-Friendly</h3>
              <p className="text-gray-600 text-sm">Clear explanations and prompts to get you started immediately</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600 text-sm">Tools available worldwide with regional recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of women entrepreneurs who are already using AI to scale their businesses faster and smarter.
          </p>
          <Link href="/questionnaire">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Your AI Journey Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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

          <div className="text-center mb-4">
            <p className="text-lg font-medium text-white mb-2">Built by a Sister, for All my Sisters</p>
            <p className="text-gray-300 mb-4">Inspired by Agnes Agyepong - Goddess Table</p>
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
