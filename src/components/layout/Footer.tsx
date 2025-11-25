import type { Route } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { IconBadge } from "@/components/ui/icon-badge";
import { Badge } from "@/components/ui/badge";
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/j551n-ncloud",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/johannesquangminh",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:johannes.quangminh.nguyen@gmail.com",
    icon: Mail,
  },
];


const serviceLinks = [
  { label: "Anki Cards", href: "https://anki.j551n.com" },
  { label: "Cloud", href: "https://cloud.j551n.com" },
  { label: "Fumadocs", href: "https://docu.j551n.com" },
  { label: "Repo", href: "https://repo.j551n.com" },
  { label: "Notes", href: "https://notes.j551n.com" },
  { label: "Recipe", href: "https://recipe.j551n.com" },
  { label: "Docuseal", href: "https://sign.j551n.com" },
  { label: "GitLab", href: "https://gitlab.j551n.com" },
];

const primaryLinks: Array<{ label: string; href: Route }> = [
  { label: "Home", href: "/" },
  { label: "Expertise", href: "/expertise" },
  { label: "Career", href: "/career" },
  { label: "Homelab", href: "/homelab" },
];

const legalLinks: Array<{ label: string; href: Route }> = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Legal Notice", href: "/legal/notice" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/90 backdrop-blur">
      <div className="container mx-auto px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.1fr_1fr_1fr_1.2fr]">
          <div className="space-y-4">
            <Badge variant="outline" className="border-tech-500/40 text-tech-600">
              System Integration
            </Badge>
            <h3 className="text-2xl font-semibold text-foreground">Johannes Nguyen</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              System administrator focused on automation, observability, and rock-solid infrastructure for research teams.
            </p>
            <div className="space-y-2">
              {socialLinks.map((social) => (
                <div className="flex items-center gap-3" key={social.label}>
                  <IconBadge icon={social.icon} tone="muted" size="sm" />
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground transition-colors hover:text-tech-600"
                  >
                    {social.label === "Email" ? "johannes.quangminh.nguyen@gmail.com" : social.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-tech-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-tech-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Managed Services
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              {serviceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-tech-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {currentYear} Johannes Nguyen. All rights reserved.</p>
          <p>Hosted with Proxmox · Observability powered by Grafana</p>
        </div>
      </div>
    </footer>
  );
}
