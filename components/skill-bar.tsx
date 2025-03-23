"use client"

import { useEffect, useState, useRef } from "react"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

interface SkillBarProps {
  skill: string
  level: number
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  const [progress, setProgress] = useState(0)
  const skillRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (skillRef.current) {
      observer.observe(skillRef.current)
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setProgress(level), 300)
      return () => clearTimeout(timer)
    }
  }, [isVisible, level])

  return (
    <div ref={skillRef} className="space-y-2">
      <div className="flex justify-between">
        <motion.span
          className="font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {skill}
        </motion.span>
        <motion.span
          className="text-muted-foreground"
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

