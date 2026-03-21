import { Shield, Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm">
              {currentYear} Jojo Sony. Built with{" "}
              <Heart className="inline h-3 w-3 text-primary" /> and security in mind.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
