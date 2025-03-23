"use client"

import { useEffect, useState } from "react"
import { Shield, Code } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  category: string
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`/api/projects${activeTab !== "all" ? `?category=${activeTab}` : ""}`)

        if (!response.ok) {
          throw new Error("Failed to fetch projects")
        }

        const data = await response.json()
        setProjects(data.projects)
      } catch (err) {
        console.error("Error fetching projects:", err)
        setError("Failed to load projects. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [activeTab])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">Featured Projects</h2>

        <Tabs defaultValue="all" onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="security" className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="development" className="flex items-center">
                <Code className="mr-2 h-4 w-4" />
                Development
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            {error ? (
              <div className="text-center py-8">
                <p className="text-destructive">{error}</p>
                <Button variant="outline" className="mt-4" onClick={() => handleTabChange(activeTab)}>
                  Try Again
                </Button>
              </div>
            ) : loading ? (
              <ProjectsLoading />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="security" className="mt-0">
            {error ? (
              <div className="text-center py-8">
                <p className="text-destructive">{error}</p>
                <Button variant="outline" className="mt-4" onClick={() => handleTabChange(activeTab)}>
                  Try Again
                </Button>
              </div>
            ) : loading ? (
              <ProjectsLoading />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="development" className="mt-0">
            {error ? (
              <div className="text-center py-8">
                <p className="text-destructive">{error}</p>
                <Button variant="outline" className="mt-4" onClick={() => handleTabChange(activeTab)}>
                  Try Again
                </Button>
              </div>
            ) : loading ? (
              <ProjectsLoading />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-lg overflow-hidden border border-border">
          <Skeleton className="h-48 w-full" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="flex justify-between pt-4">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

