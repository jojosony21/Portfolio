"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, Github, Linkedin, MessageSquare } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Have a question or want to work together? Drop me a message!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social Links */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:jojosony216@gmail.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        jojosony216@gmail.com.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href="https://github.com/jojosony21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-foreground group-hover:text-primary transition-colors">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jojo-sony/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-foreground group-hover:text-primary transition-colors">LinkedIn</span>
                  </a>
                </CardContent>
              </Card>

              <div className="bg-card border border-primary/30 rounded-lg p-6 text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m currently open to <span className="text-primary font-medium">SOC Analyst</span> positions 
                  and cybersecurity internship opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
