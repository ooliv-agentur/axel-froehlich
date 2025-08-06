
import React from 'react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Wellness-Oase Wiesbaden",
      subtitle: "Spa-Atmosphäre zuhause",
      description: "Freistehende Badewanne, begehbare Dusche und edle Natursteinverkleidung schaffen eine luxuriöse Wellness-Atmosphäre."
    },
    {
      title: "Moderne Eleganz Mainz", 
      subtitle: "Minimalistisches Design",
      description: "Klare Linien, hochwertige Materialien und intelligente Beleuchtung vereinen sich zu einem zeitlos eleganten Badezimmer."
    },
    {
      title: "Familientraum Taunus",
      subtitle: "Funktional & stilvoll", 
      description: "Großzügiger Waschtisch, praktische Stauraumlösungen und kindgerechte Elemente – perfekt für die ganze Familie."
    },
    {
      title: "Penthouse Frankfurt",
      subtitle: "Luxus pur",
      description: "Exklusive Armaturen, maßgefertigte Möbel und eine spektakuläre Skyline-Aussicht machen dieses Bad zu etwas Besonderem."
    }
  ];

  return (
    <section id="inspiration" className="section-spacing bg-luxury-black">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20 sm:mb-28 lg:mb-32 xl:mb-40 text-center lg:text-left">
            <div className="w-16 sm:w-20 h-1 bg-luxury-gold mb-10 sm:mb-12 mx-auto lg:mx-0"></div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin mb-16 sm:mb-20 text-luxury-white tracking-tight">
              Realisierte <span className="gold-accent font-serif italic">Projekte</span>
            </h2>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl text-luxury-text/80 leading-relaxed max-w-4xl font-light mx-auto lg:mx-0">
              Jedes Projekt erzählt seine eigene Geschichte – von der ersten Idee 
              bis zur vollendeten Umsetzung.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 xl:gap-28">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="aspect-[5/4] image-placeholder rounded-sm relative overflow-hidden mb-8 sm:mb-10">
                  <div className="absolute bottom-2 right-2">
                    <div className="text-luxury-gold/20 text-xs font-light">{project.title}</div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div>
                  <p className="text-luxury-gold text-base sm:text-lg font-light mb-3 sm:mb-4 uppercase tracking-wide">
                    {project.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-5 text-white">
                    {project.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-20 sm:mt-28 lg:mt-32 xl:mt-40">
            <p className="text-xl sm:text-2xl lg:text-3xl text-luxury-text/50 font-light italic max-w-3xl mx-auto leading-relaxed px-4">
              Möchten Sie mehr über unsere realisierten Projekte erfahren? 
              Wir zeigen Ihnen gerne weitere Referenzen in einem persönlichen Gespräch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
