
import { 
  Terminal,
  Server,
  Database,
  Code,
  Settings,
  Laptop,
  Network,
  Globe,
  Cpu,
  Github
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Expertise() {
  // Categorized expertise data
  const expertiseSections = [
    {
      title: "System Administration",
      items: [
        {
          area: "Linux",
          experience: "Server administration & service management",
          additionalKnowledge: "cgroups/systemd, RHEL, auditd",
          icon: <Terminal className="h-5 w-5 text-primary" />
        },
        {
          area: "General Support",
          experience: "Technical troubleshooting & solutions",
          additionalKnowledge: "User training, Mac/Windows/Linux support",
          icon: <Settings className="h-5 w-5 text-primary" />
        },
        {
          area: "Bash Scripting",
          experience: "Automation scripting",
          additionalKnowledge: "Shell utilities, performance optimization",
          icon: <Terminal className="h-5 w-5 text-primary" />
        },
        {
          area: "Server Maintenance",
          experience: "Proactive monitoring & troubleshooting",
          additionalKnowledge: "Performance tuning, Grafana",
          icon: <Server className="h-5 w-5 text-primary" />
        },
        {
          area: "RStudio Server",
          experience: "Installation & configuration",
          additionalKnowledge: "License management",
          icon: <Cpu className="h-5 w-5 text-primary" />
        },
        {
          area: "Dell Hardware",
          experience: "Enterprise server management",
          additionalKnowledge: "iDRAC, PowerEdge servers, RAID configuration, hardware diagnostics",
          icon: <Server className="h-5 w-5 text-primary" />
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
          icon: <Code className="h-5 w-5 text-primary" />
        },
        {
          area: "Ansible",
          experience: "Infrastructure automation",
          additionalKnowledge: "Playbook development, AWX integration",
          icon: <Settings className="h-5 w-5 text-primary" />
        },
        {
          area: "Build & Compile",
          experience: "Module building & compilation",
          additionalKnowledge: "Cross-platform compatibility, optimization", 
          icon: <Code className="h-5 w-5 text-primary" />
        },
        {
          area: "AXW-Operator",
          experience: "1.5 years operational experience",
          additionalKnowledge: "Troubleshooting, customization",
          icon: <Settings className="h-5 w-5 text-primary" />
        },
        {
          area: "Fullstack Development",
          experience: "Web application development",
          additionalKnowledge: "TypeScript, Supabase, JavaScript, Vite, Express",
          icon: <Laptop className="h-5 w-5 text-primary" />
        },
        {
          area: "GitHub",
          experience: "Version control & collaboration",
          additionalKnowledge: "PR workflow, project management",
          icon: <Github className="h-5 w-5 text-primary" />
        },
        // New items below
        {
          area: "Python",
          experience: "Scripting, automation, and data analysis",
          additionalKnowledge: "Pandas, FastAPI, scripting, automation",
          icon: <Code className="h-5 w-5 text-primary" />
        },
        {
          area: "SQL",
          experience: "Database querying & management",
          additionalKnowledge: "PostgreSQL, MySQL, query optimization",
          icon: <Database className="h-5 w-5 text-primary" />
        },
        {
          area: "AI Knowledge",
          experience: "Machine learning & AI concepts",
          additionalKnowledge: "Prompt engineering, LLMs, model deployment",
          icon: <Cpu className="h-5 w-5 text-primary" />
        },
        {
          area: "Open WebUI",
          experience: "AI tool integration & usage",
          additionalKnowledge: "Self-hosted LLMs, Open WebUI workflows, Anki Card Creator (AI endpoint)",
          icon: <Globe className="h-5 w-5 text-primary" />
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
          icon: <Server className="h-5 w-5 text-primary" />
        },
        {
          area: "VMware",
          experience: "Enterprise virtualization",
          additionalKnowledge: "Migration to Proxmox",
          icon: <Server className="h-5 w-5 text-primary" />
        },
        {
          area: "Cluster Management",
          experience: "High-availability infrastructure",
          additionalKnowledge: "Failover configuration, LSF knowledge",
          icon: <Server className="h-5 w-5 text-primary" />
        },
        {
          area: "Homelab",
          experience: "Personal infrastructure management",
          additionalKnowledge: "Virtualization, self-hosted services, Tailscale",
          icon: <Network className="h-5 w-5 text-primary" />
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
          icon: <Network className="h-5 w-5 text-primary" />
        },
        {
          area: "Container Technologies",
          experience: "Docker deployment & Kubernetes orchestration",
          additionalKnowledge: "Docker Compose, Dockerfile optimization, Helm charts, K3S deployment, custom operators",
          icon: <Database className="h-5 w-5 text-primary" />
        },
        {
          area: "CretA",
          experience: "Research infrastructure platform integration",
          additionalKnowledge: "User management, resource allocation, project onboarding",
          icon: <Server className="h-5 w-5 text-primary" />
        }
      ]
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4 text-gradient">My Expertise</h2>
          <p className="text-lg text-muted-foreground">
            A detailed breakdown of my technical skills and experience across various IT domains.
          </p>
        </div>

        <div className="mb-12 space-y-12">
          {expertiseSections.map((section, idx) => (
            <div key={section.title} id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className="animate-scale-in">
              <h3 className="text-2xl font-semibold mb-4 text-left text-primary">{section.title}</h3>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-card shadow-sm rounded-lg">
                {section.items.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        {item.icon}
                        <h4 className="font-medium text-foreground">{item.area}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.experience}</p>
                      <p className="text-xs text-muted-foreground/80 italic">
                        <span className="font-medium">Knowledge:</span> {item.additionalKnowledge}
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
