"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Shield, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmbeddedThreatMap() {
  return (
    <Card className="overflow-hidden border-primary/20 h-full">
      <CardHeader className="bg-muted/30 pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-primary mr-2" />
            Live Cyber Threat Map
          </div>
        </CardTitle>
        <CardDescription>Check Point's ThreatCloud AI-powered threat intelligence</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-full aspect-[16/9] bg-black/20 rounded-md overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>
            <div className="relative z-10 text-center p-4">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Check Point Live Cyber Threat Map</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Visualize cyber attacks in real-time with Check Point's global threat intelligence network
              </p>
            </div>
          </div>

          <Button
            className="flex items-center gap-2"
            onClick={() => window.open("https://threatmap.checkpoint.com", "_blank", "noopener,noreferrer")}
          >
            <ExternalLink className="h-4 w-4" />
            Open Threat Map
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-2">
            Due to security restrictions, the Check Point Threat Map must be viewed on their official website
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

