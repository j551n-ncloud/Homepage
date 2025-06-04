
import { Layout } from "@/components/layout/Layout";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

const Career = () => {
  useEffect(() => {
    document.title = "Career History | Johannes Nguyen";
  }, []);

  const careerItems = [
    {
      period: "2022-Present",
      company: "Heidelberg DKFZ",
      role: "Apprentice as IT Specialist for System Integration"
    },
    {
      period: "2021-2022",
      company: "Rheingönheim Vögele",
      role: "Worked as Commercial Vehicle Mechanic"
    },
    {
      period: "2017-2021",
      company: "Mannheim Mercedes",
      role: "Apprenticeship as Automotive Mechanic (Cars and Commercial Vehicles)"
    },
    {
      period: "2016",
      company: "Ludwigshafen BASF",
      role: "2-week school-required internship in the field of Computer Science"
    },
    {
      period: "2016",
      company: "Weissach Porsche",
      role: "BORS Internship in Prototyping and Pre-production"
    },
    {
      period: "2015",
      company: "Radolfzell TRW",
      role: "2-week school-required internship in Production and Material Testing"
    },
    {
      period: "2013",
      company: "Schwetzingen GRN",
      role: "2-week school-required internship in the field of Computer Science"
    }
  ];

  return (
    <Layout>
      <section className="pt-20 pb-16 md:pt-24 md:pb-24 bg-gradient-to-b from-background to-muted min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <h1 className="text-4xl font-bold mb-4">Career History</h1>
            <p className="text-lg text-muted-foreground">
              My professional journey and work experience
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            <div className="space-y-12">
              {careerItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content box */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} relative z-10`}>
                    <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-xl">{item.company}</h3>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{item.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
