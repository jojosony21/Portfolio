import { MonitorCheck, AlertTriangle, Search, FlaskConical } from "lucide-react"

const experiences = [
  {
    title: "SIEM Monitoring & Alert Triage",
    description: "Hands-on experience with Wazuh SIEM for monitoring security events, analyzing alerts, and prioritizing incidents based on severity.",
    icon: MonitorCheck,
  },
  {
    title: "Threat Simulation & Log Analysis",
    description: "Conducting threat simulations and analyzing logs to understand attack patterns and improve detection capabilities.",
    icon: AlertTriangle,
  },
  {
    title: "IOC Identification",
    description: "Identifying Indicators of Compromise (IOCs) through log analysis and threat intelligence to detect potential security breaches.",
    icon: Search,
  },
  {
    title: "Hands-on Security Labs",
    description: "Continuous learning through platforms like TryHackMe and PortSwigger to practice real-world security scenarios.",
    icon: FlaskConical,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-bold text-foreground">Learning & Experience</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-10 w-px h-full bg-border" />
                )}
                
                <div className="absolute left-0 top-0 p-1.5 bg-background border border-primary rounded-full">
                  <exp.icon className="h-4 w-4 text-primary" />
                </div>
                
                <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 group ml-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
