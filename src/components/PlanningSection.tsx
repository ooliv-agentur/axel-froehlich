
import React from 'react';
import { Button } from '@/components/ui/button';

export const PlanningSection = () => {
  return (
    <section id="beratung-planung" className="section-spacing bg-luxury-gray relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #a68343 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-32 lg:mb-40">
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-12"></div>
            <h2 className="text-6xl lg:text-7xl xl:text-8xl font-thin mb-16 text-luxury-white tracking-tight">
              3D-Planung <span className="gold-accent font-serif italic">erleben</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-32">
            {/* Large 3D Visualization */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] image-placeholder rounded-sm relative overflow-hidden">
                <div className="text-center z-10 relative">
                  <div className="inline-flex items-center px-4 py-2 bg-luxury-black/60 backdrop-blur-sm rounded border border-luxury-gold/30 mb-4">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                    <div className="text-luxury-gold text-sm font-light tracking-wide">3D-VISUALIZATION</div>
                  </div>
                  <div className="text-luxury-text/50 text-lg">Fotorealistisches Rendering</div>
                  <div className="text-luxury-text/40 text-sm mt-2">Empfehlung: Beeindruckende 3D-Darstellung</div>
                </div>
                {/* Overlay with planning details */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-luxury-white">
                  <p className="text-sm font-light mb-2">Projekt Beispiel</p>
                  <p className="text-luxury-gold text-lg">Luxusbad Privatresidenz</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-light mb-16 text-luxury-white leading-tight">
                Sehen Sie Ihr Traumbad, bevor es entsteht
              </h3>
              
              <div className="space-y-12 text-luxury-text/80 mb-16">
                <p className="text-2xl lg:text-3xl leading-relaxed font-light">
                  Mit modernster 3D-Technologie erstellen wir fotorealistische Visualisierungen 
                  Ihres zukünftigen Badezimmers.
                </p>
                
                <p className="text-xl lg:text-2xl leading-relaxed font-light">
                  Jedes Detail wird sichtbar – von der Lichtführung über Materialstrukturen 
                  bis hin zur perfekten Raumaufteilung.
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-lg px-16 py-8 font-light tracking-wide"
              >
                3D-Planung anfragen
              </Button>
            </div>
          </div>

          {/* Planning Features Grid */}
          <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
            {[
              {
                title: "Detailgenauigkeit",
                description: "Millimetergenaue Planung mit allen technischen Spezifikationen"
              },
              {
                title: "Materialvisualisierung", 
                description: "Originalgetreue Darstellung aller Oberflächen und Texturen"
              },
              {
                title: "Lichtkonzept",
                description: "Realistische Beleuchtungsszenarien für verschiedene Tageszeiten"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 border border-luxury-gold/30 rounded-full mx-auto mb-8 flex items-center justify-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                </div>
                <h4 className="text-xl lg:text-2xl font-light mb-6 text-luxury-white">
                  {feature.title}
                </h4>
                <p className="text-lg text-luxury-text/70 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
