
import React from 'react';

export const PlanningSection = () => {
  const advantages = [
    'Grundriss & 3D-Visualisierung',
    'Individuelle Beratung durch Experten', 
    'Optimale Raumnutzung & Materialkombination'
  ];

  return (
    <section id="planung" className="section-spacing bg-luxury-gray">
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 lg:gap-24 items-center">
            
            {/* Large Image Placeholder */}
            <div className="lg:col-span-7 animate-fade-in">
              <div className="aspect-[16/10] image-placeholder rounded-sm">
                <div className="text-center">
                  <div className="text-luxury-text/30 text-2xl font-light mb-4">3D-Planung Showcase</div>
                  <div className="text-luxury-text/20 text-lg">Vorher/Nachher Visualisierung</div>
                  <div className="text-luxury-text/20 text-lg">oder 3D-Rendering Beispiel</div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-thin mb-12 text-luxury-white tracking-tight leading-tight">
                3D-Badplanung –{' '}
                <span className="gold-accent">Ihr Bad wird sichtbar</span>
              </h2>
              
              <div className="mb-16">
                <p className="editorial-text text-luxury-text/90 mb-12">
                  Mit unserer 3D-Planung erhalten Sie ein nahezu realistisches Bild Ihres zukünftigen Bades. 
                  Ob Gäste-WC, Wellnessbereich oder luxuriöses Familienbad: Wir übersetzen Ihre Ideen in konkrete Raumlösungen.
                </p>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-light text-luxury-white mb-8">
                    Ihre Vorteile:
                  </h3>
                  {advantages.map((advantage, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 animate-slide-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-xl text-luxury-text/80 font-light leading-relaxed">{advantage}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg text-luxury-text/60 font-light italic mt-12">
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
