"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"

interface QRCodeSVGProps {
  value: string
  size?: number
  level?: "L" | "M" | "Q" | "H"
  bgColor?: string
  fgColor?: string
}

export function QRCodeSVG({
  value,
  size = 128,
  level = "M",
  bgColor = "#FFFFFF",
  fgColor = "#000000",
}: QRCodeSVGProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current) {
      // Generate a real QR code using qrcode library
      QRCode.toCanvas(
        canvasRef.current,
        value,
        {
          width: size,
          margin: 1,
          color: {
            dark: fgColor,
            light: bgColor,
          },
          errorCorrectionLevel: level,
        },
        (error) => {
          if (error) console.error("Error generating QR code:", error)
        },
      )
    }
  }, [value, size, level, bgColor, fgColor])

  return <canvas ref={canvasRef} className="inline-block" />
}

