import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Cloud,
  Cpu,
  HardDrive,
  Lock,
  MemoryStick,
  Monitor,
  Server,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconBadge } from "@/components/ui/icon-badge";

type NodeSpec = {
  label: string;
  icon: LucideIcon;
};

type HomelabNode = {
  title: string;
  description: string;
  specs: NodeSpec[];
};

const nodes: HomelabNode[] = [
  {
    title: "Node 1: N-Serv001",
    specs: [
      { label: "Intel Core i7-3770S", icon: Cpu },
      { label: "16 GB RAM", icon: MemoryStick },
      { label: "3 TB Storage", icon: HardDrive },
      { label: "GPU Passthrough", icon: Monitor },
    ],
    description:
      "N-Serv001 is the backbone node handling general-purpose compute. With GPU passthrough available, it accelerates workloads that benefit from hardware offloading while keeping everyday services running smoothly.",
  },
  {
    title: "Node 2: N-Serv002",
    specs: [
      { label: "8 × Intel Core i7-4770S", icon: Cpu },
      { label: "32 GB RAM", icon: MemoryStick },
      { label: "6 TB Storage", icon: HardDrive },
      { label: "Media server (Jellyfin)", icon: Monitor },
    ],
    description:
  "This is the powerhouse of the lab, responsible for Jellyfin and storage-heavy workloads. The combination of 8 cores and generous RAM keeps streaming responsive for the entire household.",
  },
  {
    title: "Node 3: N-Serv003",
    specs: [
      { label: "Intel Core i5-6260U", icon: Cpu },
      { label: "8 GB RAM", icon: MemoryStick },
      { label: "500 GB Storage", icon: HardDrive },
    ],
    description:
  "The lightweight node that hosts websites, including this homepage, and monitoring dashboards. It keeps web workloads separate from heavier services without wasting power.",
  },
];

const sharedFeatures = [
  {
    title: "Cloudflared",
    description:
      "Each node tunnels through Cloudflared for secure, low-latency access to Cloudflare services, keeping ingress simple and hardened.",
    icon: Cloud,
  },
  {
    title: "Tailscale VPN",
    description:
      "Tailscale acts as subnet router and exit node, ensuring seamless and encrypted connectivity to every service, wherever I am.",
    icon: Lock,
  },
];

export function HomelabPage() {
  return (
    <div className="bg-background">
      <div className="relative">
        <div className="pointer-events-none absolute left-10 top-24 h-64 w-64 rounded-full bg-tech-500/12 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-0 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl" />
      </div>
      <div className="container relative mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-24">
        <div className="space-y-6">
          <Badge variant="outline" className="border-tech-500/50 text-tech-600">
            Homelab
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Three-node Proxmox cluster powering my digital workspace
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Experimentation meets reliable operations: each node has a distinct purpose, but they are designed to work together so critical services stay resilient while I test new ideas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {nodes.map((node) => (
            <Card
              key={node.title}
              className="border border-border/70 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-tech-500/40 hover:shadow-[0_24px_48px_-32px_rgba(30,136,229,0.55)]"
            >
              <CardHeader className="flex flex-col gap-3 border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <IconBadge icon={Server} tone="tech" size="sm" />
                  <CardTitle className="text-xl font-semibold text-foreground">{node.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{node.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Key specs
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {node.specs.map((spec) => (
                    <li key={spec.label} className="flex items-center gap-3">
                      <IconBadge icon={spec.icon} tone="muted" size="sm" />
                      <span>{spec.label}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 space-y-6">
          <h2 className="text-3xl font-semibold text-foreground">Shared capabilities</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sharedFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="border border-border/70 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-tech-500/40"
              >
                <CardHeader className="flex items-center gap-3 pb-2">
                  <IconBadge icon={feature.icon} tone="tech" size="sm" />
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-sm border border-border/70 bg-muted/40 p-8 text-sm leading-relaxed text-muted-foreground">
          <p>
            Together, the nodes form an environment where I can host reliable services, keep family media streaming uninterrupted, and still have room for experimentation. Monitoring moved from Upptime to Grafana to capture richer metrics across the cluster.
          </p>
          <div className="mt-6 flex items-center gap-2 font-medium text-tech-600">
            <ArrowRight className="h-4 w-4" />
            <span>Grafana now powers monitoring across the entire homelab.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomelabPage;
