
import React from 'react';

export const ShowroomSection = () => {
  return (
    <section id="ausstellung" className="section-spacing bg-luxury-black relative overflow-hidden">
      {/* Large Showroom Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full image-placeholder">
        </div>
        <div className="absolute inset-0 luxury-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-32 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="w-16 sm:w-20 h-1 bg-luxury-gold mb-10 sm:mb-12 mx-auto lg:mx-0"></div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin mb-16 sm:mb-20 text-luxury-white tracking-tight">
                Showroom <span className="gold-accent font-serif italic">Mainz</span>
              </h2>
              
              <div className="space-y-10 sm:space-y-12 text-luxury-text/80">
                <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-light">
                  Auf 500m² zeigen wir Ihnen die Welt des exklusiven Baddesigns – 
                  zum Anfassen, Erleben und Inspirieren lassen.
                </p>
                
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light">
                  Jede Ausstellungsecke erzählt eine eigene Geschichte von Qualität, 
                  Design und handwerklicher Perfektion. Von klassisch-zeitlos bis 
                  avantgardistisch-modern.
                </p>
              </div>
              
              <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-luxury-gold/20">
                <p className="text-lg sm:text-xl font-light text-luxury-gold mb-4 sm:mb-5">Showroom-Besuch</p>
                <div className="text-luxury-text/70 text-base sm:text-lg space-y-2">
                  <p>Axel Fröhlich GmbH<br/>Rheinallee 120, 55120 Mainz</p>
                  <p className="mt-3">
                    Öffnungszeiten:<br/>
                    Di–Fr: 10–18 Uhr<br/>
                    Sa: 10–14 Uhr<br/>
                    Mo: geschlossen
                  </p>
                  <p className="mt-3">
                    Tel: +49 6131 945990<br/>
                    Mail: info@axel-froehlich.de
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mt-8 lg:mt-0">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12">
                <div className="aspect-[3/4] image-placeholder rounded-sm">
                </div>
                <div className="aspect-[4/3] image-placeholder rounded-sm">
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 mt-8 sm:mt-12 lg:mt-16">
                <div className="aspect-[4/3] image-placeholder rounded-sm">
                </div>
                <div className="aspect-[3/4] image-placeholder rounded-sm">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
