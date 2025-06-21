
import React from 'react';

export const PlanningSection = () => {
  const benefits = [
    'Grundriss & 3D-Visualisierung',
    'Individuelle Beratung durch Experten',
    'Optimale Raumnutzung & Materialkombination'
  ];

  return (
    <section id="planung" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-brand-dark/30 to-brand-gold/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-2 border-white/50 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">3D</span>
                  </div>
                  <p className="text-lg font-medium">3D-Badplanung</p>
                  <p className="text-sm opacity-75">Fotorealistisch</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-gold/10 rounded-full"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-dark">
              <span className="gold-accent">3D-Badplanung</span> – Ihr Bad wird sichtbar
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Mit unserer 3D-Planung erhalten Sie ein nahezu realistisches Bild Ihres zukünftigen Bades. 
              Ob Gäste-WC, Wellnessbereich oder luxuriöses Familienbad: Wir übersetzen Ihre Ideen 
              in konkrete Raumlösungen.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-serif font-semibold mb-4 text-brand-dark">
                Ihre Vorteile:
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-4"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-600 italic">
              (Die Kosten unserer Planungspakete richten sich nach Größe und Anspruch des Projekts.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
