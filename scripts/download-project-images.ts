// This is a helper script to download project images from the reference site
// You can run this locally with ts-node or similar tools

import fs from "fs"
import fetch from "node-fetch"

// Create directories if they don't exist
const createDirs = () => {
  const dirs = ["public/images/projects"]
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  })
}

// Main function to download project images
const downloadProjectImages = async () => {
  const baseUrl = "https://v0-modern-portfolio-website-ixw2rq.vercel.app"

  // List of project images to download
  // You'll need to inspect the reference site to get the exact image paths
  const projectImages = [
    {
      url: "/images/projects/security-suite.jpg",
      dest: "public/images/projects/security-suite.jpg",
      fallback: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    },
    {
      url: "/images/projects/cloud-migration.jpg",
      dest: "public/images/projects/cloud-migration.jpg",
      fallback: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
    },
    {
      url: "/images/projects/compliance-dashboard.jpg",
      dest: "public/images/projects/compliance-dashboard.jpg",
      fallback: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      url: "/images/projects/ecommerce-platform.jpg",
      dest: "public/images/projects/ecommerce-platform.jpg",
      fallback: "https://images.unsplash.com/photo-1556742077-0a6b6a24b2be?q=80&w=1000&auto=format&fit=crop",
    },
    {
      url: "/images/projects/ai-content-generator.jpg",
      dest: "public/images/projects/ai-content-generator.jpg",
      fallback: "https://images.unsplash.com/photo-1677442135136-760c813a7a6a?q=80&w=1000&auto=format&fit=crop",
    },
    {
      url: "/images/projects/analytics-dashboard.jpg",
      dest: "public/images/projects/analytics-dashboard.jpg",
      fallback: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
  ]

  createDirs()

  for (const image of projectImages) {
    try {
      // Try to download from the reference site first
      let response = await fetch(`${baseUrl}${image.url}`)

      // If not found, use the fallback image
      if (!response.ok) {
        console.log(`Image not found at ${baseUrl}${image.url}, using fallback...`)
        response = await fetch(image.fallback)

        if (!response.ok) {
          throw new Error(`Failed to download fallback image: ${response.statusText}`)
        }
      }

      const buffer = await response.buffer()
      fs.writeFileSync(image.dest, buffer)
      console.log(`Downloaded image to ${image.dest}`)
    } catch (error) {
      console.error(`Error downloading ${image.url}:`, error)
    }
  }
}

downloadProjectImages().catch(console.error)

