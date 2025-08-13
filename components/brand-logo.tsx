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
          parent.innerHTML = `<div class="${size} flex items-center justify-center"><span class="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">AS</span></div>`
        }
      }}
    />
  </div>
)
