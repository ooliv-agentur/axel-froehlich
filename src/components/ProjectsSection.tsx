
import React from 'react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Natursteinbad mit freistehender Wanne",
      description: "Zeitlose Eleganz mit natürlichen Materialien",
      size: "large"
    },
    {
      title: "Monochromes Gäste-WC mit Tapetenlösung", 
      description: "Kleine Räume, große Wirkung",
      size: "medium"
    },
    {
      title: "Wellnessbad mit Sauna & Dusche",
      description: "Dachschräge optimal genutzt",
      size: "medium"
    },
    {
      title: "Stilvolle Sanierung mit Sichtbeton",
      description: "Moderne Interpretation klassischer Formen",
      size: "large"
    }
  ];

  return (
    <section id="projekte" className="py-40 lg:py-52 bg-luxury-black">
      <div className="container mx-auto px-8">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-40 lg:mb-48">
            <h2 className="text-6xl lg:text-7xl xl:text-8xl font-thin mb-16 text-luxury-white tracking-tight leading-tight">
              Projekte & <span className="gold-accent font-serif italic">Inspiration</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-luxury-text/80 max-w-5xl mx-auto leading-relaxed font-light">
              Ein Auszug realisierter Kundenprojekte – von zeitlos-elegant bis expressiv-modern
            </p>
          </div>

          {/* Masonry-Style Project Grid */}
          <div className="grid grid-cols-12 gap-8 mb-24">
            {/* Large Project 1 */}
            <div className="col-span-12 lg:col-span-8 animate-fade-in">
              <div className="group">
                <div className="aspect-[16/10] image-placeholder rounded-sm mb-10 group-hover:border-luxury-gold/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-luxury-gold text-sm font-light tracking-wide">PROJEKT 01</div>
                  </div>
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="text-luxury-text/30 text-2xl font-light mb-4">Natursteinbad</div>
                    <div className="text-luxury-text/20 text-lg">Freistehende Wanne & Naturstein</div>
                  </div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-light mb-6 text-luxury-white group-hover:text-luxury-gold transition-colors duration-500">
                  {projects[0].title}
                </h3>
                <p className="text-xl lg:text-2xl text-luxury-text/70 font-light leading-relaxed">
                  {projects[0].description}
                </p>
              </div>
            </div>

            {/* Medium Projects */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              {projects.slice(1, 3).map((project, index) => (
                <div 
                  key={index + 1} 
                  className="group animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <div className="aspect-[4/3] image-placeholder rounded-sm mb-8 group-hover:border-luxury-gold/50 transition-colors duration-500">
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">Projekt {index + 2}</div>
                      <div className="text-luxury-text/20 text-sm">{project.title.split(' ').slice(0, 2).join(' ')}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light mb-4 text-luxury-white group-hover:text-luxury-gold transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-luxury-text/70 font-light">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Large Project 2 */}
            <div className="col-span-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="group">
                <div className="aspect-[21/9] image-placeholder rounded-sm mb-10 group-hover:border-luxury-gold/50 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/60 via-transparent to-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-luxury-gold text-sm font-light tracking-wide">PROJEKT 04</div>
                  </div>
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="text-luxury-text/30 text-2xl font-light mb-4">Sichtbeton-Sanierung</div>
                    <div className="text-luxury-text/20 text-lg">Moderne Interpretation klassischer Formen</div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-end">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-light mb-6 text-luxury-white group-hover:text-luxury-gold transition-colors duration-500">
                      {projects[3].title}
                    </h3>
                    <p className="text-xl lg:text-2xl text-luxury-text/70 font-light leading-relaxed">
                      {projects[3].description}
                    </p>
                  </div>
                  <div className="text-right">
                    <a 
                      href="#projekte" 
                      className="inline-block text-xl text-luxury-gold hover:text-luxury-white transition-colors duration-500 font-light tracking-wide border-b border-luxury-gold/30 hover:border-luxury-white/30 pb-2"
                    >
                      Weitere Projekte ansehen →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
