"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, Code, Lock, Server, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import SupremeLogoSVG from "@/components/supreme-logo-svg"

interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  bgClass: string
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides: SlideData[] = [
    {
      id: 1,
      title: "Supreme Information Security LLC",
      subtitle: "Secure Full-Stack Solutions",
      description: "Building Scalable & Secure Applications from Concept to Code",
      icon: <Shield className="h-16 w-16 text-primary mb-4" />,
      bgClass: "bg-gradient-to-br from-blue-900/40 to-purple-900/40",
    },
    {
      id: 2,
      title: "Advanced Threat Protection",
      subtitle: "Stay Ahead of Cyber Threats",
      description: "Our real-time threat intelligence platform monitors global cyber threats 24/7",
      icon: <Lock className="h-16 w-16 text-primary mb-4" />,
      bgClass: "bg-gradient-to-br from-red-900/40 to-purple-900/40",
    },
    {
      id: 3,
      title: "Full-Stack Development",
      subtitle: "End-to-End Solutions",
      description: "Custom applications built with security in mind from the ground up",
      icon: <Code className="h-16 w-16 text-primary mb-4" />,
      bgClass: "bg-gradient-to-br from-emerald-900/40 to-blue-900/40",
    },
    {
      id: 4,
      title: "IT Staff Augmentation",
      subtitle: "Specialized Talent On Demand",
      description: "Access skilled IT professionals across security, networking, and cloud domains",
      icon: <Users className="h-16 w-16 text-primary mb-4" />,
      bgClass: "bg-gradient-to-br from-indigo-900/40 to-purple-900/40",
    },
    {
      id: 5,
      title: "Secure Infrastructure",
      subtitle: "Zero-Trust Architecture",
      description: "Hardened infrastructure design with continuous security monitoring",
      icon: <Server className="h-16 w-16 text-primary mb-4" />,
      bgClass: "bg-gradient-to-br from-purple-900/40 to-blue-900/40",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden hero-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={cn("absolute inset-0 flex items-center justify-center z-10")}
        >
          <motion.div
            className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <SupremeLogoSVG size="xl" withGlow={true} />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-2 font-montserrat text-primary"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-muted-foreground mb-6 font-montserrat"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {slides[currentSlide].subtitle}
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection("services")}>
                Our Services
              </Button>
              <Button variant="outline" onClick={() => scrollToSection("contact")}>
                Request Consultation
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {/* <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-primary w-8" : "bg-muted hover:bg-primary/50",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <span className="text-sm mt-16">Scroll Down</span>
        <div className="scroll-indicator-dot"></div>
      </div>
    </div>
  )
}

