
import React from 'react';

export const ShowroomSection = () => {
  return (
    <section id="ausstellung" className="section-spacing bg-luxury-black relative overflow-hidden">
      {/* Large Showroom Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full image-placeholder">
          <div className="text-center">
            <div className="text-luxury-text/30 text-2xl font-light mb-4">Showroom Main Image</div>
            <div className="text-luxury-text/20 text-lg">500m² Ausstellung Mainz</div>
            <div className="text-luxury-text/20 text-lg">Empfehlung: Atmosphärische Showroom-Aufnahme</div>
          </div>
        </div>
        <div className="absolute inset-0 luxury-gradient"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Content */}
            <div>
              <div className="w-20 h-1 bg-luxury-gold mb-12"></div>
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-thin mb-16 text-luxury-white tracking-tight">
                Showroom <span className="gold-accent font-serif italic">Mainz</span>
              </h2>
              
              <div className="space-y-12 text-luxury-text/80">
                <p className="text-2xl lg:text-3xl leading-relaxed font-light">
                  Auf 500m² zeigen wir Ihnen die Welt des exklusiven Baddesigns – 
                  zum Anfassen, Erleben und Inspirieren lassen.
                </p>
                
                <p className="text-xl lg:text-2xl leading-relaxed font-light">
                  Jede Ausstellungsecke erzählt eine eigene Geschichte von Qualität, 
                  Design und handwerklicher Perfektion. Von klassisch-zeitlos bis 
                  avantgardistisch-modern.
                </p>
              </div>
              
              <div className="mt-16 pt-8 border-t border-luxury-gold/20">
                <p className="text-lg font-light text-luxury-gold mb-4">Showroom-Besuch</p>
                <p className="text-luxury-text/70">
                  Musterstraße 123, 55116 Mainz<br/>
                  Termine nach Vereinbarung
                </p>
              </div>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8 lg:space-y-12">
                <div className="aspect-[3/4] image-placeholder rounded-sm">
                  <div className="text-center">
                    <div className="text-luxury-text/30 text-lg font-light mb-2">Showroom 1</div>
                    <div className="text-luxury-text/20 text-sm">Detail Aufnahme</div>
                  </div>
                </div>
                <div className="aspect-[4/3] image-placeholder rounded-sm">
                  <div className="text-center">
                    <div className="text-luxury-text/30 text-lg font-light mb-2">Showroom 2</div>
                    <div className="text-luxury-text/20 text-sm">Atmosphäre</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 lg:space-y-12 mt-16">
                <div className="aspect-[4/3] image-placeholder rounded-sm">
                  <div className="text-center">
                    <div className="text-luxury-text/30 text-lg font-light mb-2">Showroom 3</div>
                    <div className="text-luxury-text/20 text-sm">Materialien</div>
                  </div>
                </div>
                <div className="aspect-[3/4] image-placeholder rounded-sm">
                  <div className="text-center">
                    <div className="text-luxury-text/30 text-lg font-light mb-2">Showroom 4</div>
                    <div className="text-luxury-text/20 text-sm">Inspiration</div>
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
