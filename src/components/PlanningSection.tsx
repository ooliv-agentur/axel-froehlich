
import React from 'react';

export const PlanningSection = () => {
  return (
    <section id="planung" className="py-32 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-luxury-black to-luxury-gray rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-luxury-gold/10 to-luxury-black/60 flex items-center justify-center">
                  <div className="text-center text-luxury-white">
                    <div className="text-8xl font-thin mb-4">3D</div>
                    <p className="text-xl font-light">Visualisierung</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in">
              <h2 className="text-5xl md:text-6xl font-thin mb-12 text-luxury-white tracking-tight">
                <span className="gold-accent">3D-Planung</span> – Ihr Bad wird sichtbar
              </h2>
              
              <p className="text-xl text-luxury-text/80 leading-relaxed mb-12">
                Mit unserer 3D-Planung erhalten Sie ein nahezu realistisches Bild Ihres zukünftigen Bades. 
                Ob Gäste-WC, Wellnessbereich oder luxuriöses Familienbad: Wir übersetzen Ihre Ideen 
                in konkrete Raumlösungen.
              </p>

              <div className="space-y-8">
                <div className="border-l-2 border-luxury-gold pl-6">
                  <h3 className="text-2xl font-light text-luxury-white mb-2">Grundriss & 3D-Visualisierung</h3>
                  <p className="text-luxury-text/70">Räumliche Darstellung aller Elemente</p>
                </div>
                <div className="border-l-2 border-luxury-gold pl-6">
                  <h3 className="text-2xl font-light text-luxury-white mb-2">Individuelle Beratung</h3>
                  <p className="text-luxury-text/70">Persönliche Betreuung durch Experten</p>
                </div>
                <div className="border-l-2 border-luxury-gold pl-6">
                  <h3 className="text-2xl font-light text-luxury-white mb-2">Optimale Raumnutzung</h3>
                  <p className="text-luxury-text/70">Perfekte Materialkombination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
