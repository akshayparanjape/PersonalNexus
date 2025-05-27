import { useState } from 'react';
import { Button } from '@/components/ui/button';
import informal1 from '@assets/informal1.jpg';
import informal2 from '@assets/informal2.jpg';
import informal3 from '@assets/informal3.jpg';
import conferencePresentation from '@assets/WhatsApp Image 2025-05-26 at 21.24.10_f740dab1.jpg';
import eventOutdoor from '@assets/WhatsApp Image 2025-05-09 at 10.07.48_bdaeddc0.jpg';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('professional');

  const galleries = {
    professional: [
      {
        src: conferencePresentation,
        title: "Research Presentation",
        description: "Presenting AI production optimization at IconPro conference"
      },
      {
        src: eventOutdoor,
        title: "Industry Conference",
        description: "Attending Control trade fair - manufacturing automation event"
      },
      {
        src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        title: "Affiliated Institute",
        description: "WZL RWTH Aachen & Fraunhofer IPT - Advanced manufacturing and AI research facilities"
      }
    ],
    'behind-scenes': [
      {
        src: informal2,
        title: "Team Collaboration",
        description: "Casual team meeting with research colleagues"
      },
      {
        src: informal3,
        title: "Cooking Passion",
        description: "Taking a break from research to cook"
      },
      {
        src: informal1,
        title: "Family Time",
        description: "Quality time with family during travels"
      }
    ],
    events: [
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        title: "AI Conference Presentation",
        description: "Presenting research findings at international conference"
      },
      {
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        title: "Industry Workshop",
        description: "Leading AI workshop for manufacturing professionals"
      },
      {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        title: "Academic Milestone",
        description: "Graduation ceremony at RWTH Aachen"
      }
    ]
  };

  const tabs = [
    { id: 'professional', label: 'Professional' },
    { id: 'behind-scenes', label: 'Behind the Scenes' }
  ];

  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Behind the scenes moments, professional events, and team collaborations that shape my journey in AI research and development.
          </p>
        </div>
        
        {/* Gallery Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-secondary text-white' 
                    : 'text-muted-foreground hover:text-secondary'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Gallery Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries[activeTab as keyof typeof galleries]?.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
