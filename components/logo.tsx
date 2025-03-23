import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "full" | "icon" | "text"
  size?: "sm" | "md" | "lg"
}

export default function Logo({ className, variant = "full", size = "md" }: LogoProps) {
  // Size mappings
  const sizes = {
    sm: {
      container: "h-10",
      icon: "h-10 w-10",
      text: "text-xl",
    },
    md: {
      container: "h-12",
      icon: "h-12 w-12",
      text: "text-2xl",
    },
    lg: {
      container: "h-16",
      icon: "h-16 w-16",
      text: "text-3xl",
    },
  }

  // Only show icon for small screens when using full variant
  if (variant === "full") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/119744023-removebg-preview-VErrS6zCdfAMqjTIaxfA59tYKwuwN3.png"
            alt="Supreme Information Security LLC Logo"
            className={cn("object-contain", sizes[size].icon)}
          />
          <span className={cn("font-bold tracking-tight text-foreground hidden md:inline", sizes[size].text)}>
            Supreme Information Security LLC
          </span>
          <span className={cn("font-bold tracking-tight text-foreground md:hidden", sizes[size].text)}>
            Supreme InfoSec
          </span>
        </div>
      </div>
    )
  }

  if (variant === "icon") {
    return (
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/119744023-removebg-preview-VErrS6zCdfAMqjTIaxfA59tYKwuwN3.png"
        alt="Supreme Information Security LLC Logo"
        className={cn("object-contain", sizes[size].icon, className)}
      />
    )
  }

  if (variant === "text") {
    return (
      <span className={cn("font-bold tracking-tight text-foreground", sizes[size].text, className)}>
        Supreme Information Security LLC
      </span>
    )
  }

  return null
}

