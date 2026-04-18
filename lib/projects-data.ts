import { Shield, Server, Globe, Brain, FlaskConical, Bot } from "lucide-react"
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
    slug: "junior-soc-analyst-ai-agent",
    title: "AI-Powered SOC Triage Analyst — ICMP Flood Detection POC",
    description:
      "A Proof of Concept demonstrating enterprise-grade AI-powered threat detection and automated SOC triage using Airia AI (platform) + NanoGPT 5 (agent), triggered by a real-time ICMP flood attack simulation.",
    fullDescription:
      "This project simulates a real-world Security Operations Center (SOC) scenario where an attacker machine launches an ICMP ping flood attack and the target machine generates a structured JSON alert upon detection. The alert is sent to an AI SOC Triage Analyst deployed on Airia AI, powered by NanoGPT 5, which follows a professional enterprise SOC playbook to analyze the alert and return a full structured triage report including threat classification, MITRE ATT&CK mapping, risk scoring, and escalation recommendation.",
    techStack: ["Airia AI", "NanoGPT 5", "Python", "SOC", "AI Agent", "Playbooks"],
    icon: Bot,
    github: "https://github.com/jojosony21/AI-Powered-SOC-Triage-Analyst-ICMP-Flood-Detection-",
    screenshots: [
      "/images/projects/soc-agent-1.png",
      "/images/projects/soc-agent-2.png",
      "/images/projects/soc-agent-3.png",
    ],
    whatILearned: [
      "Developed an AI Agent using Airia AI for SOC analysis",
      "Created custom playbooks for automated security incident response",
      "Wrote Python scripts to generate network traffic (ICMP pings)",
      "Integrated AI with network security operations for faster detection",
      "Gained hands-on experience in automated threat detection and response",
    ],
  },
  {
    slug: "wazuh-siem-deployment",
    title: "SIEM Deployment & Incident Response Lab (Wazuh)",
    description:
      "Deployed a centralized Security Information and Event Management (SIEM) system to monitor a vulnerable web application, detect malicious activity, and configure active logging using Wazuh.",
    fullDescription:
      "The goal of this project was to deploy a centralized Security Information and Event Management (SIEM) system to monitor a vulnerable web application, detect malicious activity, and configure active logging. I deployed Wazuh as the core SIEM to monitor Apache logs, system authentications, and critical file integrity on a target Linux machine (Zorin OS) from an attacker machine (Kali Linux).",
    techStack: ["Wazuh", "Linux", "Log Analysis", "SIEM", "Elasticsearch", "Kibana"],
    icon: Shield,
    github: "https://github.com/jojosony21/SIEM-Deployment-Incident-Response-Lab-Wazuh-",
    screenshots: [
      "/images/projects/wazuh-1.png",
      "/images/projects/wazuh-2.png",
      "/images/projects/wazuh-3.png",
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
    title: "pfSense Home Lab — Network Attack & Defense",
    description:
      "A complete network security home lab using pfSense as firewall/router with antiX Linux as both attacker and defender, virtualized inside VirtualBox on a Kali Linux host machine.",
    fullDescription:
      "A fully functional cybersecurity lab environment built for hands-on security testing, penetration testing practice, and security tool exploration. The lab features network segmentation using pfSense as a firewall/router with antiX Linux configured as both attacker and defender, virtualized inside VirtualBox on a Kali Linux host machine.",
    techStack: ["pfSense", "VirtualBox", "Kali Linux", "Networking", "Firewalls"],
    icon: Server,
    github: "https://github.com/jojosony21/pfSense-Home-Lab-Attack-Defense-on-VirtualBox",
    screenshots: [
      "/images/projects/homelab-1.png",
      "/images/projects/homelab-2.png",
      "/images/projects/homelab-3.png",
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
    title: "Web Application Firewall Home Lab — SafeLine WAF",
    description:
      "A hands-on cybersecurity home lab demonstrating Web Application Firewall (WAF) deployment, attack simulation, and defense using SafeLine WAF on Zorin OS, with attack traffic generated from Kali Linux.",
    fullDescription:
      "This project builds a complete, realistic SOC/Blue Team home lab environment that demonstrates hosting a deliberately vulnerable web application (DVWA) behind a WAF, simulating real-world web attacks from Kali Linux (SQL Injection, HTTP Flood), observing SafeLine WAF detect, block, and log each attack in real time, and configuring advanced WAF defenses like rate limiting, access control, custom deny rules, and an authentication gateway.",
    techStack: ["SafeLine WAF", "Zorin OS", "Kali Linux", "WAF", "Security", "Active Defense"],
    icon: Globe,
    github: "https://github.com/jojosony21/-Web-Application-Firewall-Home-Lab-SafeLine-WAF",
    screenshots: [
      "/images/projects/waf-1.png",
      "/images/projects/waf-2.png",
      "/images/projects/waf-3.png",
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
    title: "SpeechFix: Speech Emotion & Confidence Analyzer",
    description:
      "A deep learning-based web application that analyzes speech signals to detect emotions and assess speaker confidence levels using a CNN-LSTM architecture and Librosa.",
    fullDescription:
      "SpeechFix is a deep learning-based web application that analyzes speech signals to detect emotions and assess speaker confidence levels. It helps public speakers, educators, and professionals improve their communication skills through actionable insights. It detects emotions like Happy, Sad, Angry, and Neutral, and rates speaker confidence using a CNN-LSTM architecture and audio feature extraction (MFCC, pitch, tone, energy) with Librosa.",
    techStack: ["Python", "CNN-LSTM", "Librosa", "React", "Flask", "Machine Learning"],
    icon: Brain,
    github: "https://github.com/jojosony21/SpeechFix_Speech_Emotion_and_Confidence_Analyzer",
    screenshots: [
      "/images/projects/emotion-1.png",
      "/images/projects/emotion-2.png",
      "/images/projects/emotion-3.png",
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
