interface BrandLogoProps {
  size?: string
  className?: string
}

export const BrandLogo = ({ size = "w-8 h-8", className = "" }: BrandLogoProps) => (
  <div className={`${size} flex items-center justify-center ${className}`}>
    <img
      src="/images/ai-upscale-sisters-logo.png"
      alt="AI UP-SCALE Sisters Logo"
      className={`${size} object-contain`}
    />
  </div>
)
