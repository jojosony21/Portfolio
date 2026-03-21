import Link from "next/link"
import { Award, CheckCircle, Clock, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { certifications } from "@/lib/certifications-data"

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <Link
                key={cert.slug}
                href={`/certifications/${cert.slug}`}
                className="block"
              >
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <Badge
                          variant={cert.status === "completed" ? "default" : "secondary"}
                          className={
                            cert.status === "completed"
                              ? "bg-primary/20 text-primary border border-primary/30"
                              : "bg-accent/20 text-accent border border-accent/30"
                          }
                        >
                          {cert.status === "completed" ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {cert.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                      </div>
                      <p className="text-sm text-accent mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                    </div>

                    <div className="shrink-0 self-center">
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
