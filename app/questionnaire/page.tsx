"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

const businessTypes = [
  "Mobile App",
  "Website",
  "E-commerce Store",
  "YouTube Channel",
  "Video Content",
  "Social Media Posts",
  "E-book/Guide",
  "Podcast",
  "Online Course",
  "Newsletter",
  "Blog/Content Site",
  "Digital Toolkit",
  "Consulting Services",
  "SaaS Product",
  "Physical Product",
  "Service Business",
  "Just Exploring Options",
  "Other",
]

const businessStages = [
  "Just an idea",
  "Planning stage",
  "Building/Developing",
  "Launched but early stage",
  "Growing and scaling",
  "Established business",
  "Just exploring options",
]

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

export default function QuestionnairePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    inspiration: "",
    challenge: "",
    audience: "",
    businessTypes: [] as string[],
    businessStage: "",
    goals: "",
    shareWithVC: false,
  })

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    } else {
      // Store data and navigate to results
      localStorage.setItem("questionnaireData", JSON.stringify(formData))
      router.push("/results")
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleBusinessTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        businessTypes: [...prev.businessTypes, type],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        businessTypes: prev.businessTypes.filter((t) => t !== type),
      }))
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.inspiration.trim().length > 0
      case 2:
        return formData.challenge.trim().length > 0
      case 3:
        return formData.audience.trim().length > 0
      case 4:
        return formData.businessTypes.length > 0
      case 5:
        return formData.businessStage.length > 0
      case 6:
        return formData.goals.trim().length > 0
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BrandLogo size="w-10 h-10" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  AI UP-SCALE SISTERS
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600">Step {currentStep} of 6</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            />
          </div>
        </div>

        <div className="border border-pink-200 bg-white/60 backdrop-blur-sm rounded-lg">
          <div className="p-6 border-b border-pink-100">
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {currentStep === 1 && "What are you working on? 🚀"}
              {currentStep === 2 && "What challenge are you solving? 🎯"}
              {currentStep === 3 && "Who's it for? 👥"}
              {currentStep === 4 && "What do you want to build? 🚀"}
              {currentStep === 5 && "What stage are you at? 📈"}
              {currentStep === 6 && "What do you want people to feel or gain? 💫"}
            </h2>
          </div>
          <div className="p-6 space-y-6">
            {currentStep === 1 && (
              <div>
                <div className="text-center mb-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <p className="text-pink-800 font-semibold mb-2">
                    Put in your details about your project to find the perfect AI tools
                  </p>
                  <p className="text-pink-600 text-sm">Let's get started!</p>
                </div>
                <p className="text-gray-700 mb-4 font-semibold">
                  What are you working on, want to upscale or doing research on?
                </p>
                <textarea
                  placeholder="Tell us about your current project, what you want to improve or scale, or what you're researching. For example: 'I'm building a website for my coaching business' or 'I want to create better social media content' or 'I'm researching AI tools for my startup idea'..."
                  value={formData.inspiration}
                  onChange={(e) => setFormData((prev) => ({ ...prev, inspiration: e.target.value }))}
                  className="w-full min-h-32 p-3 border border-pink-200 focus:border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                />
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <p className="text-gray-700 mb-4 font-semibold">
                  What challenge are you trying to solve—or what gap have you noticed?
                </p>
                <textarea
                  placeholder="Describe the problem your business addresses or the opportunity you've identified..."
                  value={formData.challenge}
                  onChange={(e) => setFormData((prev) => ({ ...prev, challenge: e.target.value }))}
                  className="w-full min-h-32 p-3 border border-pink-200 focus:border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                />
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <p className="text-gray-700 mb-4 font-semibold">
                  Who do you imagine using this? Be as specific or broad as you like.
                </p>
                <textarea
                  placeholder="Describe your target audience - their demographics, interests, pain points, or any other relevant details..."
                  value={formData.audience}
                  onChange={(e) => setFormData((prev) => ({ ...prev, audience: e.target.value }))}
                  className="w-full min-h-32 p-3 border border-pink-200 focus:border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                />
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <p className="text-gray-700 mb-4 font-semibold">
                  Choose a format for your idea. You can pick more than one!
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {businessTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={type}
                        checked={formData.businessTypes.includes(type)}
                        onChange={(e) => handleBusinessTypeChange(type, e.target.checked)}
                        className="w-4 h-4 text-pink-600 border-pink-300 rounded focus:ring-pink-500"
                      />
                      <label htmlFor={type} className="text-sm font-medium text-gray-700 cursor-pointer">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <p className="text-gray-700 mb-4 font-semibold">What stage is your business at right now?</p>
                <div className="space-y-3">
                  {businessStages.map((stage) => (
                    <div key={stage} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={stage}
                        name="businessStage"
                        checked={formData.businessStage === stage}
                        onChange={() => setFormData((prev) => ({ ...prev, businessStage: stage }))}
                        className="w-4 h-4 text-pink-600 border-pink-300 focus:ring-pink-500"
                      />
                      <label htmlFor={stage} className="text-sm font-medium text-gray-700 cursor-pointer">
                        {stage}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div>
                <p className="text-gray-700 mb-4 font-semibold">
                  What's the deeper value, purpose, or transformation you want your idea to bring?
                </p>
                <textarea
                  placeholder="How do you want to impact your customers' lives? What change do you want to create in the world?"
                  value={formData.goals}
                  onChange={(e) => setFormData((prev) => ({ ...prev, goals: e.target.value }))}
                  className="w-full min-h-32 p-3 border border-pink-200 focus:border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                />

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="shareWithVC"
                      checked={formData.shareWithVC}
                      onChange={(e) => setFormData((prev) => ({ ...prev, shareWithVC: e.target.checked }))}
                      className="w-4 h-4 text-green-600 border-green-400 rounded focus:ring-green-500 mt-1"
                    />
                    <div>
                      <label htmlFor="shareWithVC" className="text-sm font-medium text-green-800 cursor-pointer block">
                        🟩 Tick to share your idea with The Rise Lab VC network
                      </label>
                      <p className="text-xs text-green-700 mt-1">
                        We're connected with people who fund bold ideas. Tick this box if you'd like your idea to be
                        considered for feedback or funding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center px-4 py-2 border border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>

              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex items-center px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === 6 ? "Get My Personalised Tools" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
