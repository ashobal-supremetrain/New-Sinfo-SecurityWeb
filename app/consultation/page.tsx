"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, CheckCircle, Clock, Github, Linkedin, Mail, MessageSquare, Phone, Shield, Users } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import AnimatedSection from "@/components/animated-section"
import SupremeLogo from "@/components/supreme-logo"

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission (in a real app, you'd do this after successful API response)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        serviceType: "",
        message: "",
      })
      setFormSubmitted(false)
    }, 5000)
  }

  const faqs = [
    {
      question: "What happens during the initial consultation?",
      answer:
        "During the initial consultation, our team will discuss your business needs, current security posture, and development requirements. We'll identify key challenges and opportunities, and outline potential solutions tailored to your specific situation.",
    },
    {
      question: "How long does a typical consultation take?",
      answer:
        "Initial consultations typically last 60-90 minutes. For more complex requirements, we may schedule follow-up sessions to dive deeper into specific areas of concern or opportunity.",
    },
    {
      question: "Is there a fee for the initial consultation?",
      answer:
        "We offer a complimentary 30-minute initial consultation to understand your needs. For more in-depth assessments or consultations, we provide custom quotes based on the scope and complexity of your requirements.",
    },
    {
      question: "How do you handle confidential information during consultations?",
      answer:
        "We take data confidentiality very seriously. All consultations are covered by our standard NDA, and we can also sign your company's NDA if required. Our team follows strict security protocols for handling sensitive information.",
    },
    {
      question: "Can consultations be conducted remotely?",
      answer:
        "Yes, we offer both in-person and remote consultations via secure video conferencing platforms. Remote consultations are equally effective and can be scheduled at your convenience.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">Request a Consultation</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a personalized consultation with our security and development experts
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultation Options Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Tabs defaultValue="form" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="form">Request Form</TabsTrigger>
                <TabsTrigger value="schedule">Schedule a Call</TabsTrigger>
              </TabsList>

              <TabsContent value="form">
                <Card>
                  <CardContent className="pt-6">
                    {formSubmitted ? (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                          <CheckCircle className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                        <p className="text-muted-foreground mb-4">
                          Your consultation request has been submitted successfully. Our team will contact you within 1
                          business day.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Full Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email Address
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium">
                              Company Name
                            </label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Acme Inc."
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="serviceType" className="text-sm font-medium">
                            Service Type
                          </label>
                          <Select onValueChange={handleSelectChange} value={formData.serviceType}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="security">Security Solutions</SelectItem>
                              <SelectItem value="development">Development Solutions</SelectItem>
                              <SelectItem value="staffing">Staff Augmentation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please describe your requirements or questions..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          Submit Request
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-8">
                      <p className="text-muted-foreground">
                        Prefer to schedule a call directly? Choose a time that works for you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Select a Date</h3>
                        </div>
                        <div className="border rounded-md p-4 text-center">
                          <p className="text-muted-foreground mb-2">Calendar integration coming soon</p>
                          <p className="text-sm">Please use the form or contact us directly to schedule a call</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Contact Directly</h3>
                        </div>
                        <div className="space-y-3">
                          <a
                            href="mailto:ashobal@sinfosecurity.com"
                            className="flex items-center gap-3 hover:text-primary transition-colors"
                          >
                            <Mail className="h-5 w-5 text-primary" />
                            <span>ashobal@sinfosecurity.com</span>
                          </a>
                          <a
                            href="tel:+15551234567"
                            className="flex items-center gap-3 hover:text-primary transition-colors"
                          >
                            <Phone className="h-5 w-5 text-primary" />
                            <span>Contact us by phone</span>
                          </a>
                          <a
                            href="https://www.linkedin.com/company/supreme-information-security-llc/?viewAsMember=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-primary transition-colors"
                          >
                            <Linkedin className="h-5 w-5 text-primary" />
                            <span>Connect on LinkedIn</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultation Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 font-montserrat">Our Consultation Process</h2>
              <p className="text-muted-foreground">
                We follow a structured approach to understand your needs and provide tailored solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.2}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Initial Discussion</h3>
                    <p className="text-muted-foreground">
                      We begin with an in-depth discussion to understand your business needs, challenges, and goals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Assessment & Analysis</h3>
                    <p className="text-muted-foreground">
                      Our experts assess your current systems and processes to identify opportunities and
                      vulnerabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Solution Proposal</h3>
                    <p className="text-muted-foreground">
                      We develop a tailored solution proposal with clear timelines, deliverables, and pricing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 font-montserrat">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Common questions about our consultation process</p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-montserrat">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Fill out the consultation form above or contact us directly to begin your journey with Supreme
                Information Security.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/#contact">
                  <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">Contact Us</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Explore Our Services
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

