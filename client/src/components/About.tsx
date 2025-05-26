export default function About() {
  const skills = [
    {
      category: "Machine Learning & AI",
      items: ["Deep Learning", "Reinforcement Learning", "CNNs", "Transformers", "Generative AI", "AutoML"],
      color: "secondary"
    },
    {
      category: "MLOps & Cloud",
      items: ["Kubernetes", "Docker", "Azure", "AWS", "MLflow"],
      color: "accent"
    },
    {
      category: "Programming & Frameworks",
      items: ["Python", "TensorFlow", "PyTorch", "C++", "MATLAB"],
      color: "primary"
    }
  ];

  const education = [
    {
      degree: "Ph.D. AI in Manufacturing (In Progress)",
      institution: "RWTH Aachen University, in collaboration with WZL & Fraunhofer IPT",
      color: "secondary"
    },
    {
      degree: "M.Sc. Simulation Sciences",
      institution: "RWTH Aachen University",
      color: "accent"
    },
    {
      degree: "B.Tech. Engineering Physics",
      institution: "IIT Delhi",
      color: "primary"
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-primary mb-6">Industrial AI and Innovation Leader</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently pursuing my Ph.D. at RWTH Aachen University, I specialize in AI for manufacturing with a focus on Reinforcement Learning for quality-oriented production processes. My work bridges the gap between cutting-edge academic research and practical industrial applications.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As Head of AI Project at IconPro GmbH, I lead cross-functional teams and guide strategic AI implementations for key clients, ensuring scalable solutions that drive measurable business value.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm passionate about <strong className="text-accent">entrepreneurship</strong> and believe in the transformative power of AI to revolutionize manufacturing processes. My goal is to create innovative solutions that make production more efficient, sustainable, and intelligent.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
                <div className="text-3xl font-bold text-secondary mb-2">7+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Technical Expertise</h3>
            
            {/* Skills Grid */}
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-primary mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          skillGroup.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                          skillGroup.color === 'accent' ? 'bg-accent/10 text-accent' :
                          'bg-primary/10 text-primary'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Education Highlights */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-primary mb-4">Education Highlights</h4>
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      edu.color === 'secondary' ? 'bg-secondary' :
                      edu.color === 'accent' ? 'bg-accent' :
                      'bg-primary'
                    }`}></div>
                    <div>
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">{edu.institution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
