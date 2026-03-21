import { GraduationCap, Shield, Activity } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-bold text-foreground">About Me</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a <span className="text-primary font-medium">B.Tech IT graduate (2021-2025)</span> with 
                a strong passion for cybersecurity. My journey has been focused on developing hands-on 
                experience in security operations and threat analysis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in <span className="text-accent font-medium">SOC operations</span>, 
                threat detection, and incident response. I&apos;m constantly learning and building 
                security labs to stay current with the evolving threat landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to contribute to organizations&apos; security posture by identifying 
                vulnerabilities, monitoring for threats, and responding to security incidents effectively.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 group">
                <GraduationCap className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">B.Tech in Information Technology</p>
                <p className="text-xs text-muted-foreground mt-1">2021 - 2025</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 group">
                <Shield className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Focus Area</h3>
                <p className="text-sm text-muted-foreground">SOC Operations & Threat Detection</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 group">
                <Activity className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Experience</h3>
                <p className="text-sm text-muted-foreground">Hands-on Labs & Security Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
