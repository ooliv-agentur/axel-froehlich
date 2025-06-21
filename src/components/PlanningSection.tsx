
import React from 'react';

export const PlanningSection = () => {
  const advantages = [
    'Grundriss & 3D-Visualisierung',
    'Individuelle Beratung durch Experten', 
    'Optimale Raumnutzung & Materialkombination'
  ];

  return (
    <section id="planung" className="py-40 lg:py-52 bg-luxury-gray relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-luxury-gold/5 to-transparent"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 lg:gap-32 items-center">
            
            {/* Large Planning Showcase */}
            <div className="lg:col-span-7 animate-fade-in">
              <div className="space-y-8">
                {/* Main 3D Visualization */}
                <div className="aspect-[16/10] image-placeholder rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent"></div>
                  <div className="text-center h-full flex flex-col justify-center relative z-10">
                    <div className="text-luxury-text/40 text-3xl font-light mb-6">3D-Planung Showcase</div>
                    <div className="text-luxury-text/30 text-xl mb-2">Fotorealistische Visualisierung</div>
                    <div className="text-luxury-text/30 text-lg">Ihr Traumbad wird sichtbar</div>
                  </div>
                </div>
                
                {/* Before/After or Process Steps */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="aspect-[4/3] image-placeholder rounded-sm">
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">Grundriss</div>
                      <div className="text-luxury-text/20 text-sm">Raumplanung</div>
                    </div>
                  </div>
                  <div className="aspect-[4/3] image-placeholder rounded-sm">
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-luxury-text/30 text-lg font-light mb-2">3D-Ansicht</div>
                      <div className="text-luxury-text/20 text-sm">Realistische Darstellung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="mb-12">
                <div className="w-20 h-1 bg-luxury-gold mb-12"></div>
                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-thin mb-16 text-luxury-white tracking-tight leading-tight">
                  3D-Badplanung –{' '}
                  <span className="gold-accent font-serif italic block mt-4">Ihr Bad wird sichtbar</span>
                </h2>
              </div>
              
              <div className="mb-20">
                <p className="text-2xl lg:text-3xl text-luxury-text/90 mb-16 leading-relaxed font-light">
                  Mit unserer 3D-Planung erhalten Sie ein nahezu realistisches Bild Ihres zukünftigen Bades.
                </p>
                
                <p className="text-xl lg:text-2xl text-luxury-text/70 mb-16 leading-relaxed font-light">
                  Ob Gäste-WC, Wellnessbereich oder luxuriöses Familienbad: Wir übersetzen Ihre Ideen in konkrete Raumlösungen.
                </p>
                
                <div className="space-y-8 mb-16">
                  <h3 className="text-2xl lg:text-3xl font-light text-luxury-gold mb-12">
                    Ihre Vorteile:
                  </h3>
                  {advantages.map((advantage, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-6 animate-slide-in group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-125"></div>
                      <span className="text-xl lg:text-2xl text-luxury-text/80 font-light leading-relaxed group-hover:text-luxury-gold transition-colors duration-300">{advantage}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg lg:text-xl text-luxury-text/50 font-light italic">
                  Die Kosten unserer Planungspakete richten sich nach Größe und Anspruch des Projekts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
