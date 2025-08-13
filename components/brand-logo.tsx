interface BrandLogoProps {
  size?: string
  className?: string
}

export const BrandLogo = ({ size = "w-8 h-8", className = "" }: BrandLogoProps) => (
  <div className={`${size} flex items-center justify-center ${className}`}>
    <img
      src="/images/ai-upscale-sisters-logo.png"
      alt="AI UP-SCALE Sisters Logo"
      className={`${size} object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-200 hover:scale-105`}
      style={{
        filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0 0 0 1px rgba(255, 255, 255, 0.5))",
      }}
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
