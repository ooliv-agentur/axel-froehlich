import React from 'react';

export const ShowroomSection = () => {
  return (
    <section id="ausstellung" className="section-spacing bg-luxury-black relative overflow-hidden">
      {/* Large Showroom Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full image-placeholder">
          <div className="absolute top-4 left-4 z-10">
            <div className="inline-flex items-center px-2 py-1 bg-luxury-black/80 backdrop-blur-sm rounded border border-luxury-gold/20 opacity-40">
              <div className="w-1.5 h-1.5 bg-luxury-gold/60 rounded-full mr-2"></div>
              <div className="text-luxury-gold/60 text-xs font-light tracking-wide">SHOWROOM HAUPTBILD</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 luxury-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 xl:gap-32 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="w-16 sm:w-20 h-1 bg-luxury-gold mb-8 sm:mb-12 mx-auto lg:mx-0"></div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin mb-12 sm:mb-16 text-luxury-white tracking-tight">
                Showroom <span className="gold-accent font-serif italic">Mainz</span>
              </h2>
              
              <div className="space-y-8 sm:space-y-12 text-luxury-text/80">
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed font-light">
                  Auf 500m² zeigen wir Ihnen die Welt des exklusiven Baddesigns – 
                  zum Anfassen, Erleben und Inspirieren lassen.
                </p>
                
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                  Jede Ausstellungsecke erzählt eine eigene Geschichte von Qualität, 
                  Design und handwerklicher Perfektion. Von klassisch-zeitlos bis 
                  avantgardistisch-modern.
                </p>
              </div>
              
              <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-luxury-gold/20">
                <p className="text-base sm:text-lg font-light text-luxury-gold mb-3 sm:mb-4">Showroom-Besuch</p>
                <p className="text-luxury-text/70 text-sm sm:text-base">
                  Musterstraße 123, 55116 Mainz<br/>
                  Termine nach Vereinbarung
                </p>
              </div>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-8 lg:mt-0">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-12">
                <div className="aspect-[3/4] image-placeholder rounded-sm">
                  <div className="text-center px-2">
                    <div className="text-luxury-gold text-xs font-light mb-2 tracking-wide">BILDFLÄCHE</div>
                    <div className="text-luxury-text/50 text-xs sm:text-sm">Detail-Aufnahme</div>
                  </div>
                </div>
                <div className="aspect-[4/3] image-placeholder rounded-sm">
                  <div className="text-center px-2">
                    <div className="text-luxury-gold text-xs font-light mb-2 tracking-wide">BILDFLÄCHE</div>
                    <div className="text-luxury-text/50 text-xs sm:text-sm">Atmosphäre</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-12 mt-8 sm:mt-12 lg:mt-16">
                <div className="aspect-[4/3] image-placeholder rounded-sm">
                  <div className="text-center px-2">
                    <div className="text-luxury-gold text-xs font-light mb-2 tracking-wide">BILDFLÄCHE</div>
                    <div className="text-luxury-text/50 text-xs sm:text-sm">Materialien</div>
                  </div>
                </div>
                <div className="aspect-[3/4] image-placeholder rounded-sm">
                  <div className="text-center px-2">
                    <div className="text-luxury-gold text-xs font-light mb-2 tracking-wide">BILDFLÄCHE</div>
                    <div className="text-luxury-text/50 text-xs sm:text-sm">Inspiration</div>
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
