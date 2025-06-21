
import React from 'react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Natursteinbad mit freistehender Wanne",
      description: "Zeitlose Eleganz mit natürlichen Materialien"
    },
    {
      title: "Monochromes Gäste-WC mit Tapetenlösung", 
      description: "Kleine Räume, große Wirkung"
    },
    {
      title: "Wellnessbad mit Sauna & Dusche",
      description: "Dachschräge optimal genutzt"
    },
    {
      title: "Stilvolle Sanierung mit Sichtbeton",
      description: "Moderne Interpretation klassischer Formen"
    }
  ];

  return (
    <section id="projekte" className="section-spacing bg-luxury-black">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="section-title">
              Projekte & <span className="gold-accent">Inspiration</span>
            </h2>
            <p className="editorial-text text-luxury-text/80 max-w-4xl mx-auto">
              Ein Auszug realisierter Kundenprojekte – von zeitlos-elegant bis expressiv-modern
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 mb-20">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/3] image-placeholder rounded-sm mb-8 group-hover:border-luxury-gold/50 transition-colors duration-500">
                  <div className="text-center">
                    <div className="text-luxury-text/30 text-lg font-light mb-2">Projekt {index + 1}</div>
                    <div className="text-luxury-text/20 text-sm">{project.title}</div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light mb-4 text-luxury-white group-hover:text-luxury-gold transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-xl text-luxury-text/70 font-light">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="#projekte" 
              className="text-xl text-luxury-gold hover:text-luxury-white transition-colors duration-500 font-light tracking-wide"
            >
              Weitere Projekte ansehen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
