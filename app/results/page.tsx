"use client"

import { useState, useEffect } from "react"
import {
  Copy,
  ExternalLink,
  Grid,
  List,
  Search,
  Star,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Info,
  DollarSign,
  MapPin,
  ArrowLeft,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import {
  aiToolsDatabase,
  getUniqueCategories,
  getUniqueRegions,
  getUniqueSkillLevels,
  type AITool,
} from "../../data/ai-tools-database"

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
  {
    quote: "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    quote: "If you're not making someone else's life better, then you're wasting your time.",
    author: "Oprah Winfrey, Media Mogul & Entrepreneur",
  },
  {
    quote:
      "I had to make my own living and my own opportunity. But I made it! Don't sit down and wait for the opportunities to come. Get up and make them.",
    author: "Madam C.J. Walker, First Female Self-Made Millionaire in America",
  },
  {
    quote: "You can't use up creativity. The more you use, the more you have.",
    author: "Dr. Maya Angelou, Author & Entrepreneur",
  },
  {
    quote: "Success is not about the money you make, it's about the difference you make in people's lives.",
    author: "Michelle Obama, Former First Lady & Entrepreneur",
  },
  {
    quote: "I want every little girl who's told she's bossy to be told instead that she has leadership skills.",
    author: "Sheryl Sandberg, COO of Meta",
  },
  {
    quote: "Don't let anyone rob you of your imagination, your creativity, or your curiosity.",
    author: "Mae Jemison, First African American Woman Astronaut & Entrepreneur",
  },
]

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

