import {
  Shield,
  Monitor,
  Code,
  Wrench,
  Network,
  Bug,
  Terminal,
  Server,
  Database,
  GitBranch,
  Box,
  Globe,
} from "lucide-react"

const skillCategories = [
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      { name: "Wazuh SIEM", icon: Monitor },
      { name: "Threat Detection", icon: Shield },
      { name: "OWASP Top 10", icon: Bug },
      { name: "Wireshark", icon: Network },
      { name: "Nmap", icon: Globe },
      { name: "Metasploit", icon: Terminal },
      { name: "Burp Suite", icon: Bug },
    ],
  },
  {
    title: "Systems",
    icon: Server,
    skills: [
      { name: "Kali Linux", icon: Terminal },
      { name: "Ubuntu", icon: Server },
      { name: "Windows Security", icon: Monitor },
    ],
  },
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "Python", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "Dart", icon: Code },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "VirtualBox", icon: Box },
      { name: "Vercel", icon: Globe },
      { name: "MongoDB", icon: Database },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-2xl font-bold text-foreground">Skills & Technologies</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-secondary/50 border border-border px-3 py-2 rounded-lg text-sm text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-200 group"
                    >
                      <skill.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
