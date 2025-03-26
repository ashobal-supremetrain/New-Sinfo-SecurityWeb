"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Lock,
  Server,
  Code,
  Database,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import AnimatedSection from "@/components/animated-section"
import AnimatedCard from "@/components/animated-card"
import SupremeLogo from "@/components/supreme-logo"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive security and development solutions tailored to your business needs
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
              <div className="md:w-1/2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Security Solutions
                </div>
                <h2 className="text-3xl font-bold mb-6 font-montserrat">Enterprise-Grade Security</h2>
                <p className="text-muted-foreground mb-6">
                  Our comprehensive security solutions are designed to protect your organization from evolving cyber
                  threats. We combine cutting-edge technology with expert knowledge to deliver robust security
                  frameworks that safeguard your critical assets.
                </p>
                <Link href="/consultation" className="inline-flex items-center text-primary hover:underline">
                  Request a security assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Security Operations Center"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedCard index={0}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 text-primary mr-2" />
                    Threat Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Advanced threat detection and response systems to protect your organization from evolving cyber
                    threats.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>24/7 Security monitoring and incident response</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Advanced malware detection and prevention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Threat intelligence integration</span>
                    </li>
                  </ul>
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
                  <p className="text-muted-foreground mb-4">
                    Hardened infrastructure design with zero-trust architecture and continuous security monitoring.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Zero-trust network architecture design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Cloud security posture management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Secure access service edge (SASE) implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard index={2}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    Security Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive security assessments to identify vulnerabilities and strengthen your security posture.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Penetration testing and vulnerability assessments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Security architecture reviews</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Compliance gap analysis (NIST, ISO, SOC2, etc.)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row-reverse items-start gap-12 mb-16">
              <div className="md:w-1/2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                  Development Solutions
                </div>
                <h2 className="text-3xl font-bold mb-6 font-montserrat">Full-Stack Development</h2>
                <p className="text-muted-foreground mb-6">
                  Our development team builds secure, scalable, and high-performance applications tailored to your
                  business needs. We follow security-first development practices to ensure your applications are
                  resilient against modern threats.
                </p>
                <Link href="/consultation" className="inline-flex items-center text-primary hover:underline">
                  Discuss your project requirements <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  width={500}
                  height={300}
                  alt="Development Team"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedCard index={0}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 text-primary mr-2" />
                    Full-Stack Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    End-to-end application development with React, Next.js, Node.js, and Python, built with security in
                    mind.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Modern web applications with React and Next.js</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Secure backend services with Node.js and Python</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Mobile applications with React Native</span>
                    </li>
                  </ul>
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
                  <p className="text-muted-foreground mb-4">
                    Secure database design, API development, and data processing solutions with MongoDB, SQL, and
                    GraphQL.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>RESTful and GraphQL API development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Database design and optimization (SQL & NoSQL)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Data processing and analytics pipelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard index={2}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-2" />
                    DevSecOps Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Integrate security into your development lifecycle with our DevSecOps approach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>CI/CD pipeline security integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Automated security testing and scanning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Infrastructure as Code (IaC) security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Staff Augmentation Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center mb-4">
                <Users className="h-6 w-6 mr-2 text-primary" />
                <h2 className="text-3xl font-bold font-montserrat">IT Staff Augmentation</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Enhance your team with our skilled IT professionals across security, networking, infrastructure, and
                cloud domains.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard index={0}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    Security Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Access certified security professionals to strengthen your security team.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Security architects and engineers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Penetration testers and ethical hackers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Security operations analysts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard index={1}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 text-primary mr-2" />
                    Development Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Augment your development team with skilled developers across various technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Full-stack developers (React, Node.js, Python)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>DevOps and cloud engineers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                      <span>Database administrators and architects</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>

          <div className="text-center mt-12">
            <Link href="/consultation">
              <Button className="bg-primary hover:bg-primary/90">Request Staff Augmentation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-montserrat">Ready to Secure Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Contact us today to discuss how our services can help protect and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/consultation">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Request Consultation</Button>
                </Link>
                <Link href="/#contact">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
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
              <Link
                href="https://github.com/sinfosecurity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/supreme-information-security-llc/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:ashobal@sinfosecurity.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

