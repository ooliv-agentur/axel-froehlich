
import React from 'react';
import { Button } from '@/components/ui/button';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Natursteinbad mit freistehender Wanne',
      description: 'Luxuriöse Raumgestaltung mit natürlichen Materialien'
    },
    {
      title: 'Monochromes Gäste-WC mit Tapetenlösung',
      description: 'Elegante Wandgestaltung für kleine Räume'
    },
    {
      title: 'Wellnessbad mit Sauna & Dusche',
      description: 'Optimale Raumnutzung unter der Dachschräge'
    },
    {
      title: 'Stilvolle Sanierung mit Sichtbeton',
      description: 'Moderner Industrial-Style mit Goldakzenten'
    }
  ];

  return (
    <section id="projekte" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark">
            Projekte & <span className="gold-accent">Inspiration</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Ein Auszug realisierter Kundenprojekte – von zeitlos-elegant bis expressiv-modern:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="w-full h-full bg-gradient-to-br from-brand-dark/20 to-brand-gold/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-12 h-12 border border-white/50 rounded mx-auto mb-2"></div>
                    <p className="text-sm opacity-75">Projekt {index + 1}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2 text-brand-dark">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="brand-button-outline"
            onClick={() => window.open('#', '_blank')}
          >
            Weitere Projekte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};
