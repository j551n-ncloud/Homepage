
import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";

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
          <div className="space-y-12">
            {careerItems.map((item, index) => (
              <div 
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="border-l-2 border-border pl-8 md:pl-12 pb-8">
                  {/* Timeline dot */}
                  <div className="absolute w-4 h-4 bg-primary rounded-full -ml-[33px] md:-ml-[37px] mt-1.5 group-hover:scale-125 transition-transform duration-200"></div>
                  
                  {/* Content */}
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
