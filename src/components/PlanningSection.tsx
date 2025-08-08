import React from 'react';
import { Button } from '@/components/ui/button';
export const PlanningSection = () => {
  return <section id="beratung-planung" className="section-spacing bg-luxury-gray relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #a68343 2px, transparent 2px)`,
        backgroundSize: '80px 80px'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 sm:mb-28 lg:mb-32 xl:mb-40">
            <div className="w-20 sm:w-24 h-1 bg-luxury-gold mx-auto mb-10 sm:mb-12"></div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin mb-16 sm:mb-20 text-luxury-white tracking-tight">
              3D-Planung <span className="gold-accent font-serif italic">erleben</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-24 xl:gap-32 items-center mb-20 sm:mb-28 lg:mb-32">
            {/* Large 3D Visualization */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] image-placeholder rounded-sm relative overflow-hidden">
                <div className="absolute bottom-2 right-2 z-10">
                  <div className="inline-flex items-center px-2 py-1 bg-luxury-black/60 backdrop-blur-sm rounded border border-luxury-gold/10 opacity-30">
                    <div className="w-1 h-1 bg-luxury-gold/40 rounded-full mr-1.5"></div>
                    <div className="text-luxury-gold/40 text-xs font-light tracking-wide">3D</div>
                  </div>
                </div>
                {/* Overlay with planning details */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-luxury-white">
                  <p className="text-sm sm:text-base font-light mb-1 sm:mb-2">Projekt Beispiel</p>
                  <p className="text-luxury-gold text-base sm:text-lg lg:text-xl">Luxusbad Privatresidenz</p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-light mb-16 sm:mb-20 text-luxury-white leading-tight">
                Sehen Sie Ihr Traumbad, bevor es entsteht
              </h3>
              
              <div className="space-y-10 sm:space-y-12 text-luxury-text/80 mb-16 sm:mb-20">
                <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-light">
                  Mit modernster 3D-Technologie erstellen wir fotorealistische Visualisierungen 
                  Ihres zukünftigen Badezimmers.
                </p>
                
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light">
                  Jedes Detail wird sichtbar – von der Lichtführung über Materialstrukturen 
                  bis hin zur perfekten Raumaufteilung.
                </p>
              </div>
              
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/80 text-luxury-black text-lg sm:text-xl px-12 sm:px-16 py-6 sm:py-8 font-light tracking-wide">
                3D-Planung anfragen
              </Button>
            </div>
          </div>

          {/* 3D Planning Pricing Section */}
          <div className="mb-20 sm:mb-28 lg:mb-32">
            <div className="text-center mb-16 sm:mb-20">
              <div className="w-16 sm:w-20 h-1 bg-luxury-gold mx-auto mb-10 sm:mb-12"></div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-10 sm:mb-12 text-luxury-white tracking-tight">
                Professionelle <span className="gold-accent font-serif italic">Planung</span>
              </h3>
              <p className="text-xl sm:text-2xl lg:text-3xl text-luxury-text/70 font-light leading-relaxed max-w-4xl mx-auto">Unsere 3D-Planungsleistungen sind eine Investition in Ihr Projekt. </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {[{
              title: "Gäste WC",
              price: "490€",
              description: "Kompakte Planung für optimale Raumnutzung"
            }, {
              title: "Bad Planung",
              subtitle: "bis 8m²",
              price: "790€",
              description: "Durchdachte Lösung für kleinere Bäder"
            }, {
              title: "Bad Planung",
              subtitle: "bis 15m²",
              price: "890€",
              description: "Komfortable Planung für Familienbäder"
            }, {
              title: "Wellness Planung",
              subtitle: "bis 25m²",
              price: "1.290€",
              description: "Luxuriöse Planung für Spa-Erlebnis"
            }].map((plan, index) => <div key={index} className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 sm:p-10 relative overflow-hidden hover:border-luxury-gold/40 transition-all duration-300 group">
                  {/* Architectural corner elements */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-luxury-gold/40 transition-colors duration-300 group-hover:border-luxury-gold/60"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-luxury-gold/40 transition-colors duration-300 group-hover:border-luxury-gold/60"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-luxury-gold/40 transition-colors duration-300 group-hover:border-luxury-gold/60"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-luxury-gold/40 transition-colors duration-300 group-hover:border-luxury-gold/60"></div>
                  
                  <div className="text-center">
                    <h4 className="text-xl sm:text-2xl font-light mb-2 text-luxury-white">
                      {plan.title}
                    </h4>
<p
                        className={`text-luxury-gold/80 text-sm sm:text-base font-light mb-4 tracking-wide ${plan.subtitle ? '' : 'invisible'}`}
                        aria-hidden={!plan.subtitle}
                      >
                        {plan.subtitle || '\u00A0'}
                      </p>
                    <div className="mb-6">
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-luxury-gold mb-2">
                        {plan.price}
                      </div>
                      <div className="w-8 h-px bg-luxury-gold/50 mx-auto"></div>
                    </div>
                    <p className="text-luxury-text/70 text-sm sm:text-base font-light leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                </div>)}
            </div>

            <div className="text-center mt-16 sm:mt-20">
              <div className="bg-luxury-gray/5 border border-luxury-gold/20 p-8 sm:p-10 inline-block relative">
                {/* Architectural corner elements */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-luxury-gold/40"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-luxury-gold/40"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-luxury-gold/40"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-luxury-gold/40"></div>
                
                <p className="text-lg sm:text-xl text-luxury-gold font-light mb-4">
                  Professionelle Planung verhindert kostspielige Fehler
                </p>
                <p className="text-luxury-text/80 font-light leading-relaxed max-w-2xl">
                  Eine durchdachte 3D-Planung ist die Grundlage für jedes erfolgreiche Badprojekt. 
                  Sie sparen Zeit, Kosten und erhalten die Sicherheit, dass Ihr Traumbad genau so entsteht, wie Sie es sich vorstellen.
                </p>
              </div>
            </div>
          </div>

          {/* Planning Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-20 lg:gap-24">
            {[{
            title: "Detailgenauigkeit",
            description: "Millimetergenaue Planung mit allen technischen Spezifikationen"
          }, {
            title: "Materialvisualisierung",
            description: "Originalgetreue Darstellung aller Oberflächen und Texturen"
          }, {
            title: "Lichtkonzept",
            description: "Realistische Beleuchtungsszenarien für verschiedene Tageszeiten"
          }].map((feature, index) => <div key={index} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="w-16 sm:w-20 h-16 sm:h-20 border border-luxury-gold/30 rounded-full mx-auto mb-8 sm:mb-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 text-luxury-white">
                  {feature.title}
                </h4>
                <p className="text-lg sm:text-xl text-luxury-text/70 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};