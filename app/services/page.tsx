"use client"

import type React from "react"

import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Shield, Sparkles, Users, Zap } from "lucide-react"
import { useState } from "react"

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

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeWaster: "",
    toolStack: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! We'll reply with a simple 1-page plan within 24 hours.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
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
            <Link href="/" className="text-pink-600 hover:text-pink-700 font-medium transition-colors">
              ← Back to Tools
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
              Custom AI Automations & Private Agents
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Natasha designs and ships lightweight AI agents that take the busywork off your plate—integrated with your
              tools (Notion, Airtable, Slack, Shopify, Gmail). Fast, safe, and built with your brilliance in mind.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/automation-plan"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                <Sparkles className="w-5 h-5" />
                Get Your Free Automation Plan
              </Link>
              <a
                href="https://www.linkedin.com/in/natasha-manning-7bb914205/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-sm border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                <Users className="w-5 h-5" />
                Book a 15-min Fit Call
              </a>
            </div>

            <p className="text-sm text-gray-600">
              No pressure, no jargon. We'll suggest the smallest build that makes the biggest difference.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Let an AI Agent handle the repetitive work—so you can create, lead, and sell
          </h2>

          <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
            From idea to working automation, Natasha builds private AI agents tailored to your brand voice and systems.
            Think: a helpful teammate that drafts, organises, and follows up—without you micromanaging. Designed
            especially for women entrepreneurs and creators who want efficiency without losing soul.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">Inbox triage & smart replies</h3>
              <p className="text-gray-600 text-center">
                While you sleep, your agent sorts emails and drafts responses in your voice
              </p>
            </div>

            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">Lead-gen & DM follow-ups</h3>
              <p className="text-gray-600 text-center">
                Nurture prospects with messages that sound authentically like you
              </p>
            </div>

            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">Research briefs & content drafts</h3>
              <p className="text-gray-600 text-center">Get comprehensive research and first drafts ready in minutes</p>
            </div>

            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">Shopify order after-care</h3>
              <p className="text-gray-600 text-center">
                Automated review requests and customer follow-ups on autopilot
              </p>
            </div>

            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">CRM hygiene</h3>
              <p className="text-gray-600 text-center">Notes, tags, and tasks automatically kept up to date</p>
            </div>

            <div className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">Daily CEO summary</h3>
              <p className="text-gray-600 text-center">Key metrics and priorities delivered in one clear message</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What We Build</h2>

          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Sales/DM Agent</h3>
              <p className="text-gray-700">Qualifies leads, books calls, logs to your CRM</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Content Agent</h3>
              <p className="text-gray-700">Repurposes video → email/newsletter/carousels</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Ops Agent</h3>
              <p className="text-gray-700">Updates Airtable/Notion, chases tasks, sends reminders</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Care Agent</h3>
              <p className="text-gray-700">Answers FAQs, routes complex queries to you with context</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-pink-600">Research Agent</h3>
              <p className="text-gray-700">Pulls sources, writes briefs, cites where it got things</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works (2–4 weeks)</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Audit (free)</h3>
              <p className="text-gray-600">Show us your workflow; we map 2–3 high-ROI automations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Prototype</h3>
              <p className="text-gray-600">A safe agent in your sandbox with your voice & tools</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Ship</h3>
              <p className="text-gray-600">Connect to real data, add guardrails, handover & training</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Support</h3>
              <p className="text-gray-600">14-day polish + optional monthly care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Fit */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-white mb-12">
            <h3 className="text-2xl font-bold mb-4">Trust & Fit</h3>
            <p className="text-lg">
              No lock-in. Your data stays yours. Clear scope + fixed price. Perfect for founders, coaches, creatives,
              and boutique teams.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 px-4 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get Your Free Automation Plan</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="timeWaster" className="block text-sm font-medium text-gray-700 mb-2">
                What drains your time most?
              </label>
              <select
                id="timeWaster"
                value={formData.timeWaster}
                onChange={(e) => setFormData((prev) => ({ ...prev, timeWaster: e.target.value }))}
                className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              >
                <option value="">Choose one...</option>
                <option value="email-management">Email management & responses</option>
                <option value="social-media">Social media posting & engagement</option>
                <option value="lead-followup">Lead follow-up & nurturing</option>
                <option value="content-creation">Content creation & repurposing</option>
                <option value="data-entry">Data entry & CRM updates</option>
                <option value="customer-support">Customer support & FAQs</option>
                <option value="research-tasks">Research & information gathering</option>
                <option value="scheduling">Scheduling & calendar management</option>
              </select>
            </div>

            <div>
              <label htmlFor="toolStack" className="block text-sm font-medium text-gray-700 mb-2">
                Your main tool stack
              </label>
              <input
                type="text"
                id="toolStack"
                value={formData.toolStack}
                onChange={(e) => setFormData((prev) => ({ ...prev, toolStack: e.target.value }))}
                placeholder="e.g., Notion, Gmail, Shopify, Slack..."
                className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Send Me My Automation Plan
            </button>

            <p className="text-sm text-gray-600 text-center">
              No spam, no tech-speak. We'll reply with a simple 1-page plan.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Will it sound like me?</h3>
              <p className="text-gray-700">
                Yes—your agent is trained on your tone and guided by guardrails so it answers on-brand or escalates.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Is my data safe?</h3>
              <p className="text-gray-700">
                We keep your keys in your account and limit what the agent can touch. You can turn it off anytime.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Do I need to be 'techy'?</h3>
              <p className="text-gray-700">
                No. We set it up, show you how to use it, and leave you with a plain-English playbook.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-pink-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">What does it cost?</h3>
              <p className="text-gray-700">
                After a free audit, most starter builds land in a fixed-fee range with clear deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BrandLogo size="w-12 h-12" />
            <div>
              <span className="text-xl font-bold">AI UP-SCALE Sisters</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">Custom AI Automations & Private Agents</p>
          <p className="text-sm text-gray-500">© 2024 AI UP-SCALE Sisters. Built with ❤️ for women entrepreneurs.</p>
        </div>
      </footer>
    </div>
  )
}
