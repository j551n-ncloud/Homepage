"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  Mail,
  Network,
  Shield,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconCircle } from "@/components/ui/icon-circle";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    window.location.href = "mailto:Johannes.quangminh.nguyen@gmail.com";
  };

  const differentiators = [
    {
      icon: Workflow,
      title: "Automation mindset",
      description: "Ansible playbooks and scripts replace repetitive tasks and keep changes consistent.",
    },
    {
      icon: Cpu,
      title: "Homelab craft",
      description: "Private lab for experimenting with virtualization, storage, and service hardening.",
    },
    {
      icon: Network,
      title: "Networking focus",
      description: "Hands-on work with VLANs, VPN, and secure remote access via Cloudflare Tunnels.",
    },
    {
      icon: Shield,
      title: "Security aware",
      description: "Versioned backups, secrets management, and documentation keep services trustworthy.",
    },
  ];

  const stats = [
    {
      label: "Managed services",
      value: "Private homelab",
      description: "Self-hosted apps that support learning, note taking, and daily workflows.",
    },
    {
      label: "Observability",
      value: "Grafana dashboards",
      description: "Dashboards track hardware usage, uptime, and backups across nodes.",
    },
    {
      label: "Focus",
      value: "Automation-first",
      description: "Continuously improving with infrastructure-as-code and scripting experiments.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-muted/40 py-32">
      <div className="pointer-events-none absolute inset-0">
  <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-tech-500/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,136,229,0.18),_transparent_60%)]" />
      </div>

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-10">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit border-tech-500/50 text-tech-600">
              IT Technician & Homelab Enthusiast
            </Badge>
            <h1 className="max-w-3xl text-balance text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              <span className="block text-4xl text-foreground lg:text-[3.5rem]">Johannes Nguyen</span>
              <span className="mt-4 block text-3xl font-semibold leading-tight text-tech-600 lg:text-[2.75rem]">
                <span className="block">IT Technician & System Administrator</span>
                <span className="block">Apprentice & Homelab Enthusiast</span>
              </span>
            </h1>
            <div className="space-y-3 text-lg text-muted-foreground">
              <p className="max-w-2xl">
                Passionate about Linux, virtualization, and infrastructure as code.
              </p>
              <p className="max-w-2xl">
                Currently working at the German Cancer Research Center.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="rounded-none border-2 border-tech-500/60 bg-tech-500 text-tech-foreground shadow-[0_12px_30px_-18px_rgba(30,136,229,0.7)] transition-colors hover:bg-tech-600"
              onClick={handleContactClick}
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button
              variant="outline"
              onClick={scrollToAbout}
              className="group rounded-none border-2 border-border bg-background/70 backdrop-blur hover:border-tech-500/60"
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-sm border border-border/70 bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-tech-500/40 hover:shadow-[0_16px_42px_-24px_rgba(30,136,229,0.45)]"
              >
                <IconCircle icon={item.icon} size="sm" className="bg-muted text-foreground transition-colors group-hover:bg-tech-500/15 group-hover:text-tech-600" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-sm border border-border/70 bg-card/80 backdrop-blur">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tech-500 via-blue-500 to-tech-500" />
            <a
              className="flex items-center gap-3 border-b border-border/60 px-6 py-4 transition-colors hover:bg-muted/40"
              href="mailto:johannes.quangminh.nguyen@gmail.com"
            >
              <IconCircle icon={Mail} size="sm" className="bg-muted text-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Primary contact</p>
                <p className="font-semibold text-foreground">johannes.quangminh.nguyen@gmail.com</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
            </a>
            <div className="grid grid-cols-1 divide-y divide-border/60">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2 px-6 py-5">
                  <span className="text-sm uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </span>
                  <span className="text-3xl font-semibold text-foreground">{stat.value}</span>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
