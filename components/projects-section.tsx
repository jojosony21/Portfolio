import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import { projects } from "@/lib/projects-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-bold text-foreground">Projects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`block group ${index === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <Card className={`bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden h-full cursor-pointer ${index === 0 ? "border-primary/20 shadow-lg" : ""}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-2 rounded-lg mb-4 transition-colors ${index === 0 ? "bg-primary/20 group-hover:bg-primary/30" : "bg-primary/10 group-hover:bg-primary/20"}`}>
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className={`text-foreground group-hover:text-primary transition-colors ${index === 0 ? "text-xl md:text-2xl" : "text-lg"}`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, index === 0 ? 8 : 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground border border-border group-hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > (index === 0 ? 8 : 4) && (
                        <Badge
                          variant="secondary"
                          className="bg-secondary text-muted-foreground border border-border"
                        >
                          +{project.techStack.length - (index === 0 ? 8 : 4)}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="https://github.com/jojosony" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
