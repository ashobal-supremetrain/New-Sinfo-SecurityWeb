import { cn } from "@/lib/utils"

interface SupremeLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  withGlow?: boolean
}

export default function SupremeLogo({ size = "md", className, withGlow = false }: SupremeLogoProps) {
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
        <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm p-1">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/119744023-removebg-preview-VErrS6zCdfAMqjTIaxfA59tYKwuwN3.png"
            alt="Supreme Information Security LLC"
            style={{
              width: sizes[size].width,
              height: sizes[size].height,
              filter: "brightness(1.1) contrast(1.05)",
            }}
            className={cn("object-contain", withGlow && "drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]")}
          />
        </div>
      </div>
    </div>
  )
}

