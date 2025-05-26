import { ChevronDown, Linkedin, Github, Youtube, Mail, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePic from '@assets/profile-pic-800kb.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
                Ph.D. Candidate & AI Research Leader
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                Hi, I'm <span className="text-secondary">Akshay</span> Paranjape
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Bridging academic research with industry-oriented AI solutions. Leading AI innovation in manufacturing with 7+ years of experience in machine learning, cloud architecture, and entrepreneurship.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="bg-secondary text-white hover:bg-secondary/90 hover-lift">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://linkedin.com/in/akshayparanjape2" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="mailto:contact@akshayparanjape.com" className="text-muted-foreground hover:text-secondary transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in relative">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img 
                  src={profilePic} 
                  alt="Akshay Paranjape - Professional Portrait" 
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-bounce-slow">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-secondary" />
      </div>
    </section>
  );
}
