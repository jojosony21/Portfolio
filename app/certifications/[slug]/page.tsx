import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Award, CheckCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getCertificationBySlug, certifications } from "@/lib/certifications-data"

export async function generateStaticParams() {
  return certifications.map((cert) => ({
    slug: cert.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const certification = getCertificationBySlug(slug)

  if (!certification) {
    return {
      title: "Certification Not Found",
    }
  }

  return {
    title: `${certification.title} | Jojo Sony`,
    description: certification.description,
  }
}

export default async function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const certification = getCertificationBySlug(slug)

  if (!certification) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">

          <Link
            href="/#certifications"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Certifications
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* LEFT SIDE */}
            <div className="flex-1">

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>

                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {certification.title}
                  </h1>
                  <p className="text-accent text-lg">{certification.issuer}</p>
                </div>
              </div>

              <Badge
                variant={certification.status === "completed" ? "default" : "secondary"}
                className={`mb-6 ${
                  certification.status === "completed"
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-accent/20 text-accent border border-accent/30"
                }`}
              >
                {certification.status === "completed" ? (
                  <CheckCircle className="h-3 w-3 mr-1" />
                ) : (
                  <Clock className="h-3 w-3 mr-1" />
                )}
                {certification.status === "completed" ? "Completed" : "In Progress"}
              </Badge>

              <Card className="bg-card border-border mb-8">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    About This Certification
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {certification.fullDescription}
                  </p>
                </CardContent>
              </Card>

            </div>

            {/* RIGHT SIDE */}
            <div className="lg:w-96">
              <Card className="bg-card border-border overflow-hidden">
                <div className="aspect-[4/3] relative bg-secondary/50">
                  <Image
                    src={certification.image}
                    alt={`${certification.title} Certificate`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 384px"
                  />
                </div>

                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Certificate Preview
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}