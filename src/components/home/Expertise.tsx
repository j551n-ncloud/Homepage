"use client";

import {
  Code,
  Cpu,
  Database,
  Globe,
  Github,
  Laptop,
  Network,
  Server,
  Settings,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { IconBadge } from "@/components/ui/icon-badge";
import { Badge } from "@/components/ui/badge";

type ExpertiseItem = {
  area: string;
  experience: string;
  additionalKnowledge: string;
  icon: LucideIcon;
  tone?: "tech" | "neutral" | "muted";
};

type ExpertiseSection = {
  title: string;
  items: ExpertiseItem[];
};

export function Expertise() {
  // Categorized expertise data
  const expertiseSections: ExpertiseSection[] = [
    {
      title: "System Administration",
      items: [
        {
          area: "Linux",
          experience: "Server administration & service management",
          additionalKnowledge: "cgroups/systemd, RHEL, auditd",
          icon: Terminal,
          tone: "tech",
        },
        {
          area: "General Support",
          experience: "Technical troubleshooting & solutions",
          additionalKnowledge: "User training, Mac/Windows/Linux support",
          icon: Settings,
          tone: "muted",
        },
        {
          area: "Bash Scripting",
          experience: "Automation scripting",
          additionalKnowledge: "Shell utilities, performance optimization",
          icon: Terminal,
          tone: "tech",
        },
        {
          area: "Server Maintenance",
          experience: "Proactive monitoring & troubleshooting",
          additionalKnowledge: "Performance tuning, Grafana",
          icon: Server,
          tone: "neutral",
        },
        {
          area: "RStudio Server",
          experience: "Installation & configuration",
          additionalKnowledge: "License management",
          icon: Cpu,
          tone: "tech",
        },
        {
          area: "Dell Hardware",
          experience: "Enterprise server management",
          additionalKnowledge: "iDRAC, PowerEdge servers, RAID configuration, hardware diagnostics",
          icon: Server,
          tone: "neutral",
        }
      ]
    },
    {
      title: "DevOps",
      items: [
        {
          area: "CI/CD",
          experience: "Pipeline implementation & management",
          additionalKnowledge: "GitHub Actions, Jenkins, GitLab CI/CD",
          icon: Code,
          tone: "tech",
        },
        {
          area: "Ansible",
          experience: "Infrastructure automation",
          additionalKnowledge: "Playbook development, AWX integration",
          icon: Settings,
          tone: "neutral",
        },
        {
          area: "Build & Compile",
          experience: "Module building & compilation",
          additionalKnowledge: "Cross-platform compatibility, optimization", 
          icon: Code,
          tone: "muted",
        },
        {
          area: "AXW-Operator",
          experience: "1.5 years operational experience",
          additionalKnowledge: "Troubleshooting, customization",
          icon: Settings,
          tone: "neutral",
        },
        {
          area: "Fullstack Development",
          experience: "Web application development",
          additionalKnowledge: "TypeScript, Supabase, JavaScript, Vite, Express",
          icon: Laptop,
          tone: "tech",
        },
        {
          area: "GitHub",
          experience: "Version control & collaboration",
          additionalKnowledge: "PR workflow, project management",
          icon: Github,
          tone: "muted",
        },
        // New items below
        {
          area: "Python",
          experience: "Scripting, automation, and data analysis",
          additionalKnowledge: "Pandas, FastAPI, scripting, automation",
          icon: Code,
          tone: "tech",
        },
        {
          area: "SQL",
          experience: "Database querying & management",
          additionalKnowledge: "PostgreSQL, MySQL, query optimization",
          icon: Database,
          tone: "neutral",
        },
        {
          area: "AI Knowledge",
          experience: "Machine learning & AI concepts",
          additionalKnowledge: "Prompt engineering, LLMs, model deployment",
          icon: Cpu,
          tone: "tech",
        },
        {
          area: "Open WebUI",
          experience: "AI tool integration & usage",
          additionalKnowledge: "Self-hosted LLMs, Open WebUI workflows, Anki Card Creator (AI endpoint)",
          icon: Globe,
          tone: "muted",
        }
      ]
    },
    {
      title: "Virtualization",
      items: [
        {
          area: "Proxmox",
          experience: "VM & LXC container management",
          additionalKnowledge: "GPU Passthrough, Ceph, Clustering",
          icon: Server,
          tone: "tech",
        },
        {
          area: "VMware",
          experience: "Enterprise virtualization",
          additionalKnowledge: "Migration to Proxmox",
          icon: Server,
          tone: "muted",
        },
        {
          area: "Cluster Management",
          experience: "High-availability infrastructure",
          additionalKnowledge: "Failover configuration, LSF knowledge",
          icon: Server,
          tone: "neutral",
        },
        {
          area: "Homelab",
          experience: "Personal infrastructure management",
          additionalKnowledge: "Virtualization, self-hosted services, Tailscale",
          icon: Network,
          tone: "tech",
        }
      ]
    },
    {
      title: "Infrastructure",
      items: [
        {
          area: "Networking",
          experience: "Network configuration, datacenter planning & server cabling",
          additionalKnowledge: "LACP bonds, VLANs, routing, IPAM, Netbox (including documentation), Proxmox SDN, datacenter network plan creation, server cabling, project onboarding",
          icon: Network,
          tone: "tech",
        },
        {
          area: "Container Technologies",
          experience: "Docker deployment & Kubernetes orchestration",
          additionalKnowledge: "Docker Compose, Dockerfile optimization, Helm charts, K3S deployment, custom operators",
          icon: Database,
          tone: "muted",
        }
      ]
    }
  ];

  return (
    <section id="expertise" className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Badge variant="outline" className="mx-auto mb-4 w-fit border-tech-500/50 text-tech-600">
            Expertise
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Bridging operations and engineering with end-to-end ownership
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From data centers to developer tooling, I build reliable foundations and smooth workflows that scale with your team.
          </p>
        </div>

        <div className="space-y-12">
          {expertiseSections.map((section) => (
            <div
              key={section.title}
              id={section.title.toLowerCase().replace(/\s+/g, "-")}
              className="space-y-6 scroll-mt-32"
            >
              <h3 className="text-left text-2xl font-semibold text-foreground">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map((item) => (
                  <Card
                    key={`${section.title}-${item.area}`}
                    className="border border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-tech-500/40 hover:shadow-[0_16px_42px_-24px_rgba(30,136,229,0.45)]"
                  >
                    <CardContent className="flex flex-col gap-3 p-6">
                      <div className="flex items-center gap-3">
                        <IconBadge icon={item.icon} tone={item.tone ?? "tech"} size="sm" />
                        <h4 className="font-medium text-foreground">{item.area}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.experience}</p>
                      <p className="text-xs text-muted-foreground/80">
                        <span className="font-semibold text-foreground">Knowledge:</span> {item.additionalKnowledge}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
