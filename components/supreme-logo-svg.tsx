import { cn } from "@/lib/utils"

interface SupremeLogoSVGProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  withGlow?: boolean
}

export default function SupremeLogoSVG({ size = "md", className, withGlow = false }: SupremeLogoSVGProps) {
  // Size mappings
  const sizes = {
    sm: { width: "40px", height: "40px" },
    md: { width: "60px", height: "60px" },
    lg: { width: "80px", height: "80px" },
    xl: { width: "120px", height: "120px" },
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        withGlow &&
          "after:absolute after:inset-0 after:rounded-full after:bg-primary/10 after:blur-xl after:transform after:scale-150",
        className,
      )}
    >
      <div className="relative z-10">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/119744023-removebg-preview-VErrS6zCdfAMqjTIaxfA59tYKwuwN3.png"
          alt="Supreme Information Security LLC"
          style={{
            width: sizes[size].width,
            height: sizes[size].height,
          }}
          className={cn("object-contain", withGlow && "drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]")}
        />
      </div>
    </div>
  )
}

