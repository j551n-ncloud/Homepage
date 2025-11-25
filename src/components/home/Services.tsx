"use client";

import {
  Activity,
  Book,
  BrainCircuit,
  Cloud,
  FileSignature,
  GitBranch,
  Package,
  Server,
  Shield,
  StickyNote,
  Utensils,
  Wrench,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { IconBadge } from "@/components/ui/icon-badge";
import { Badge } from "@/components/ui/badge";

export function Services() {
  const isMobile = useIsMobile();
  
  const services = [
    {
      icon: BrainCircuit,
      title: "Anki Card Creator",
      url: "anki.j551n.com",
      description: "Create Anki cards quickly and easily using AI to enhance your learning experience.",
      tone: "tech" as const,
    },
    {
      icon: Server,
      title: "Minecraft Server Management",
      url: "mc.j551n.com",
      description:
        "High-performance servers with customization, security, and support for Minecraft enthusiasts.",
      tone: "muted" as const,
    },
    {
      icon: Cloud,
      title: "Nextcloud Hosting",
      url: "cloud.j551n.com",
      description:
        "Secure cloud storage with collaboration tools, anywhere access, and GDPR compliance.",
      tone: "tech" as const,
    },
    {
      icon: Book,
      title: "Fumadocs Documentation",
      url: "docu.j551n.com",
      description:
        "Modern documentation platform built with Fumadocs for fast, searchable, and beautiful docs.",
      tone: "muted" as const,
    },
    {
      icon: Utensils,
      title: "Mealie Recipe Management",
      url: "recipe.j551n.com",
      description:
        "Store recipes, plan meals, create shopping lists, and share your favorite recipes with others.",
      tone: "neutral" as const,
    },
    {
      icon: Activity,
      title: "Grafana Monitoring",
      url: "monitor.j551n.com",
      description:
        "Real-time monitoring with interactive dashboards, custom metrics, and alerts for critical issues.",
      tone: "tech" as const,
    },
    {
      icon: StickyNote,
      title: "SiYuan Notes",
      url: "notes.j551n.com",
      description:
        "Easily create and manage notes with rich text editing, organization, and synchronization.",
      tone: "muted" as const,
    },
    {
      icon: Package,
      title: "Docker Registry",
      url: "repo.j551n.com",
      description:
        "Securely store and manage Docker images, with easy access for your CI/CD pipelines.",
      tone: "neutral" as const,
    },
    {
      icon: Shield,
      title: "Vaultwarden",
      url: "vault.j551n.com",
      description:
        "Safely store and manage passwords with full encryption and access from any device.",
      tone: "tech" as const,
    },
    {
      icon: GitBranch,
      title: "GitLab",
      url: "gitlab.j551n.com",
      description:
        "Manage code repositories, collaborate with your team, and automate workflows with CI/CD tools.",
      tone: "muted" as const,
    },
    {
      icon: Wrench,
      title: "IT Tools",
      url: "tools.j551n.com",
      description:
        "Access a variety of IT utilities to support your workflows and streamline processes.",
      tone: "neutral" as const,
    },
    {
      icon: FileSignature,
      title: "Docuseal",
      url: "sign.j551n.com",
      description:
        "Easily sign documents digitally with security and compliance with industry standards.",
      tone: "tech" as const,
    }
  ];

  return (
    <section id="services" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge variant="outline" className="mx-auto mb-4 w-fit border-tech-500/50 text-tech-600">
            Services
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Production-ready homelab services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Infra-as-code, off-site backups, automated patching, and live telemetry keep cloud, docs, and monitoring resilient.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <a 
              key={index} 
              href={`https://${service.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-tech-500/60"
            >
              <Card 
                className="group h-full border border-border/70 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-tech-500/40 hover:shadow-[0_20px_40px_-24px_rgba(30,136,229,0.5)]"
              >
                <CardHeader className="flex flex-col gap-3 p-4 pb-3">
                  <IconBadge
                    icon={service.icon}
                    tone={service.tone}
                    size="sm"
                    className="transition-colors group-hover:bg-tech-500/20 group-hover:text-tech-600"
                  />
                  <div>
                    <CardTitle className={`${isMobile ? "text-base" : "text-lg"} text-foreground`}>
                      {service.title}
                    </CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">{service.url}</p>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
