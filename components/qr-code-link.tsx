"use client"

import { useState } from "react"
import { Copy, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { QRCodeSVG } from "@/components/qr-code"

interface QRCodeLinkProps {
  url: string
  size?: number
}

export default function QRCodeLink({ url, size = 150 }: QRCodeLinkProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    toast({
      title: "URL Copied",
      description: "The URL has been copied to your clipboard",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const openLink = () => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="space-y-3">
      <div className="bg-white p-4 inline-block rounded-lg">
        <QRCodeSVG
          value={url}
          size={size}
          level="H" // High error correction for better scanning
          fgColor="#000000"
          bgColor="#FFFFFF"
        />
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-1">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? "Copied" : "Copy URL"}</span>
        </Button>
        <Button size="sm" onClick={openLink} className="flex items-center gap-1">
          <ExternalLink className="h-4 w-4" />
          <span>Open</span>
        </Button>
      </div>
    </div>
  )
}

