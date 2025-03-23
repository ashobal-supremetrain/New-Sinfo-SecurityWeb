import { QRCodeSVG } from "@/components/qr-code"
import { Shield, Code } from "lucide-react"

interface SocialBannerProps {
  type: "horizontal" | "vertical" | "square"
}

export default function SocialBanner({ type }: SocialBannerProps) {
  // Define dimensions based on type
  const dimensions = {
    horizontal: { width: 1200, height: 630 },
    vertical: { width: 1080, height: 1920 },
    square: { width: 800, height: 800 },
  }

  const { width, height } = dimensions[type]

  // Scale down for display purposes
  const scale = 0.25
  const displayWidth = width * scale
  const displayHeight = height * scale

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700"
      style={{ width: displayWidth, height: displayHeight }}
    >
      {/* Content container */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        {/* Top content */}
        <div className="flex justify-between items-start">
          {/* Left text content */}
          <div className="max-w-[60%]">
            <h1
              className="text-white font-bold font-montserrat"
              style={{ fontSize: type === "vertical" ? "16px" : "12px" }}
            >
              Supreme Information Security LLC
            </h1>
            <p className="text-gray-200 mt-1" style={{ fontSize: type === "vertical" ? "10px" : "8px" }}>
              Full-Stack Developer | React & Python Specialist
            </p>
          </div>

          {/* Right floating code snippets */}
          <div className="relative">
            <div
              className="bg-black/30 backdrop-blur-sm rounded p-1 text-blue-300 animate-float-slow"
              style={{ fontSize: "6px" }}
            >
              <pre>
                <code>{"const App = () => <Component />"}</code>
              </pre>
            </div>
            <div
              className="bg-black/30 backdrop-blur-sm rounded p-1 text-green-300 mt-1 ml-2 animate-float"
              style={{ fontSize: "6px" }}
            >
              <pre>
                <code>{"def process(data):\n  return data"}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Bottom content with QR code and social handles */}
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-1">
            <Shield className="text-white" style={{ width: "8px", height: "8px" }} />
            <Code className="text-white" style={{ width: "8px", height: "8px" }} />
            <span className="text-white" style={{ fontSize: "6px" }}>
              @supremeinfosec
            </span>
          </div>

          {/* QR Code */}
          <div className="bg-white p-1 rounded">
            <QRCodeSVG value="https://supremeinfosec.com" size={type === "vertical" ? 40 : 30} />
          </div>
        </div>
      </div>
    </div>
  )
}

