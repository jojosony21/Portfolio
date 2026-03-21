import { Shield, Server, Globe, Brain, FlaskConical } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Project {
  slug: string
  title: string
  description: string
  fullDescription: string
  techStack: string[]
  icon: LucideIcon
  github: string
  screenshots: string[]
  whatILearned: string[]
}

export const projects: Project[] = [
  {
    slug: "wazuh-siem-deployment",
    title: "Wazuh SIEM Deployment Lab",
    description:
      "Deployed and configured Wazuh SIEM for security monitoring, log analysis, and threat detection in a virtualized environment.",
    fullDescription:
      "This project involved setting up a complete Security Information and Event Management (SIEM) solution using Wazuh in a virtualized lab environment. The deployment includes the Wazuh manager, agents on multiple endpoints, and the Kibana dashboard for visualization. The system monitors security events, detects potential threats, and provides comprehensive log analysis capabilities for incident investigation.",
    techStack: ["Wazuh", "Linux", "Log Analysis", "SIEM", "Elasticsearch", "Kibana"],
    icon: Shield,
    github: "https://github.com/jojosony",
    screenshots: [
      "/images/projects/wazuh-1.jpg",
      "/images/projects/wazuh-2.jpg",
      "/images/projects/wazuh-3.jpg",
    ],
    whatILearned: [
      "Configured Wazuh manager and deployed agents across multiple endpoints",
      "Set up custom detection rules for identifying security threats",
      "Integrated Elasticsearch and Kibana for log visualization and analysis",
      "Implemented file integrity monitoring (FIM) for critical system files",
      "Created custom dashboards for security event monitoring",
      "Learned to analyze and correlate security events from multiple sources",
    ],
  },
  {
    slug: "cybersecurity-home-lab",
    title: "Cybersecurity Home Lab",
    description:
      "Built a comprehensive home lab with pfSense Firewall, VirtualBox, Kali Linux, and Ubuntu for security testing and learning.",
    fullDescription:
      "A fully functional cybersecurity lab environment built for hands-on security testing, penetration testing practice, and security tool exploration. The lab features network segmentation using pfSense, multiple virtual machines including Kali Linux for offensive security and Ubuntu servers as target systems, enabling safe and isolated security experimentation.",
    techStack: ["pfSense", "VirtualBox", "Kali Linux", "Ubuntu", "Networking", "Firewalls"],
    icon: Server,
    github: "https://github.com/jojosony",
    screenshots: [
      "/images/projects/homelab-1.jpg",
      "/images/projects/homelab-2.jpg",
      "/images/projects/homelab-3.jpg",
    ],
    whatILearned: [
      "Configured pfSense firewall with multiple network interfaces and VLANs",
      "Set up NAT and port forwarding rules for network segmentation",
      "Deployed vulnerable machines for penetration testing practice",
      "Implemented intrusion detection with Snort/Suricata integration",
      "Configured VPN connections for secure remote lab access",
      "Practiced network traffic analysis using Wireshark",
    ],
  },
  {
    slug: "web-application-firewall",
    title: "Web Application Firewall Setup",
    description:
      "Configured SafeLine WAF with Apache and OpenSSL for web application protection and SSL/TLS implementation.",
    fullDescription:
      "This project focused on implementing a Web Application Firewall (WAF) to protect web applications from common attacks. SafeLine WAF was configured alongside Apache web server with proper SSL/TLS certificates using OpenSSL. The setup provides protection against OWASP Top 10 vulnerabilities including SQL injection, XSS, and other web-based attacks.",
    techStack: ["SafeLine WAF", "Apache", "OpenSSL", "SSL/TLS", "Security", "Linux"],
    icon: Globe,
    github: "https://github.com/jojosony",
    screenshots: [
      "/images/projects/waf-1.jpg",
      "/images/projects/waf-2.jpg",
      "/images/projects/waf-3.jpg",
    ],
    whatILearned: [
      "Deployed and configured SafeLine WAF for web application protection",
      "Generated and installed SSL/TLS certificates using OpenSSL",
      "Configured Apache virtual hosts with security headers",
      "Created custom WAF rules for application-specific protection",
      "Implemented rate limiting and bot protection mechanisms",
      "Analyzed WAF logs to identify and block malicious traffic patterns",
    ],
  },
  {
    slug: "owasp-top-10-labs",
    title: "OWASP Top 10 Labs",
    description:
      "Completed hands-on labs on PortSwigger and TryHackMe to understand and exploit OWASP Top 10 vulnerabilities.",
    fullDescription:
      "Comprehensive hands-on training covering all OWASP Top 10 vulnerabilities through practical labs on PortSwigger Web Security Academy and TryHackMe platforms. This includes exploitation techniques and remediation strategies for SQL Injection, Cross-Site Scripting, Broken Authentication, and other critical web application vulnerabilities.",
    techStack: ["PortSwigger", "TryHackMe", "OWASP", "Web Security", "Burp Suite", "SQL Injection"],
    icon: FlaskConical,
    github: "https://github.com/jojosony",
    screenshots: [
      "/images/projects/owasp-1.jpg",
      "/images/projects/owasp-2.jpg",
      "/images/projects/owasp-3.jpg",
    ],
    whatILearned: [
      "Mastered SQL injection techniques including blind and error-based injection",
      "Exploited XSS vulnerabilities (Reflected, Stored, DOM-based)",
      "Bypassed authentication mechanisms and session management flaws",
      "Identified and exploited insecure direct object references (IDOR)",
      "Practiced security misconfiguration exploitation",
      "Learned remediation techniques for each vulnerability type",
    ],
  },
  {
    slug: "ai-emotion-detection",
    title: "AI Emotion Detection from Audio",
    description:
      "Developed an AI-powered system to detect emotions from audio inputs using machine learning algorithms.",
    fullDescription:
      "A machine learning project that analyzes audio inputs to detect and classify human emotions. The system uses advanced audio processing techniques to extract features like MFCC, pitch, and energy, then applies trained ML models to predict emotions such as happiness, sadness, anger, and fear. This project demonstrates the intersection of AI/ML with practical applications in security and human-computer interaction.",
    techStack: ["Python", "Machine Learning", "Audio Processing", "AI", "TensorFlow", "Librosa"],
    icon: Brain,
    github: "https://github.com/jojosony",
    screenshots: [
      "/images/projects/emotion-1.jpg",
      "/images/projects/emotion-2.jpg",
      "/images/projects/emotion-3.jpg",
    ],
    whatILearned: [
      "Extracted audio features using MFCC, spectrograms, and chroma features",
      "Built and trained neural networks for emotion classification",
      "Processed and augmented audio datasets for improved model accuracy",
      "Implemented real-time audio capture and prediction pipeline",
      "Evaluated model performance using confusion matrices and accuracy metrics",
      "Deployed the model as a usable application interface",
    ],
  },
  {
    slug: "laboratory-management-app",
    title: "Laboratory Management App",
    description:
      "Full-stack application for laboratory management with user authentication and data management capabilities.",
    fullDescription:
      "A complete full-stack application designed for managing laboratory operations including inventory tracking, user management, and experiment logging. Built with a Node.js backend API, Flutter mobile frontend, and MongoDB database, featuring secure authentication, role-based access control, and real-time data synchronization between devices.",
    techStack: ["Node.js", "Flutter", "MongoDB", "REST API", "JWT", "Express"],
    icon: Server,
    github: "https://github.com/jojosony",
    screenshots: [
      "/images/projects/labapp-1.jpg",
      "/images/projects/labapp-2.jpg",
      "/images/projects/labapp-3.jpg",
    ],
    whatILearned: [
      "Designed and implemented RESTful API architecture with Express.js",
      "Built secure authentication system using JWT tokens",
      "Created cross-platform mobile app using Flutter framework",
      "Implemented MongoDB schemas with proper data validation",
      "Set up role-based access control for different user types",
      "Deployed application with proper security configurations",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
