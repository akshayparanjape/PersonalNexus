import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, PlayCircle, FileText, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@shared/schema';

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: showAllProjects ? ['/api/projects'] : ['/api/projects?featured=true'],
  });

  if (isLoading) {
    return (
      <section id="projects" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {showAllProjects ? "All Projects" : "Featured Projects"}
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            {showAllProjects 
              ? "Complete portfolio of AI research projects, manufacturing solutions, and technical innovations."
              : "Discover my key projects spanning AI for manufacturing, reinforcement learning, and cloud-native solutions."
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <img 
                src={project.imageUrl || '/placeholder-project.jpg'} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Badge variant="secondary" className={`${
                    project.category === 'AutoML Framework' ? 'bg-secondary/10 text-secondary' :
                    project.category === 'Real-time Monitoring' ? 'bg-accent/10 text-accent' :
                    'bg-primary/10 text-primary'
                  }`}>
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" className="text-secondary hover:text-secondary/80 p-0">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <div className="flex space-x-2">
                    {project.projectUrl && (
                      <a href={project.projectUrl} className="text-muted-foreground hover:text-secondary">
                        <PlayCircle className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-muted-foreground hover:text-secondary">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <a href="#" className="text-muted-foreground hover:text-secondary">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-secondary text-white hover:bg-secondary/90 hover-lift"
          >
            <span>{showAllProjects ? "Show Featured Only" : "View All Projects"}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
