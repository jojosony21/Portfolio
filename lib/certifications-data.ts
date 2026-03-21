export interface Certification {
  slug: string
  title: string
  issuer: string
  status: "completed" | "in-progress"
  description: string
  fullDescription: string
  image: string
  file: string
}

export const certifications: Certification[] = [
  {
    slug: "isc2-cybersecurity",
    title: "ISC2 Certified in Cybersecurity",
    issuer: "ISC2",
    status: "in-progress",
    description: "Foundational cybersecurity certification covering security principles, access controls, and incident response.",
    fullDescription: "The ISC2 Certified in Cybersecurity (CC) certification validates foundational knowledge and skills in cybersecurity. This certification covers essential security principles including confidentiality, integrity, and availability (CIA triad), access control mechanisms, network security fundamentals, security operations, and incident response procedures. As an entry-level certification from ISC2, it demonstrates commitment to the cybersecurity field and provides a solid foundation for advanced certifications like CISSP.",
    image: "/images/certs/isc2-cert.jpg",
    file: "/files/certs/isc2-cert.pdf",
  },
  {
    slug: "google-cybersecurity",
    title: "Google Cybersecurity Certificate",
    issuer: "Google",
    status: "completed",
    description: "Comprehensive program covering security operations, threat analysis, and security tools.",
    fullDescription: "The Google Cybersecurity Professional Certificate is an intensive program designed to prepare learners for entry-level cybersecurity roles. This comprehensive certification covers security operations center (SOC) fundamentals, threat detection and analysis using industry-standard tools, network security principles, Linux operating systems, SQL for security analysis, Python scripting for automation, SIEM tools configuration and log analysis, and incident response and escalation procedures. The program includes hands-on labs and real-world scenarios to build practical skills.",
    image: "/images/certs/google-cert.jpg",
    file: "/files/certs/google-cert.pdf",
  },
  {
    slug: "tata-forage-simulation",
    title: "Tata Forage Cybersecurity Simulation",
    issuer: "Tata / Forage",
    status: "completed",
    description: "Virtual experience program simulating real-world cybersecurity scenarios and challenges.",
    fullDescription: "The Tata Cybersecurity Analyst Job Simulation on Forage provided hands-on experience with real-world cybersecurity scenarios faced by professionals at Tata Consultancy Services. This virtual experience program covered identity and access management (IAM) fundamentals, security policy documentation and implementation, vulnerability assessment techniques, threat intelligence analysis, security incident investigation, and creating executive security reports and presentations. The simulation emphasized practical problem-solving and communication skills essential for cybersecurity analysts.",
    image: "/images/certs/tata-cert.jpg",
    file: "/files/certs/tata-cert.pdf",
  },
  {
    slug: "nptel-python",
    title: "NPTEL Python Certification",
    issuer: "NPTEL",
    status: "completed",
    description: "Python programming fundamentals and advanced concepts for automation and scripting.",
    fullDescription: "The NPTEL Python Certification from the National Programme on Technology Enhanced Learning covers comprehensive Python programming skills essential for cybersecurity automation and scripting. Topics include Python fundamentals and data structures, object-oriented programming concepts, file handling and data processing, regular expressions for pattern matching, network programming and socket operations, automation scripting techniques, and integration with security tools and APIs. This certification demonstrates proficiency in using Python for security automation tasks.",
    image: "/images/certs/nptel-cert.jpg",
    file: "/files/certs/nptel-cert.pdf",
  },
]

export function getCertificationBySlug(slug: string): Certification | undefined {
  return certifications.find((cert) => cert.slug === slug)
}
