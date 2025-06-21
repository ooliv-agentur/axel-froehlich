
import React from 'react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Natursteinbad mit freistehender Wanne',
      description: 'Zeitlose Eleganz in Naturstein'
    },
    {
      title: 'Monochromes Gäste-WC',
      description: 'Minimalistisches Design mit Tapetenlösung'
    },
    {
      title: 'Wellnessbad mit Sauna',
      description: 'Luxuriöse Entspannung unter der Dachschräge'
    },
    {
      title: 'Stilvolle Sanierung',
      description: 'Sichtbeton und Goldakzente in perfekter Harmonie'
    }
  ];

  return (
    <section id="projekte" className="py-32 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-thin mb-8 text-luxury-white tracking-tight">
            Projekte & <span className="gold-accent">Inspiration</span>
          </h2>
          
          <p className="text-xl text-luxury-text/80 leading-relaxed max-w-4xl mx-auto">
            Ein Auszug realisierter Kundenprojekte – von zeitlos-elegant bis expressiv-modern
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-luxury-black to-luxury-gray rounded-lg overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-luxury-gold/20 to-luxury-black/80 flex items-center justify-center">
                  <div className="text-center text-luxury-white">
                    <div className="text-2xl font-light">{project.title}</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-light text-luxury-white mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-luxury-text/70">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
