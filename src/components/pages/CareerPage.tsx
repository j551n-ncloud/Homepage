import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Car,
  FlaskConical,
  GraduationCap,
  Hospital,
  Laptop2,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IconBadge } from "@/components/ui/icon-badge";

type CareerItem = {
  period: string;
  company: string;
  role: string;
  description: string;
  icon: LucideIcon;
};

const careerTimeline: CareerItem[] = [
  {
  period: "2022 - Present",
    company: "German Cancer Research Center (DKFZ)",
    role: "Apprentice IT Specialist for System Integration",
    description:
      "Hands-on system integration, network administration, and enterprise IT infrastructure operations within a research environment.",
    icon: Laptop2,
  },
  {
  period: "2021 - 2022",
    company: "Rheingönheim Vögele",
    role: "Commercial Vehicle Mechanic",
    description:
      "Diagnostics, maintenance, and repair of commercial vehicles with a focus on uptime and safety-critical components.",
    icon: Wrench,
  },
  {
  period: "2017 - 2021",
    company: "Mercedes-Benz Mannheim",
    role: "Automotive Mechanic Apprentice",
    description:
      "Comprehensive training across cars and trucks, covering diagnostics, electronics, and mechanical repair workflows.",
    icon: Car,
  },
  {
    period: "2016",
    company: "BASF Ludwigshafen",
    role: "Computer Science Internship",
    description:
      "Explored industrial IT processes during a mandatory internship with exposure to large-scale production systems.",
    icon: FlaskConical,
  },
  {
    period: "2016",
    company: "Porsche Weissach",
    role: "BORS Prototyping Internship",
    description:
      "Supported prototyping efforts at the development center, learning about precision engineering and pre-production workflows.",
    icon: Briefcase,
  },
  {
    period: "2015",
    company: "TRW Radolfzell",
    role: "Production & Material Testing Internship",
    description:
      "Assisted in quality assurance and material testing, reinforcing attention to detail in manufacturing.",
    icon: GraduationCap,
  },
  {
    period: "2013",
    company: "GRN Schwetzingen",
    role: "Computer Science Internship",
    description:
      "Early IT exposure in a healthcare setting, supporting local teams with day-to-day technology tasks.",
    icon: Hospital,
  },
];

const focusAreas = [
  "System integration & automation",
  "Enterprise and research IT operations",
  "Hands-on diagnostics and problem solving",
  "Documentation-first mindset",
];

export function CareerPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
          <aside className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-tech-500/50 text-tech-600">
                Career Journey
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                From automotive diagnostics to enterprise systems integration
              </h1>
              <p className="text-lg text-muted-foreground">
                Every chapter sharpened my ability to diagnose complex systems, collaborate with specialists, and keep critical services available. These are skills I now apply daily in IT.
              </p>
            </div>

            <div className="rounded-sm border border-border/70 bg-card/70 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Focus areas today
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-tech-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="relative">
            <div className="pointer-events-none absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-tech-500/60 via-tech-500/20 to-transparent sm:block" />
            <div className="space-y-8">
              {careerTimeline.map((item) => (
                <div key={item.company} className="group relative grid gap-4 rounded-sm border border-border/70 bg-card/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-tech-500/40 hover:shadow-[0_20px_40px_-28px_rgba(30,136,229,0.5)] sm:grid-cols-[auto_1fr]">
                  <div className="flex items-start gap-4">
                    <IconBadge icon={item.icon} tone="tech" size="sm" className="shrink-0" />
                    <div className="sm:hidden">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{item.company}</h3>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="hidden sm:flex sm:flex-col">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {item.period}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.company}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-sm border border-border/70 bg-muted/40 p-6">
              <h2 className="text-base font-semibold text-foreground">Looking forward</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                I am deepening my expertise in automation, observability, and resilient platform design while bringing the same discipline from automotive diagnostics into modern infrastructure work.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CareerPage;
