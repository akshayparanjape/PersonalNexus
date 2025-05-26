import { Cpu, Eye, Cloud, Calendar } from 'lucide-react';

export default function Research() {
  const researchAreas = [
    {
      icon: Cpu,
      title: "AI in Manufacturing",
      description: "Developing reinforcement learning frameworks for quality-oriented manufacturing processes, focusing on real-time optimization and predictive maintenance.",
      color: "secondary"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Applying deep learning and semantic segmentation techniques for industrial quality inspection and non-destructive testing applications.",
      color: "accent"
    },
    {
      icon: Cloud,
      title: "MLOps & Cloud AI",
      description: "Developing scalable ML infrastructure using Kubernetes, microservices, and cloud-native solutions for industrial AI deployment.",
      color: "primary"
    }
  ];

  const researchProjects = [
    {
      title: "SSQC & SySpot Projects",
      description: "Image segmentation-based quality inspection systems for manufacturing processes.",
      period: "2021-2023",
      tags: "Computer Vision, Quality Control",
      color: "secondary"
    },
    {
      title: "IRLEQUM & DiMAD",
      description: "AI frameworks development for various manufacturing use-cases with industry partners.",
      period: "2020-2022",
      tags: "AI Frameworks, Manufacturing",
      color: "accent"
    },
    {
      title: "Cloud56 (Industrial IoT)",
      description: "AI-based predictive maintenance on 5G network using CloudRAN for industrial applications.",
      period: "2019-2021",
      tags: "IoT, 5G, Predictive Maintenance",
      color: "primary"
    },
    {
      title: "Open Set Classification (Zeiss IP)",
      description: "Deep learning approach using Extreme Value Theory, improving accuracy by 6-8%.",
      period: "2018-2019",
      tags: "Deep Learning, Classification",
      color: "secondary"
    }
  ];

  return (
    <section id="research" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Research & Publications</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Bridging academic research with industry applications through peer-reviewed publications and innovative research projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Research Areas */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Research Focus Areas</h3>
            <div className="space-y-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      area.color === 'secondary' ? 'bg-secondary/10' :
                      area.color === 'accent' ? 'bg-accent/10' :
                      'bg-primary/10'
                    }`}>
                      <area.icon className={`w-6 h-6 ${
                        area.color === 'secondary' ? 'text-secondary' :
                        area.color === 'accent' ? 'text-accent' :
                        'text-primary'
                      }`} />
                    </div>
                    <h4 className="text-lg font-bold text-primary">{area.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Research Projects */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Notable Research Projects</h3>
            <div className="space-y-6">
              {researchProjects.map((project, index) => (
                <div key={index} className={`border-l-4 pl-6 ${
                  project.color === 'secondary' ? 'border-secondary' :
                  project.color === 'accent' ? 'border-accent' :
                  'border-primary'
                }`}>
                  <h4 className="font-bold text-primary mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{project.period}</span>
                    <span className="mx-2">•</span>
                    <span>{project.tags}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Research Metrics */}
            <div className="mt-8 bg-slate-50 rounded-xl p-6">
              <h4 className="font-bold text-primary mb-4">Research Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">9</div>
                  <div className="text-sm text-muted-foreground">Research Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">8+</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
              </div>
            </div>

            {/* Key Publications */}
            <div className="mt-8">
              <h4 className="font-bold text-primary mb-6">Key Publications</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-secondary">
                  <h5 className="font-medium text-primary mb-2">Quality-oriented Production process parameter optimization based on Predictive Model</h5>
                  <p className="text-sm text-muted-foreground mb-2">IconPro Conference Presentation, Manufacturing Automation</p>
                  <a href="#" className="text-secondary text-sm hover:underline">View Publication →</a>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-accent">
                  <h5 className="font-medium text-primary mb-2">AI-driven Semantic Segmentation for Ultrasonic NDT in Welding</h5>
                  <p className="text-sm text-muted-foreground mb-2">Computer Vision & Manufacturing Quality Control</p>
                  <a href="#" className="text-accent text-sm hover:underline">View Publication →</a>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                  <h5 className="font-medium text-primary mb-2">Reinforcement Learning Applications in Wire-EDM Process Optimization</h5>
                  <p className="text-sm text-muted-foreground mb-2">Advanced Manufacturing & Process Control</p>
                  <a href="#" className="text-primary text-sm hover:underline">View Publication →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
