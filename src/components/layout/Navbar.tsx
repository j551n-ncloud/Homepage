"use client";

import { useEffect, useState } from "react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Base navigation items - adding Career and Expertise
  const navItems: Array<{ name: string; path: Route }> = [
    { name: "Home", path: "/" },
    { name: "Expertise", path: "/expertise" },
    { name: "Career", path: "/career" },
    { name: "Homelab", path: "/homelab" },
    { name: "Legal", path: "/legal" }
  ];

  // Popular services
  const popularServices = [
    { name: "Cloud", url: "cloud.j551n.com" },
    { name: "Fumadocs", url: "docu.j551n.com" },
    { name: "Repo", url: "repo.j551n.com" },
    { name: "Notes", url: "notes.j551n.com" },
    { name: "Recipe", url: "recipe.j551n.com" },
    { name: "Docuseal", url: "sign.j551n.com" },
    { name: "GitLab", url: "gitlab.j551n.com" },
    { name: "IT Tools", url: "tools.j551n.com" }
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/70 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur" : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-sm border border-border/60 bg-card">
            <img
              src="/favicon.png?v=2"
              alt="Johannes Nguyen logo"
              width={36}
              height={36}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </span>
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              System Integration
            </span>
            <span className="text-base font-semibold text-foreground">
              Johannes Nguyen
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    href={item.path}
                    className={cn(
                      "group relative rounded-sm px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
                      pathname === item.path && "text-tech-600"
                    )}
                  >
                    <span>{item.name}</span>
                    <span
                      className={cn(
                        "absolute inset-x-1 -bottom-1 h-[2px] origin-left scale-x-0 bg-tech-500 transition-transform duration-200",
                        pathname === item.path && "scale-x-100"
                      )}
                    />
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-sm bg-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-tech-600">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="border-border/80 bg-popover/95">
                  <div className="grid w-[420px] grid-cols-2 gap-3 p-4">
                    {popularServices.map((service) => (
                      <a
                        key={service.name}
                        href={`https://${service.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col rounded-sm border border-transparent p-3 text-sm transition-all duration-200 hover:border-tech-500/30 hover:bg-tech-500/10"
                      >
                        <span className="font-medium text-foreground">{service.name}</span>
                        <span className="text-xs text-muted-foreground">{service.url}</span>
                      </a>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" className="rounded-none border-2 border-tech-500/70 bg-tech-500 text-tech-foreground hover:bg-tech-600">
              <a href="mailto:johannes.quangminh.nguyen@gmail.com">Contact</a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            onClick={toggleMenu}
            size="icon"
            className="rounded-none"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-b border-border/70 bg-background/95 backdrop-blur-md md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "rounded-sm px-2 py-2 text-sm font-medium text-foreground transition-colors",
                  pathname === item.path && "text-tech-600"
                )}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-4">
              <p className="mb-2 text-sm font-semibold text-muted-foreground">Popular Services</p>
              <div className="grid grid-cols-2 gap-2">
                {popularServices.map((service) => (
                  <a
                    key={service.name}
                    href={`https://${service.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 transition-colors hover:text-tech-600"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-4 w-full rounded-none border-2 border-tech-500/70 bg-tech-500 text-tech-foreground hover:bg-tech-600">
                <a href="mailto:johannes.quangminh.nguyen@gmail.com">Contact</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
