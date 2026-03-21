"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Terminal } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "SOC Analyst | Cybersecurity Enthusiast"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">
              ~/security/portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="text-primary relative">
              Jojo Sony
              <span className="absolute -inset-1 bg-primary/20 blur-lg rounded-lg -z-10" />
            </span>
          </h1>

          <div className="h-8 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <p className="text-xl md:text-2xl text-accent font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 leading-relaxed">
            Passionate about threat detection, SIEM monitoring, and building secure systems. 
            Dedicated to protecting organizations from cyber threats.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:scale-105"
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary hover:border-primary/50 transition-all duration-300"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