export default function ResultsPage() {
  const [questionnaireData, setQuestionnaireData] = useState<any>(null)
  const [filteredTools, setFilteredTools] = useState<AITool[]>(aiToolsDatabase)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("all")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [showAllTools, setShowAllTools] = useState(false)
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)

  const currentQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]
  const categories = getUniqueCategories()
  const regions = getUniqueRegions()
  const skillLevels = getUniqueSkillLevels()

  useEffect(() => {
    try {
      const data = localStorage.getItem("questionnaireData")
      const urlParams = new URLSearchParams(window.location.search)
      const showAll = urlParams.get("showAll") === "true"

      if (data) {
        const parsed = JSON.parse(data)
        setQuestionnaireData(parsed)
      }

      if (showAll) {
        setShowAllTools(true)
      }
    } catch (error) {
      console.error("Error loading questionnaire data:", error)
    }
  }, [])

  useEffect(() => {
    let filtered = [...aiToolsDatabase]

    // Apply search filter first
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim()
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchLower) ||
          tool.description.toLowerCase().includes(searchLower) ||
          tool.beginnerExplanation.toLowerCase().includes(searchLower) ||
          tool.category.toLowerCase().includes(searchLower) ||
          tool.personalizedPrompt.toLowerCase().includes(searchLower) ||
          (tool.tags && tool.tags.some((tag) => tag.toLowerCase().includes(searchLower))),
      )
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory)
    }

    // Apply skill level filter
    if (selectedSkillLevel !== "all") {
      filtered = filtered.filter((tool) => tool.skillLevel === selectedSkillLevel)
    }

    // Apply region filter
    if (selectedRegion !== "all") {
      filtered = filtered.filter((tool) => tool.regions.includes(selectedRegion) || tool.regions.includes("Global"))
    }

    // Smart filtering based on questionnaire data (only if not showing all tools)
    if (!showAllTools && questionnaireData) {
      const businessTypes = questionnaireData.businessTypes || []
      const businessStage = questionnaireData.businessStage || ""
      const challenge = questionnaireData.challenge?.toLowerCase() || ""

      // Prioritise tools based on business type
      const relevantCategories: string[] = []

      if (businessTypes.includes("Website") || businessTypes.includes("E-commerce Store")) {
        relevantCategories.push("Website Building", "E-commerce & Sales", "Image Generation & Design")
      }

      if (businessTypes.includes("Social Media Posts") || businessTypes.includes("Video Content")) {
        relevantCategories.push("Social Media & Marketing", "Image Generation & Design", "Video & Avatar Creation")
      }

      if (businessTypes.includes("Online Course") || businessTypes.includes("E-book/Guide")) {
        relevantCategories.push("Writing & Content Generation", "Video & Avatar Creation")
      }

      if (businessTypes.includes("Consulting Services") || businessTypes.includes("Service Business")) {
        relevantCategories.push("Customer Service & Support", "Automation & Productivity")
      }

      // Filter by challenge-specific needs
      if (challenge.includes("time") || challenge.includes("automat")) {
        relevantCategories.push("Automation & Productivity")
      }

      if (challenge.includes("content") || challenge.includes("writing")) {
        relevantCategories.push("Writing & Content Generation")
      }

      if (challenge.includes("customer") || challenge.includes("support")) {
        relevantCategories.push("Customer Service & Support")
      }

      if (challenge.includes("market") || challenge.includes("social")) {
        relevantCategories.push("Social Media & Marketing")
      }

      // Apply smart filtering if we have relevant categories and no manual filters
      if (relevantCategories.length > 0 && selectedCategory === "all" && !searchTerm.trim()) {
        filtered = filtered.filter((tool) => relevantCategories.some((category) => tool.category.includes(category)))
      }

      // Skill level filtering based on business stage
      if (selectedSkillLevel === "all") {
        if (businessStage === "Just an idea" || businessStage === "Planning stage") {
          filtered = filtered.filter((tool) => tool.skillLevel === "Beginner")
        } else if (businessStage === "Building/Developing") {
          filtered = filtered.filter((tool) => tool.skillLevel === "Beginner" || tool.skillLevel === "Intermediate")
        }
      }

      // Sort by relevance (prioritise tagged tools)
      filtered = filtered.sort((a, b) => {
        const aScore =
          (a.tags?.includes("our-top-pick") ? 3 : 0) +
          (a.tags?.includes("startup-fav") ? 2 : 0) +
          (a.tags?.includes("trending") ? 1 : 0)
        const bScore =
          (b.tags?.includes("our-top-pick") ? 3 : 0) +
          (b.tags?.includes("startup-fav") ? 2 : 0) +
          (b.tags?.includes("trending") ? 1 : 0)
        return bScore - aScore
      })
    }

    setFilteredTools(filtered)
  }, [searchTerm, selectedCategory, selectedSkillLevel, selectedRegion, questionnaireData, showAllTools])

  const copyPrompt = (prompt: string, toolName: string) => {
    try {
      let personalisedPrompt = prompt

      if (questionnaireData) {
        const businessContext = questionnaireData.businessTypes?.join(" and ") || "business"
        const targetAudience = questionnaireData.audience || "target customers"
        const mainChallenge = questionnaireData.challenge || "business challenges"
        const currentStage = questionnaireData.businessStage || "current stage"
        const goals = questionnaireData.goals || "business goals"
        const inspiration = questionnaireData.inspiration || "current project"

        const contextualPrompt = `🎯 MY BUSINESS: ${businessContext}
📍 CURRENT STAGE: ${currentStage}
👥 TARGET AUDIENCE: ${targetAudience}
🚀 MAIN PROJECT: ${inspiration}
💡 KEY CHALLENGE: ${mainChallenge}
✨ ULTIMATE GOAL: ${goals}

Based on this context: ${prompt}`

        personalisedPrompt = contextualPrompt
      }

      navigator.clipboard.writeText(personalisedPrompt)
      setCopiedPrompt(toolName)

      setTimeout(() => {
        setCopiedPrompt(null)
      }, 2000)
    } catch (error) {
      console.error("Error copying prompt:", error)
      alert("Error copying prompt. Please try again.")
    }
  }

  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "startup-fav":
        return <Star className="w-3 h-3" />
      case "creator-pick":
        return <Users className="w-3 h-3" />
      case "our-top-pick":
        return <Zap className="w-3 h-3" />
      case "trending":
        return <TrendingUp className="w-3 h-3" />
      default:
        return null
    }
  }

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "startup-fav":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "creator-pick":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "our-top-pick":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "trending":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRegionFlag = (regions: string[]) => {
    if (!regions || regions.length === 0) return "🌍"
    const region = regions[0]
    switch (region) {
      case "North America":
        return "🇺🇸"
      case "Europe":
        return "🇪🇺"
      case "Asia":
        return "🌏"
      case "Australia":
        return "🇦🇺"
      case "South America":
        return "🌎"
      case "Africa":
        return "🌍"
      case "Global":
        return "🌍"
      default:
        return "🌍"
    }
  }

  const getRegionPopularity = (regions: string[]) => {
    if (!regions || regions.length === 0) return "🌍 Available globally"
    if (regions.includes("Global")) return "🌍 Worldwide popularity"
    if (regions.includes("North America")) return "🔥 Very Popular in North America"
    if (regions.includes("Europe")) return "🔥 Popular in Europe"
    if (regions.includes("Asia")) return "🔥 Leading in Asia"
    return `🌍 Available in ${regions.join(", ")}`
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
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                {filteredTools.length} of {aiToolsDatabase.length} AI tools
              </div>
              <Link
                href="/"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {showAllTools ? "All AI Tools" : "Your Personalised AI Tools"}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {showAllTools
              ? "Browse our complete collection of 50+ AI tools for women entrepreneurs"
              : "Based on your responses, here are the perfect AI tools to help scale your business"}
          </p>
        </div>

        {/* Toggle Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAllTools(!showAllTools)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <Globe className="w-5 h-5" />
            {showAllTools ? "Show My Personalised Tools" : "Show All 50+ Tools"}
          </button>
        </div>

        {/* Inspirational Quote */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 rounded-lg p-6 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-30">
              <BrandLogo size="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Wise Words from Successful Women</h3>
            <blockquote className="text-xl font-light italic mb-2">"{currentQuote.quote}"</blockquote>
            <cite className="text-pink-200">— {currentQuote.author}</cite>
          </div>
        </div>

        {/* Enhanced Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-pink-200 focus:border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full lg:w-48 px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full lg:w-48 px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            >
              <option value="all">All Regions</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {getRegionFlag([region])} {region}
                </option>
              ))}
            </select>

            <select
              value={selectedSkillLevel}
              onChange={(e) => setSelectedSkillLevel(e.target.value)}
              className="w-full lg:w-48 px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
            >
              <option value="all">All Skill Levels</option>
              {skillLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-pink-500 text-white"
                    : "border border-pink-200 text-pink-600 hover:bg-pink-50"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-pink-500 text-white"
                    : "border border-pink-200 text-pink-600 hover:bg-pink-50"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tools Grid/List */}
        <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="border border-pink-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-200 hover:scale-105 rounded-lg overflow-hidden"
            >
              <div className="p-4 border-b border-pink-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{tool.name}</h3>
                      <span className="text-lg">{getRegionFlag(tool.regions)}</span>
                    </div>
                    <span className="inline-block px-2 py-1 text-xs border border-pink-300 text-pink-700 rounded-full mb-2">
                      {tool.category}
                    </span>
                    <div className="mb-2">
                      <span className="text-xs bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-2 py-1 rounded-full border border-orange-200">
                        {getRegionPopularity(tool.regions)}
                      </span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center ml-4">
                    <img
                      src={`/placeholder.svg?height=64&width=64&query=professional woman entrepreneur using ${tool.name}, diverse ethnicity, confident business owner`}
                      alt={`${tool.name} user`}
                      className="w-full h-full rounded-lg object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          const sparkles = document.createElement("div")
                          sparkles.innerHTML = `<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`
                          parent.appendChild(sparkles)
                        }
                      }}
                    />
                  </div>
                </div>

                {tool.tags && tool.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {tool.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-1 rounded-full border flex items-center gap-1 ${getTagColor(tag)}`}
                      >
                        {getTagIcon(tag)}
                        {tag.replace("-", " ")}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 space-y-4">
                {/* What it is - Highlighted Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-blue-600" />
                    <h4 className="font-semibold text-blue-800 text-sm">What it is</h4>
                  </div>
                  <p className="text-sm text-blue-700">{tool.description}</p>
                </div>

                {/* I'm new to this - Different colored section */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-green-600" />
                    <h4 className="font-semibold text-green-800 text-sm">I'm new to this</h4>
                  </div>
                  <p className="text-sm text-green-700">{tool.beginnerExplanation}</p>
                </div>

                {/* Tool Details - Clean Grid Layout */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Skill Level</p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            tool.skillLevel === "Beginner"
                              ? "bg-green-100 text-green-800"
                              : tool.skillLevel === "Intermediate"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {tool.skillLevel}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-3 h-3 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Pricing</p>
                        <p className="text-xs font-medium text-gray-800">{tool.pricing}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 col-span-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-3 h-3 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Region</p>
                        <p className="text-xs font-medium text-gray-800">
                          {getRegionFlag(tool.regions)} {tool.regions.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => copyPrompt(tool.personalizedPrompt, tool.name)}
                    className="flex-1 flex items-center justify-center px-3 py-2 border border-pink-300 text-pink-600 hover:bg-pink-50 rounded-md text-sm font-medium transition-colors"
                    disabled={copiedPrompt === tool.name}
                  >
                    {copiedPrompt === tool.name ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Prompt
                      </>
                    )}
                  </button>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-md text-sm font-medium transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Try Tool
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p>Try adjusting your filters or search terms</p>
            </div>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedRegion("all")
                setSelectedSkillLevel("all")
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

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
