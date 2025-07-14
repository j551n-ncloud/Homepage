
import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";
import { Briefcase, GraduationCap, Wrench, Laptop2, Car, FlaskConical, Hospital } from "lucide-react";

const Career = () => {
  useEffect(() => {
    document.title = "Career History | Johannes Nguyen";
  }, []);

  const careerItems = [
    {
      period: "2022-Present",
      company: "Heidelberg DKFZ",
      role: "Apprentice as IT Specialist for System Integration",
      description: "Specialized training in system integration, network administration, and enterprise IT infrastructure management."
    },
    {
      period: "2021-2022",
      company: "Rheingönheim Vögele",
      role: "Commercial Vehicle Mechanic",
      description: "Maintenance and repair of commercial vehicles, diagnostics, and technical problem-solving."
    },
    {
      period: "2017-2021",
      company: "Mannheim Mercedes",
      role: "Apprenticeship as Automotive Mechanic",
      description: "Comprehensive training in automotive mechanics covering both cars and commercial vehicles, including diagnostics and repair procedures."
    },
    {
      period: "2016",
      company: "Ludwigshafen BASF",
      role: "Computer Science Internship",
      description: "2-week school-required internship exploring computer science applications in industrial environments."
    },
    {
      period: "2016",
      company: "Weissach Porsche",
      role: "BORS Internship in Prototyping",
      description: "Hands-on experience in automotive prototyping and pre-production processes at Porsche's development center."
    },
    {
      period: "2015",
      company: "Radolfzell TRW",
      role: "Production & Material Testing Internship",
      description: "2-week school-required internship focusing on production processes and material testing procedures."
    },
    {
      period: "2013",
      company: "Schwetzingen GRN",
      role: "Computer Science Internship",
      description: "Early exposure to computer science concepts and applications in a professional healthcare environment."
    }
  ];

  const iconMap = [
    <Laptop2 className="h-4 w-4 text-white" />, // IT Specialist
    <Wrench className="h-4 w-4 text-white" />, // Mechanic
    <Car className="h-4 w-4 text-white" />, // Automotive
    <FlaskConical className="h-4 w-4 text-white" />, // BASF
    <Briefcase className="h-4 w-4 text-white" />, // Porsche
    <GraduationCap className="h-4 w-4 text-white" />, // TRW
    <Hospital className="h-4 w-4 text-white" /> // GRN
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 md:py-24 max-w-4xl">
          {/* Header Section */}
          <div className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Career Journey
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From automotive mechanics to IT systems integration, my career path reflects 
              a passion for understanding how complex systems work and evolve.
            </p>
          </div>

          {/* Career Timeline */}
          <div className="relative pl-8 md:pl-12">
            {/* Vertical timeline line */}
            <div className="absolute left-2 md:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-primary/10 rounded-full pointer-events-none animate-fade-in" style={{zIndex:0}}></div>
            <div className="space-y-12 relative z-10">
              {careerItems.map((item, index) => (
                <div 
                  key={index}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot with icon */}
                  <div className="absolute left-[-38px] md:left-[-42px] top-2 flex items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg border-4 border-background z-20 animate-bounce-in transition-transform duration-300 group-hover:scale-110">
                    {iconMap[index]}
                  </div>
                  {/* Card content */}
                  <div className="ml-2 md:ml-6 p-6 bg-card rounded-lg shadow-md border border-border transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-lg animate-fade-up animate-slide-in-left">
                    <div className="space-y-3">
                      {/* Period */}
                      <div className="text-sm font-medium text-primary">
                        {item.period}
                      </div>
                      {/* Company and Role */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                          {item.company}
                        </h3>
                        <h4 className="text-lg font-semibold text-muted-foreground">
                          {item.role}
                        </h4>
                      </div>
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 pt-12 border-t border-border animate-fade-in">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Looking Forward
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Currently focused on expanding my expertise in system integration, 
                cloud technologies, and modern IT infrastructure while continuing 
                to build upon my strong foundation in hands-on technical work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
