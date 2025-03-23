// This is a helper script to download assets from the reference site
// You can run this locally with ts-node or similar tools

import fs from "fs"
import fetch from "node-fetch"

// Create directories if they don't exist
const createDirs = () => {
  const dirs = ["public/images", "public/icons", "public/backgrounds"]
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  })
}

// Main function to download assets
const downloadAssets = async () => {
  const baseUrl = "https://v0-modern-portfolio-website-ixw2rq.vercel.app"

  // List of assets to download
  const assets = [
    { url: "/logo.png", dest: "public/logo.png" },
    { url: "/images/hero-bg.jpg", dest: "public/images/hero-bg.jpg" },
    // Add more assets as you identify them
  ]

  createDirs()

  for (const asset of assets) {
    try {
      const response = await fetch(`${baseUrl}${asset.url}`)
      if (!response.ok) {
        console.error(`Failed to download ${asset.url}: ${response.statusText}`)
        continue
      }

      const buffer = await response.buffer()
      fs.writeFileSync(asset.dest, buffer)
      console.log(`Downloaded ${asset.url} to ${asset.dest}`)
    } catch (error) {
      console.error(`Error downloading ${asset.url}:`, error)
    }
  }
}

downloadAssets().catch(console.error)

