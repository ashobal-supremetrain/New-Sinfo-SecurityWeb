import { NextResponse } from "next/server"

// Sample project data with direct image URLs
const securityProjects = [
  {
    id: 1,
    title: "Enterprise Security Suite",
    description: "End-to-end security solution for enterprise networks with threat detection and response.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    tags: ["Cybersecurity", "Threat Detection", "Python", "React"],
    demoUrl: "#",
    githubUrl: "#",
    category: "security",
  },
  {
    id: 2,
    title: "Secure Cloud Migration",
    description: "Secure cloud migration framework with zero-trust architecture and continuous monitoring.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
    tags: ["Cloud Security", "AWS", "Zero-Trust", "Terraform"],
    demoUrl: "#",
    githubUrl: "#",
    category: "security",
  },
  {
    id: 3,
    title: "Security Compliance Dashboard",
    description: "Real-time compliance monitoring dashboard for regulatory frameworks like GDPR, HIPAA, and SOC2.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["Compliance", "React", "Node.js", "Data Visualization"],
    demoUrl: "#",
    githubUrl: "#",
    category: "security",
  },
]

const developmentProjects = [
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with secure payment processing and inventory management.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    category: "development",
  },
  {
    id: 5,
    title: "AI Content Generator",
    description:
      "AI-powered application that generates marketing content based on user prompts with secure API integration.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OIP-NJNG2Qrm3pGbuBIyIwCvLKHeLpSyNC.jpeg", // Direct link to the AI image
    tags: ["Python", "TensorFlow", "React", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
    category: "development",
  },
  {
    id: 6,
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard displaying real-time data with secure data processing and visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    demoUrl: "#",
    githubUrl: "#",
    category: "development",
  },
]

const allProjects = [...securityProjects, ...developmentProjects]

export async function GET(request: Request) {
  // Get the URL object
  const { searchParams } = new URL(request.url)

  // Get the category parameter
  const category = searchParams.get("category")

  // Filter projects by category if provided
  let projects = allProjects
  if (category === "security") {
    projects = securityProjects
  } else if (category === "development") {
    projects = developmentProjects
  }

  // Return the projects
  return NextResponse.json({ projects })
}

