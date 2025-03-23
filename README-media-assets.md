# Media Assets Migration Guide

This guide explains how to migrate media assets from the reference site to your current project.

## Steps to Migrate Media Assets

1. **Identify Assets**: Browse the reference site (https://v0-modern-portfolio-website-ixw2rq.vercel.app/) and identify all media assets (images, icons, videos, etc.)

2. **Download Assets**: You can use browser developer tools to find asset URLs:
   - Right-click on an image and select "Inspect"
   - Look for the `src` attribute of the image tag
   - Download the asset by opening the URL in a new tab

3. **Organize Assets**: Place downloaded assets in the appropriate directories:
   - `/public/images/` - For general images
   - `/public/icons/` - For icon files
   - `/public/backgrounds/` - For background images

4. **Update References**: Make sure all code references to assets use the correct paths

## Key Assets to Migrate

1. **Logo**: The Supreme Information Security LLC logo
2. **Hero Background**: The dark navy background image used in the hero section
3. **Service Icons**: Any custom icons used in the services section
4. **Project Images**: Images used in the projects section
5. **Team Photos**: Any team member photos

## Using the Download Script

We've provided a helper script (`scripts/download-assets.ts`) that you can use to automate the download process:

1. Install dependencies: `npm install node-fetch fs-extra`
2. Run the script: `npx ts-node scripts/download-assets.ts`

This will download the identified assets to the appropriate directories.

## Manual Asset Extraction

If the script doesn't work for all assets, you can manually extract them:

1. Open Chrome DevTools (F12)
2. Go to the Network tab
3. Reload the page
4. Filter by "Img" to see all image requests
5. Right-click on each image and select "Save As"

