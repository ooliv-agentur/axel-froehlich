
import React from 'react';

export const WhySection = () => {
  return (
    <section className="py-32 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <p className="text-2xl md:text-3xl font-light text-luxury-text leading-relaxed">
                Seit über 30 Jahren realisieren wir besondere Bäder für anspruchsvolle Menschen. 
                Unsere Planung verbindet gestalterisches Feingefühl mit fundiertem Fachwissen – 
                für Ergebnisse, die nicht nur funktional überzeugen, sondern berühren.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 animate-fade-in">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-thin text-luxury-gold mb-4">30+</div>
                <p className="text-luxury-text/70 text-sm uppercase tracking-wider">Jahre Erfahrung</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-thin text-luxury-gold mb-4">500</div>
                <p className="text-luxury-text/70 text-sm uppercase tracking-wider">m² Showroom</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-thin text-luxury-gold mb-4">3D</div>
                <p className="text-luxury-text/70 text-sm uppercase tracking-wider">Planung</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-thin text-luxury-gold mb-4">∞</div>
                <p className="text-luxury-text/70 text-sm uppercase tracking-wider">Möglichkeiten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
