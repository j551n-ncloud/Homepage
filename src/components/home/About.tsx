"use client";

import {
  Cpu,
  Database,
  Server,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconBadge } from "@/components/ui/icon-badge";

export function About() {
  const router = useRouter();
  const skills = [
    {
      icon: Server,
      title: "System Administration",
      description:
        "Linux & Windows server management with 4+ years of experience maintaining mission critical workloads.",
      tone: "tech" as const,
    },
    {
      icon: Terminal,
      title: "DevOps",
      description:
        "Automation-first mindset with Docker, Kubernetes, Ansible, and CI/CD to ship reliably.",
      tone: "muted" as const,
    },
    {
      icon: Database,
      title: "Virtualization",
      description:
        "Deep knowledge of VMware & Proxmox clusters with GPU passthrough, Ceph, and high availability.",
      tone: "tech" as const,
    },
    {
      icon: Cpu,
      title: "Infrastructure",
      description:
        "Network architecture, observability, and security auditing to keep infrastructure resilient.",
      tone: "neutral" as const,
    },
  ];

  const sectionIdMap: Record<string, string> = {
    "System Administration": "system-administration",
    "DevOps": "devops",
    "Virtualization": "virtualization",
    "Infrastructure": "infrastructure"
  };

  return (
    <section id="about" className="bg-background py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="outline" className="w-fit border-tech-500/50 text-tech-600">
              About
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              About me
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm an apprentice system integrator at the German Cancer Research Center who lives and breathes Linux, automation, and resilient infrastructure. I focus on bringing Swiss-grade clarity to every project, from day-to-day operations to long-term platform design.
            </p>
            <div className="grid grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-sm border border-border/80 bg-card/60 p-4">
                <p className="font-semibold text-foreground">4+ years</p>
                <p>Linux, Windows Server & virtualization in production</p>
              </div>
              <div className="rounded-sm border border-border/80 bg-card/60 p-4">
                <p className="font-semibold text-foreground">12+ services</p>
                <p>Designed, deployed, and maintained in my homelab</p>
              </div>
              <div className="rounded-sm border border-border/80 bg-card/60 p-4">
                <p className="font-semibold text-foreground">Automation-first</p>
                <p>GitHub Actions, GitLab CI/CD, Ansible, and observability</p>
              </div>
              <div className="rounded-sm border border-border/80 bg-card/60 p-4">
                <p className="font-semibold text-foreground">Community-driven</p>
                <p>Open-source contributor</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="rounded-none border-2 border-tech-500/60 bg-tech-500 text-tech-foreground hover:bg-tech-600"
              onClick={() => router.push("/expertise")}
            >
              Explore my full expertise
            </Button>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {skills.map((skill) => (
                <Link
                  key={skill.title}
                  href={`/expertise#${sectionIdMap[skill.title]}`}
                  className="group block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-tech-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Card className="group border border-border/70 bg-card/70 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-tech-500/40 group-hover:shadow-[0_12px_40px_-20px_rgba(30,136,229,0.6)]">
                    <CardHeader className="p-6 pb-4">
                      <IconBadge icon={skill.icon} tone={skill.tone} className="transition-colors group-hover:bg-tech-500/20 group-hover:text-tech-600" />
                      <CardTitle className="mt-6 text-xl font-semibold text-foreground">
                        {skill.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
