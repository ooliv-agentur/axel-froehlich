
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
    <section id="referenzen" className="section-spacing bg-luxury-black">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-32 lg:mb-40">
            <div className="w-20 h-1 bg-luxury-gold mb-12"></div>
            <h2 className="text-6xl lg:text-7xl xl:text-8xl font-thin mb-16 text-luxury-white tracking-tight">
              Realisierte <span className="gold-accent font-serif italic">Projekte</span>
            </h2>
            
            <p className="text-2xl lg:text-3xl text-luxury-text/80 leading-relaxed max-w-4xl font-light">
              Jedes Projekt erzählt seine eigene Geschichte – von der ersten Idee 
              bis zur vollendeten Umsetzung.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="aspect-[5/4] image-placeholder rounded-sm mb-12 relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-luxury-text/30 text-xl font-light mb-4">{project.title}</div>
                    <div className="text-luxury-text/20 text-lg">Referenz Projekt</div>
                    <div className="text-luxury-text/20 text-lg">Empfehlung: Atmosphärische Badaufnahme</div>
                  </div>
                  
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-luxury-gold text-sm font-light mb-2">{project.subtitle}</p>
                    <p className="text-luxury-white text-lg">{project.description}</p>
                  </div>
                </div>
                
                {/* Project Details */}
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light mb-6 text-luxury-white group-hover:text-luxury-gold transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-xl lg:text-2xl text-luxury-text/70 font-light mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-lg text-luxury-text/60 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-32 lg:mt-40">
            <p className="text-xl lg:text-2xl text-luxury-text/50 font-light italic max-w-3xl mx-auto leading-relaxed">
              Möchten Sie mehr über unsere realisierten Projekte erfahren? 
              Wir zeigen Ihnen gerne weitere Referenzen in einem persönlichen Gespräch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
