"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Server, Network, Wifi, Users, Database, Cloud, FileText, Search } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import AnimatedCard from "@/components/animated-card"

interface StaffRole {
  title: string
  category: string
  featured?: boolean
  icon?: React.ReactNode
}

export default function StaffAugmentationSection() {
  const [activeTab, setActiveTab] = useState("all")

  const staffRoles: StaffRole[] = [
    { title: "NOC Engineer (L1/L2)", category: "network", icon: <Network className="h-4 w-4" /> },
    { title: "Network Engineer (LAN/WAN)", category: "network", featured: true, icon: <Network className="h-4 w-4" /> },
    { title: "Wireless Engineer (Wi-Fi)", category: "network", icon: <Wifi className="h-4 w-4" /> },
    { title: "Enterprise Network Mgmt. Engineer", category: "network", icon: <Network className="h-4 w-4" /> },
    { title: "Firewall Engineer", category: "security", featured: true, icon: <Shield className="h-4 w-4" /> },
    { title: "Cable Management Technician", category: "network", icon: <Network className="h-4 w-4" /> },
    { title: "SOC Analyst (L1/L2/L3)", category: "security", featured: true, icon: <Shield className="h-4 w-4" /> },
    { title: "SIEM Engineer (MS Sentinel, Splunk)", category: "security", icon: <Search className="h-4 w-4" /> },
    {
      title: "Incident Response Specialist",
      category: "security",
      featured: true,
      icon: <Shield className="h-4 w-4" />,
    },
    { title: "Threat Hunter", category: "security", icon: <Search className="h-4 w-4" /> },
    {
      title: "Vulnerability Mgmt. Engineer",
      category: "security",
      featured: true,
      icon: <Shield className="h-4 w-4" />,
    },
    {
      title: "Zero Trust Security Engineer",
      category: "security",
      featured: true,
      icon: <Shield className="h-4 w-4" />,
    },
    { title: "SOC Manager", category: "security", icon: <Users className="h-4 w-4" /> },
    { title: "Data Center Engineer", category: "infrastructure", featured: true, icon: <Server className="h-4 w-4" /> },
    { title: "Compute & Storage Engineer", category: "infrastructure", icon: <Server className="h-4 w-4" /> },
    {
      title: "Backup & Disaster Recovery Engineer",
      category: "infrastructure",
      featured: true,
      icon: <Database className="h-4 w-4" />,
    },
    {
      title: "IAM Engineer (Azure AD, Entra ID)",
      category: "cloud",
      featured: true,
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "VoIP & Unified Communications Engineer",
      category: "infrastructure",
      icon: <Server className="h-4 w-4" />,
    },
    { title: "Cloud Engineer (Azure/AWS)", category: "cloud", featured: true, icon: <Cloud className="h-4 w-4" /> },
    { title: "Application & System Administrator", category: "infrastructure", icon: <Server className="h-4 w-4" /> },
    { title: "Compliance & Audit Specialist", category: "compliance", icon: <FileText className="h-4 w-4" /> },
    {
      title: "Governance, Risk & Compliance (GRC) Analyst",
      category: "compliance",
      featured: true,
      icon: <FileText className="h-4 w-4" />,
    },
    { title: "Security Architect", category: "security", featured: true, icon: <Shield className="h-4 w-4" /> },
    {
      title: "IT Project Manager (PMP, ITIL)",
      category: "management",
      featured: true,
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Technical Writer / Documentation Specialist",
      category: "management",
      icon: <FileText className="h-4 w-4" />,
    },
    { title: "Service Desk Liaison", category: "management", icon: <Users className="h-4 w-4" /> },
  ]

  const filteredRoles =
    activeTab === "all"
      ? staffRoles
      : activeTab === "featured"
        ? staffRoles.filter((role) => role.featured)
        : staffRoles.filter((role) => role.category === activeTab)

  const categories = [
    { id: "all", label: "All Roles", icon: <Users className="mr-2 h-4 w-4" /> },
    { id: "featured", label: "Featured", icon: <Users className="mr-2 h-4 w-4" /> },
    { id: "security", label: "Security", icon: <Shield className="mr-2 h-4 w-4" /> },
    { id: "network", label: "Network", icon: <Network className="mr-2 h-4 w-4" /> },
    { id: "infrastructure", label: "Infrastructure", icon: <Server className="mr-2 h-4 w-4" /> },
    { id: "cloud", label: "Cloud", icon: <Cloud className="mr-2 h-4 w-4" /> },
    { id: "compliance", label: "Compliance", icon: <FileText className="mr-2 h-4 w-4" /> },
    { id: "management", label: "Management", icon: <Users className="mr-2 h-4 w-4" /> },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-montserrat">IT Staff Augmentation</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Enhance your team with our skilled IT professionals. We provide specialized talent across security,
              networking, infrastructure, cloud, and compliance domains to meet your specific needs.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-10">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                Why Choose Our Staff Augmentation Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Specialized Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to highly skilled professionals with specialized knowledge in niche IT domains.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Flexible Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Scale your team up or down based on project requirements and business needs.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Reduced Overhead</h3>
                  <p className="text-sm text-muted-foreground">
                    Eliminate recruitment costs, training expenses, and benefits management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="flex-wrap">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center">
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRoles.map((role, index) => (
                  <AnimatedCard key={role.title} index={index % 6}>
                    <div
                      className={`p-4 rounded-lg border ${role.featured ? "border-primary/30 bg-primary/5" : "border-border"} h-full`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div
                            className={`p-2 rounded-full ${role.featured ? "bg-primary/20" : "bg-secondary/20"} mr-3`}
                          >
                            {role.icon}
                          </div>
                          <h3 className="font-medium">{role.title}</h3>
                        </div>
                        {role.featured && (
                          <Badge variant="secondary" className="ml-2">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Need a specialized role not listed here? We can help you find the right talent for your specific
              requirements.
            </p>
            <Button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-primary hover:bg-primary/90"
            >
              Request Custom Staffing
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

