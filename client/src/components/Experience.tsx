import { CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: "Sept 2023 – April 2025",
      position: "Head of AI Projects",
      company: "IconPro GmbH, Aachen",
      responsibilities: [
        "Lead contact for key clients, guiding AI requirements and integration",
        "Oversee research and commercial AI projects with risk mitigation",
        "Present complex AI concepts to executives, securing funding"
      ],
      color: "secondary",
      side: "left"
    },
    {
      period: "Sep 2021 – Aug 2023",
      position: "Team Lead | ML Engineer",
      company: "IconPro GmbH, Aachen",
      responsibilities: [
        "Managed 11-member cross-functional team for predictive solutions",
        "Directed technical strategy for four major customers",
        "Designed and deployed ARES AI system on cloud infrastructure"
      ],
      color: "accent",
      side: "right"
    },
    {
      period: "Sep 2019 – Aug 2021",
      position: "Machine Learning Engineer",
      company: "IconPro GmbH, Aachen",
      responsibilities: [
        "Created AutoML prototype scaled via Kubernetes microservices",
        "Implemented RL solutions reducing scrap rates significantly",
        "Deployed cloud software with REST APIs and OpenAPI specs"
      ],
      color: "primary",
      side: "left"
    },
    {
      period: "Sep 2018 – Jun 2019",
      position: "Master's Thesis & Internship",
      company: "Carl Zeiss AG, Oberkochen",
      responsibilities: [
        "Developed Open Set Classification with Deep Learning (Zeiss IP)",
        "Improved accuracy 6-8% via Extreme Value Theory"
      ],
      color: "secondary",
      side: "right"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            From research assistant to AI project leadership, here's my journey in advancing AI solutions for manufacturing industries.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col lg:flex-row items-center">
                {/* Left side content */}
                <div className={`lg:w-1/2 ${exp.side === 'left' ? 'lg:pr-8' : 'lg:pr-8 lg:order-2'} mb-8 lg:mb-0`}>
                  {exp.side === 'left' && (
                    <div className="bg-white rounded-xl shadow-lg p-8 hover-lift">
                      <div className="flex items-center mb-4">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          exp.color === 'secondary' ? 'bg-secondary' :
                          exp.color === 'accent' ? 'bg-accent' :
                          'bg-primary'
                        }`}></div>
                        <span className={`text-sm font-medium ${
                          exp.color === 'secondary' ? 'text-secondary' :
                          exp.color === 'accent' ? 'text-accent' :
                          'text-primary'
                        }`}>
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{exp.position}</h3>
                      <h4 className="text-accent font-medium mb-4">{exp.company}</h4>
                      <ul className="text-muted-foreground space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-accent mt-1 mr-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Timeline dot */}
                <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                  exp.color === 'secondary' ? 'bg-secondary' :
                  exp.color === 'accent' ? 'bg-accent' :
                  'bg-primary'
                }`}></div>
                
                {/* Right side content */}
                <div className={`lg:w-1/2 ${exp.side === 'right' ? 'lg:pl-8' : 'lg:pl-8 lg:order-1'}`}>
                  {exp.side === 'right' && (
                    <div className="bg-white rounded-xl shadow-lg p-8 hover-lift">
                      <div className="flex items-center mb-4">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          exp.color === 'secondary' ? 'bg-secondary' :
                          exp.color === 'accent' ? 'bg-accent' :
                          'bg-primary'
                        }`}></div>
                        <span className={`text-sm font-medium ${
                          exp.color === 'secondary' ? 'text-secondary' :
                          exp.color === 'accent' ? 'text-accent' :
                          'text-primary'
                        }`}>
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{exp.position}</h3>
                      <h4 className="text-accent font-medium mb-4">{exp.company}</h4>
                      <ul className="text-muted-foreground space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-accent mt-1 mr-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
