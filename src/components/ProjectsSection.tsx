
import React from 'react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Penthouse München",
      subtitle: "Minimalistisches Design",
      description: "Reduzierte Formensprache mit hochwertigen Materialien"
    },
    {
      title: "Villa Frankfurt", 
      subtitle: "Klassische Eleganz",
      description: "Zeitlose Gestaltung mit modernen Akzenten"
    },
    {
      title: "Loft Berlin",
      subtitle: "Industrial Chic", 
      description: "Urbane Ästhetik trifft auf Luxus"
    },
    {
      title: "Residenz Hamburg",
      subtitle: "Exklusive Ausstattung",
      description: "Maßgeschneiderte Lösungen für höchste Ansprüche"
    }
  ];

  return (
    <section id="inspiration" className="section-spacing bg-luxury-black">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 sm:mb-24 lg:mb-32 xl:mb-40 text-center lg:text-left">
            <div className="w-16 sm:w-20 h-1 bg-luxury-gold mb-8 sm:mb-12 mx-auto lg:mx-0"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin mb-12 sm:mb-16 text-luxury-white tracking-tight">
              Realisierte <span className="gold-accent font-serif italic">Projekte</span>
            </h2>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-luxury-text/80 leading-relaxed max-w-4xl font-light mx-auto lg:mx-0">
              Jedes Projekt erzählt seine eigene Geschichte – von der ersten Idee 
              bis zur vollendeten Umsetzung.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-24">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="aspect-[5/4] image-placeholder rounded-sm relative overflow-hidden mb-6 sm:mb-8">
                  <div className="absolute bottom-2 right-2">
                    <div className="text-luxury-gold/20 text-xs font-light">{project.title}</div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div>
                  <p className="text-luxury-gold text-sm font-light mb-2 uppercase tracking-wide">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-2 sm:mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16 sm:mt-24 lg:mt-32 xl:mt-40">
            <p className="text-lg sm:text-xl lg:text-2xl text-luxury-text/50 font-light italic max-w-3xl mx-auto leading-relaxed px-4">
              Möchten Sie mehr über unsere realisierten Projekte erfahren? 
              Wir zeigen Ihnen gerne weitere Referenzen in einem persönlichen Gespräch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
