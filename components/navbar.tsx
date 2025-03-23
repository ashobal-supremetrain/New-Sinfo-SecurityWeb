"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import SupremeLogoSVG from "@/components/supreme-logo-svg"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <SupremeLogoSVG size="md" withGlow={!isScrolled} />
            <div>
              <span className="font-bold text-xl hidden md:inline">Supreme Information Security LLC</span>
              <span className="font-bold text-xl md:hidden">Supreme InfoSec</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("staff-augmentation")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Staff Augmentation
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Expertise
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-500 hover:bg-blue-600">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("staff-augmentation")}
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              Staff Augmentation
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border"
            >
              Expertise
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-500 hover:bg-blue-600 w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

