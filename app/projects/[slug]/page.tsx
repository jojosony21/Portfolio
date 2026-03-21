import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProjectBySlug, projects } from "@/lib/projects-data"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }
  
  return {
    title: `${project.title} | Jojo Sony`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const IconComponent = project.icon

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg shrink-0">
              <IconComponent className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground border border-border"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-card border-border mb-8">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">What I Did / What I Learned</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                {project.whatILearned.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Screenshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <Card key={index} className="bg-card border-border overflow-hidden group">
                  <div className="aspect-video relative bg-secondary/50">
                    <Image
                      src={screenshot}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
