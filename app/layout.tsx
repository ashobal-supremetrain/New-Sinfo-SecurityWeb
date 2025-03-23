import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat, Fira_Code } from "next/font/google"
// Import the StructuredData component
import StructuredData from "./structured-data"
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fira-code",
})

export const metadata: Metadata = {
  title: "Supreme Information Security LLC | Cybersecurity & Development Solutions",
  description:
    "Expert cybersecurity services and full-stack development solutions. Specializing in threat protection, secure infrastructure, and custom application development.",
  keywords:
    "cybersecurity, information security, full-stack development, threat protection, secure infrastructure, IT staff augmentation, Supreme Information Security",
  authors: [{ name: "Supreme Information Security LLC" }],
  creator: "Supreme Information Security LLC",
  publisher: "Supreme Information Security LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://supremeinfosecurity.com",
    title: "Supreme Information Security LLC | Cybersecurity & Development Solutions",
    description:
      "Expert cybersecurity services and full-stack development solutions. Specializing in threat protection, secure infrastructure, and custom application development.",
    siteName: "Supreme Information Security LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Information Security LLC | Cybersecurity & Development Solutions",
    description:
      "Expert cybersecurity services and full-stack development solutions. Specializing in threat protection, secure infrastructure, and custom application development.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

