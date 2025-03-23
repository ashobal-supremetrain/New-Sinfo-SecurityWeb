"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Shield, Lock, Server, Code, Database, Globe, Users } from "lucide-react"
import SkillBar from "@/components/skill-bar"
import ContactForm from "@/components/contact-form"
import ProjectsSection from "@/components/projects-section"
import Navbar from "@/components/navbar"
import QRCodeLink from "@/components/qr-code-link"
import HeroSlider from "@/components/hero-slider"
import AnimatedSection from "@/components/animated-section"
import AnimatedCard from "@/components/animated-card"
import StaffAugmentationSection from "@/components/staff-augmentation-section"
import EmbeddedThreatMap from "@/components/embedded-threat-map"
import SupremeLogo from "@/components/supreme-logo"

export default function Home() {
  const securitySkills = [
    { name: "Penetration Testing", level: 95 },
    { name: "Cloud Security", level: 90 },
    { name: "Security Architecture", level: 85 },
    { name: "Incident Response", level: 88 },
  ]

  const developmentSkills = [
    { name: "React & Next.js", level: 92 },
    { name: "Python", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "AWS & Cloud Infrastructure", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "GraphQL & REST APIs", level: 82 },
    { name: "MongoDB & SQL", level: 78 },
    { name: "DevOps & CI/CD", level: 75 },
  ]

  const certifications = [
    "CISSP",
    "CEH (Certified Ethical Hacker)",
    "AWS Security Specialty",
    "OSCP",
    "AWS Certified Developer",
    "MongoDB Certified Developer",
    "React Certification",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Sticky CTA Button */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
          onClick={() => {
            const contactSection = document.getElementById("contact")
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          Contact Us
        </Button>
      </div>

      {/* Hero Section with Slider */}
      <section className="relative w-full">
        <HeroSlider />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">Our Services</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Security Services */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6 font-montserrat flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  Security Solutions
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedCard index={0}>
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center">
                            <Lock className="h-5 w-5 text-primary mr-2" />
                            Threat Protection
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            Advanced threat detection and response systems to protect your organization from evolving
                            cyber threats.
                          </p>
                        </CardContent>
                      </Card>
                    </AnimatedCard>

                    <AnimatedCard index={1}>
                      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center">
                            <Server className="h-5 w-5 text-primary mr-2" />
                            Secure Infrastructure
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            Hardened infrastructure design with zero-trust architecture and continuous security
                            monitoring.
                          </p>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  </div>

                  <AnimatedCard index={2}>
                    <EmbeddedThreatMap />
                  </AnimatedCard>
                </div>
              </div>
            </AnimatedSection>

            {/* Development Services */}
            <AnimatedSection delay={0.5}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6 font-montserrat flex items-center">
                  <Code className="h-6 w-6 mr-2 text-primary" />
                  Development Solutions
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  <AnimatedCard index={0}>
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center">
                          <Globe className="h-5 w-5 text-primary mr-2" />
                          Full-Stack Applications
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          End-to-end application development with React, Next.js, Node.js, and Python, built with
                          security in mind.
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>

                  <AnimatedCard index={1}>
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center">
                          <Database className="h-5 w-5 text-primary mr-2" />
                          Data & API Solutions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Secure database design, API development, and data processing solutions with MongoDB, SQL, and
                          GraphQL.
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Staff Augmentation Teaser */}
          <AnimatedSection delay={0.7}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center mb-4">
                <Users className="h-6 w-6 mr-2 text-primary" />
                <h3 className="text-2xl font-bold font-montserrat">IT Staff Augmentation</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Enhance your team with our skilled IT professionals across security, networking, infrastructure, and
                cloud domains.
              </p>
              <Button
                onClick={() => {
                  const staffSection = document.getElementById("staff-augmentation")
                  if (staffSection) {
                    staffSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                variant="outline"
              >
                Explore Staff Augmentation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20">
        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>
      </section>

      {/* Staff Augmentation Section */}
      <section id="staff-augmentation" className="bg-muted/30 scroll-mt-20">
        <StaffAugmentationSection />
      </section>

      {/* Skills Section */}
      <section id="expertise" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">Our Expertise</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Security Skills */}
            <AnimatedSection delay={0.3}>
              <div>
                <h3 className="text-2xl font-bold mb-8 font-montserrat flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  Security Expertise
                </h3>
                <div className="space-y-6">
                  {securitySkills.map((skill, index) => (
                    <SkillBar key={`security-${index}`} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Development Skills */}
            <AnimatedSection delay={0.5}>
              <div>
                <h3 className="text-2xl font-bold mb-8 font-montserrat flex items-center">
                  <Code className="h-6 w-6 mr-2 text-primary" />
                  Development Expertise
                </h3>
                <div className="space-y-6">
                  {developmentSkills.map((skill, index) => (
                    <SkillBar key={`dev-${index}`} skill={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.7}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">Industry Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <Badge key={index} className="text-sm py-2 px-4 bg-primary/20 text-primary hover:bg-primary/30">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center font-montserrat">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection delay={0.3}>
              <div>
                <h3 className="text-2xl font-bold mb-6 font-montserrat">Contact Information</h3>
                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:ashobal@sinfosecurity.com"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span>ashobal@sinfosecurity.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/supreme-information-security-llc/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span>linkedin.com/company/supreme-information-security-llc</span>
                  </a>
                  <a
                    href="https://github.com/sinfosecurity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5 text-primary" />
                    <span>github.com/sinfosecurity</span>
                  </a>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Scan for our resources</h4>
                  <QRCodeLink url="https://sinfosecurity.com" size={150} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <SupremeLogo size="sm" />
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Supreme Information Security LLC. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sinfosecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/supreme-information-security-llc/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ashobal@sinfosecurity.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

